# DeepUbuntuAV Microservice Migration Plan

## Repository Structure Overview

The new `deepubuntuav` repository will follow a **monorepo microservice architecture** with the following structure:

```
deepubuntuav/
├── README.md
├── docker-compose.yml              # Local development
├── docker-compose.prod.yml         # Production reference
├── .github/
│   ├── workflows/
│   │   ├── ci-cd-pipeline.yml
│   │   ├── service-deploy.yml
│   │   └── security-scan.yml
│   └── ISSUE_TEMPLATE/
├── docs/
│   ├── LLD.md                      # Updated from current LLD
│   ├── API_REFERENCE.md
│   ├── DEPLOYMENT_GUIDE.md
│   └── CONTRIBUTING.md
├── scripts/
│   ├── setup-dev.sh
│   ├── deploy.sh
│   └── migrate-data.sh
├── infrastructure/
│   ├── terraform/
│   │   ├── aws/
│   │   ├── gcp/
│   │   └── azure/
│   ├── kubernetes/
│   │   ├── namespaces/
│   │   ├── services/
│   │   ├── deployments/
│   │   └── monitoring/
│   └── docker/
│       └── base-images/
├── services/
│   ├── api-gateway/                # Kong/AWS API Gateway config
│   ├── web-portal/                 # React/Next.js frontend
│   ├── upload-service/             # Node.js upload handling
│   ├── user-service/               # Node.js user management
│   ├── metadata-service/           # FastAPI metadata extraction
│   ├── processing-orchestrator/    # Temporal.io workflows
│   ├── privacy-service/            # Face/license plate anonymization
│   ├── edge-detection-service/     # PyTorch edge case detection
│   ├── quality-service/            # Video quality analysis
│   ├── storage-service/            # S3/GCS abstraction
│   ├── notification-service/       # WebSocket/email notifications
│   └── analytics-service/          # Data analytics and reporting
├── shared/
│   ├── proto/                      # Protocol buffers for gRPC
│   ├── schemas/                    # Database schemas
│   ├── utils/                      # Shared utilities
│   └── types/                      # TypeScript type definitions
├── databases/
│   ├── postgresql/
│   │   ├── migrations/
│   │   └── seeds/
│   ├── mongodb/
│   │   └── collections/
│   └── redis/
│       └── config/
├── ml-models/
│   ├── face-detection/
│   ├── license-plate-detection/
│   ├── edge-case-detection/
│   └── quality-assessment/
├── tests/
│   ├── integration/
│   ├── e2e/
│   └── load/
└── tools/
    ├── monitoring/
    ├── logging/
    └── development/
```

## Migration Steps

### Phase 1: Repository Setup (Week 1)

#### 1.1 Create New Repository
```bash
# Create new repository on GitHub
gh repo create deepubuntuav --public --description "Crowdsourced Autonomous Vehicle Training Data Platform"

# Clone and setup
git clone https://github.com/[username]/deepubuntuav.git
cd deepubuntuav
```

#### 1.2 Setup Repository Structure
```bash
# Create directory structure
mkdir -p {services,shared,infrastructure,docs,scripts,tests,ml-models,tools,databases}
mkdir -p services/{api-gateway,web-portal,upload-service,user-service,metadata-service}
mkdir -p services/{processing-orchestrator,privacy-service,edge-detection-service}
mkdir -p services/{quality-service,storage-service,notification-service,analytics-service}
mkdir -p infrastructure/{terraform,kubernetes,docker}
mkdir -p shared/{proto,schemas,utils,types}
mkdir -p tests/{integration,e2e,load}
```

#### 1.3 Root Configuration Files

**docker-compose.yml** (Development)
```yaml
version: '3.8'

services:
  # Databases
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: deepubuntuav
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: devpass
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./databases/postgresql/migrations:/docker-entrypoint-initdb.d

  mongodb:
    image: mongo:6
    environment:
      MONGO_INITDB_ROOT_USERNAME: dev
      MONGO_INITDB_ROOT_PASSWORD: devpass
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data

  # Message Queue
  kafka:
    image: confluentinc/cp-kafka:latest
    depends_on:
      - zookeeper
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
    ports:
      - "9092:9092"

  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000

  # Services (will be added as we build them)
  api-gateway:
    build: ./services/api-gateway
    ports:
      - "8080:8080"
    depends_on:
      - postgres
      - redis
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://dev:devpass@postgres:5432/deepubuntuav
      - REDIS_URL=redis://redis:6379

volumes:
  postgres_data:
  mongodb_data:
  redis_data:
```

**package.json** (Root)
```json
{
  "name": "deepubuntuav",
  "version": "1.0.0",
  "description": "Crowdsourced Autonomous Vehicle Training Data Platform",
  "private": true,
  "workspaces": [
    "services/*",
    "shared/*",
    "tools/*"
  ],
  "scripts": {
    "dev": "docker-compose up -d && npm run dev:services",
    "dev:services": "concurrently \"npm run dev --workspace=web-portal\" \"npm run dev --workspace=upload-service\"",
    "build": "npm run build --workspaces",
    "test": "npm run test --workspaces",
    "test:integration": "jest --config=tests/integration/jest.config.js",
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "format": "prettier --write .",
    "setup": "./scripts/setup-dev.sh"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "concurrently": "^8.0.0",
    "eslint": "^8.0.0",
    "jest": "^29.0.0",
    "prettier": "^3.0.0",
    "typescript": "^5.0.0"
  }
}
```

### Phase 2: Core Services Implementation (Weeks 2-8)

#### 2.1 Service Template Structure
Each service follows this pattern:
```
services/[service-name]/
├── src/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── middleware/
│   ├── routes/
│   ├── utils/
│   └── index.ts
├── tests/
├── Dockerfile
├── package.json
├── tsconfig.json
└── README.md
```

#### 2.2 API Gateway Service
```typescript
// services/api-gateway/src/index.ts
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const app = express();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Service routing
const services = {
  '/api/v1/auth': 'http://user-service:3001',
  '/api/v1/uploads': 'http://upload-service:3002',
  '/api/v1/metadata': 'http://metadata-service:3003',
  '/api/v1/analytics': 'http://analytics-service:3004'
};

// Setup proxies
Object.entries(services).forEach(([path, target]) => {
  app.use(path, createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      [`^${path}`]: ''
    }
  }));
});

app.listen(8080, () => {
  console.log('API Gateway running on port 8080');
});
```

#### 2.3 Service Communication

**gRPC Proto Definitions** (`shared/proto/`)
```protobuf
// shared/proto/user.proto
syntax = "proto3";

package deepubuntuav.user;

service UserService {
  rpc GetUser(GetUserRequest) returns (User);
  rpc CreateUser(CreateUserRequest) returns (User);
  rpc UpdateUser(UpdateUserRequest) returns (User);
}

message User {
  string id = 1;
  string email = 2;
  string name = 3;
  string contributor_level = 4;
  UserStatistics statistics = 5;
}

message UserStatistics {
  int32 total_uploads = 1;
  int32 total_duration_minutes = 2;
  int32 edge_cases_contributed = 3;
  float quality_score = 4;
}
```

**Event Schema** (`shared/schemas/events.ts`)
```typescript
// Event-driven communication schemas
export interface VideoUploadedEvent {
  eventType: 'video.uploaded';
  timestamp: string;
  data: {
    uploadId: string;
    userId: string;
    fileName: string;
    fileSize: number;
    storageLocation: string;
  };
}

export interface VideoProcessingCompletedEvent {
  eventType: 'video.processing.completed';
  timestamp: string;
  data: {
    uploadId: string;
    processingResults: {
      privacyProcessed: boolean;
      edgeCasesDetected: EdgeCase[];
      qualityScore: number;
    };
  };
}
```

### Phase 3: Infrastructure as Code (Weeks 3-4)

#### 3.1 Terraform Configuration
```hcl
# infrastructure/terraform/aws/main.tf
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# EKS Cluster
module "eks" {
  source = "terraform-aws-modules/eks/aws"
  
  cluster_name    = "deepubuntuav-cluster"
  cluster_version = "1.28"
  
  cluster_endpoint_private_access = true
  cluster_endpoint_public_access  = true
  
  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets
  
  node_groups = {
    general = {
      desired_capacity = 3
      max_capacity     = 10
      min_capacity     = 1
      
      instance_types = ["t3.large"]
      
      k8s_labels = {
        Environment = var.environment
        Application = "deepubuntuav"
      }
    }
    
    gpu = {
      desired_capacity = 2
      max_capacity     = 5
      min_capacity     = 0
      
      instance_types = ["p3.2xlarge"]
      
      k8s_labels = {
        Environment = var.environment
        Application = "deepubuntuav"
        NodeType    = "gpu"
      }
    }
  }
}

# S3 Buckets for different storage tiers
resource "aws_s3_bucket" "raw_uploads" {
  bucket = "deepubuntuav-raw-uploads-${var.environment}"
}

resource "aws_s3_bucket" "processed_data" {
  bucket = "deepubuntuav-processed-${var.environment}"
}

# RDS for PostgreSQL
resource "aws_db_instance" "main" {
  identifier = "deepubuntuav-${var.environment}"
  
  engine         = "postgres"
  engine_version = "15.4"
  instance_class = "db.t3.medium"
  
  allocated_storage     = 100
  max_allocated_storage = 1000
  
  db_name  = "deepubuntuav"
  username = var.db_username
  password = var.db_password
  
  backup_retention_period = 7
  backup_window          = "03:00-04:00"
  maintenance_window     = "sun:04:00-sun:05:00"
  
  skip_final_snapshot = false
  final_snapshot_identifier = "deepubuntuav-final-snapshot-${formatdate("YYYY-MM-DD-hhmm", timestamp())}"
}
```

#### 3.2 Kubernetes Manifests
```yaml
# infrastructure/kubernetes/services/upload-service.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: upload-service
  namespace: deepubuntuav
spec:
  replicas: 3
  selector:
    matchLabels:
      app: upload-service
  template:
    metadata:
      labels:
        app: upload-service
    spec:
      containers:
      - name: upload-service
        image: deepubuntuav/upload-service:latest
        ports:
        - containerPort: 3002
        env:
        - name: NODE_ENV
          value: "production"
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: database-credentials
              key: url
        - name: S3_BUCKET
          value: "deepubuntuav-raw-uploads-prod"
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "1Gi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3002
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3002
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: upload-service
  namespace: deepubuntuav
spec:
  selector:
    app: upload-service
  ports:
  - port: 3002
    targetPort: 3002
  type: ClusterIP
```

### Phase 4: Development Workflow (Week 1)

#### 4.1 Development Setup Script
```bash
#!/bin/bash
# scripts/setup-dev.sh

echo "Setting up DeepUbuntuAV development environment..."

# Install dependencies
npm install

# Setup git hooks
npx husky install
npx husky add .husky/pre-commit "npm run lint && npm run test"

# Start infrastructure
echo "Starting development infrastructure..."
docker-compose up -d postgres mongodb redis kafka

# Wait for databases to be ready
echo "Waiting for databases to be ready..."
sleep 30

# Run database migrations
npm run migrate:up

# Setup initial data
npm run seed:dev

echo "Development environment ready!"
echo "Run 'npm run dev' to start all services"
```

#### 4.2 CI/CD Pipeline
```yaml
# .github/workflows/ci-cd-pipeline.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        service: [upload-service, user-service, metadata-service]
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests for ${{ matrix.service }}
      run: npm run test --workspace=${{ matrix.service }}
    
    - name: Run integration tests
      run: npm run test:integration
      
  build:
    needs: test
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Setup Docker Buildx
      uses: docker/setup-buildx-action@v3
    
    - name: Login to Container Registry
      uses: docker/login-action@v3
      with:
        registry: ghcr.io
        username: ${{ github.actor }}
        password: ${{ secrets.GITHUB_TOKEN }}
    
    - name: Build and push images
      run: |
        for service in upload-service user-service metadata-service; do
          docker build -t ghcr.io/${{ github.repository }}/$service:${{ github.sha }} ./services/$service
          docker push ghcr.io/${{ github.repository }}/$service:${{ github.sha }}
        done

  deploy:
    if: github.ref == 'refs/heads/main'
    needs: build
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v4
    
    - name: Deploy to Kubernetes
      run: |
        # Update image tags in K8s manifests
        # Apply to cluster
        kubectl apply -f infrastructure/kubernetes/
```

## Migration Timeline

### Week 1: Repository & Infrastructure Setup
- [ ] Create new `deepubuntuav` repository
- [ ] Setup directory structure and root configuration
- [ ] Migrate and update LLD document
- [ ] Setup development infrastructure (Docker Compose)
- [ ] Create CI/CD pipeline foundation

### Week 2-3: Core Services Development
- [ ] Implement API Gateway
- [ ] Build Upload Service
- [ ] Create User Management Service
- [ ] Develop Metadata Service
- [ ] Setup service communication (gRPC/Events)

### Week 4-5: Processing Services
- [ ] Privacy Processing Service
- [ ] Edge Detection Service
- [ ] Quality Analysis Service
- [ ] Processing Orchestrator (Temporal.io)
- [ ] Storage Service abstraction

### Week 6-7: Frontend & Integration
- [ ] Migrate Web Portal to new architecture
- [ ] Notification Service (WebSocket)
- [ ] Analytics Service
- [ ] Integration testing

### Week 8: Production Deployment
- [ ] Terraform infrastructure deployment
- [ ] Kubernetes cluster setup
- [ ] Production database migration
- [ ] Monitoring and alerting setup
- [ ] Load testing and optimization

## Benefits of Microservice Architecture

1. **Scalability**: Each service can scale independently
2. **Technology Diversity**: Use best tech for each domain
3. **Team Independence**: Teams can work on services independently
4. **Fault Isolation**: Failures in one service don't crash the system
5. **Deployment Flexibility**: Deploy services independently
6. **Maintenance**: Easier to maintain smaller codebases

## Next Steps

1. **Create the new repository**: `gh repo create deepubuntuav`
2. **Setup the directory structure** as outlined above
3. **Start with the API Gateway and Upload Service**
4. **Implement service-by-service** following the migration timeline

Ready to start creating the new repository? 