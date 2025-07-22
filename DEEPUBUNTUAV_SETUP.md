# DeepUbuntuAV Repository Setup Guide

## Repository Creation Steps

### 1. Create GitHub Repository
```bash
# Go to https://github.com/new
# Repository name: deepubuntuav
# Description: Crowdsourced autonomous vehicle training data platform - microservices architecture
# Choose Private or Public
# Initialize with README
```

### 2. Clone and Setup Local Development
```bash
# Clone the repository
git clone https://github.com/Thabhelo/deepubuntuav.git
cd deepubuntuav

# Create the microservices directory structure
mkdir -p services/{api-gateway,user-service,upload-service,metadata-service,processing-orchestrator,privacy-service,edge-detection-service,quality-service,storage-service,analytics-service,notification-service}

mkdir -p web-portal mobile-app
mkdir -p shared/{types,utils,constants,proto}
mkdir -p infrastructure/{kubernetes,terraform,docker,monitoring}
mkdir -p docs/{api,architecture,deployment}
mkdir -p scripts/{dev,deploy,migration}
```

### 3. Root Configuration Files

**docker-compose.yml** (Development Environment)
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

  mongodb:
    image: mongo:7
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
    volumes:
      - redis_data:/data

  # Message Queue
  kafka:
    image: confluentinc/cp-kafka:latest
    environment:
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
    ports:
      - "9092:9092"
    depends_on:
      - zookeeper

  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
    ports:
      - "2181:2181"

  # Storage (MinIO for S3-compatible local storage)
  minio:
    image: minio/minio:latest
    environment:
      MINIO_ROOT_USER: minioadmin
      MINIO_ROOT_PASSWORD: minioadmin
    ports:
      - "9000:9000"
      - "9001:9001"
    volumes:
      - minio_data:/data
    command: server /data --console-address ":9001"

volumes:
  postgres_data:
  mongodb_data:
  redis_data:
  minio_data:
```

**skaffold.yaml** (Kubernetes Development)
```yaml
apiVersion: skaffold/v4beta6
kind: Config
metadata:
  name: deepubuntuav
build:
  artifacts:
    - image: deepubuntuav/api-gateway
      context: services/api-gateway
    - image: deepubuntuav/user-service
      context: services/user-service
    - image: deepubuntuav/upload-service
      context: services/upload-service
    - image: deepubuntuav/web-portal
      context: web-portal
  local:
    push: false
deploy:
  kubectl:
    manifests:
      - infrastructure/kubernetes/dev/*.yaml
```

**.gitignore**
```
# Dependencies
node_modules/
*/node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build outputs
dist/
build/
*/dist/
*/build/

# Logs
logs/
*.log

# Runtime
pids/
*.pid
*.seed
*.pid.lock

# Docker
.dockerignore

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
env/
venv/
.venv/

# Terraform
*.tfstate
*.tfstate.*
.terraform/
.terraform.lock.hcl

# Kubernetes
*.kubeconfig

# ML Models
*.pkl
*.h5
*.onnx
models/

# Data
data/
datasets/
uploads/
*.mp4
*.avi
*.mov
```

### 4. Shared Libraries Setup

**shared/types/index.ts**
```typescript
// Common type definitions across all services

export interface User {
  id: string;
  email: string;
  name: string;
  contributorLevel: 'bronze' | 'silver' | 'gold' | 'platinum';
  createdAt: Date;
  updatedAt: Date;
}

export interface VideoUpload {
  id: string;
  userId: string;
  filename: string;
  fileSize: number;
  contentType: string;
  status: 'uploading' | 'processing' | 'completed' | 'failed';
  progress: number;
  createdAt: Date;
}

export interface VideoMetadata {
  videoId: string;
  technical: TechnicalMetadata;
  spatial: SpatialMetadata;
  environmental: EnvironmentalMetadata;
  qualityMetrics: QualityMetrics;
  edgeCases: EdgeCase[];
}

export interface TechnicalMetadata {
  duration: number;
  fps: number;
  resolution: [number, number];
  codec: string;
  bitrate: number;
  fileSize: number;
}

export interface EdgeCase {
  type: string;
  confidence: number;
  timestamp: number;
  bbox: [number, number, number, number];
  severity: 'low' | 'medium' | 'high';
}

export interface ProcessingJob {
  id: string;
  videoId: string;
  type: 'privacy' | 'edge_detection' | 'quality_analysis';
  status: 'queued' | 'processing' | 'completed' | 'failed';
  progress: number;
  result?: any;
  errorMessage?: string;
}
```

### 5. Service Template Structure

Each service should follow this structure:
```
services/service-name/
├── src/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── index.ts
├── tests/
├── Dockerfile
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

### 6. Development Scripts

**scripts/dev/start-all.sh**
```bash
#!/bin/bash
# Start all services for development

echo "Starting development environment..."

# Start infrastructure
docker-compose up -d

# Wait for databases to be ready
echo "Waiting for databases to be ready..."
sleep 10

# Start all services
concurrently \
  "cd services/api-gateway && npm run dev" \
  "cd services/user-service && npm run dev" \
  "cd services/upload-service && npm run dev" \
  "cd web-portal && npm run dev"
```

### 7. Infrastructure as Code

**infrastructure/terraform/main.tf**
```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# EKS Cluster
module "eks" {
  source = "./modules/eks"
  
  cluster_name    = "deepubuntuav-${var.environment}"
  cluster_version = "1.27"
  
  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets
  
  node_groups = {
    general = {
      instance_types = ["t3.medium"]
      min_size      = 2
      max_size      = 10
      desired_size  = 3
    }
    
    gpu = {
      instance_types = ["g4dn.xlarge"]
      min_size      = 0
      max_size      = 5
      desired_size  = 1
    }
  }
}

# S3 Buckets for storage
resource "aws_s3_bucket" "raw_uploads" {
  bucket = "deepubuntuav-raw-uploads-${var.environment}"
}

resource "aws_s3_bucket" "processed_data" {
  bucket = "deepubuntuav-processed-${var.environment}"
}
```

### 8. Initial Commit Structure
```bash
# Create all the files above, then:
git add .
git commit -m "feat: Initial microservices architecture setup

- Complete directory structure for 11 microservices
- Docker Compose for local development environment
- Skaffold configuration for Kubernetes development  
- Shared TypeScript types and utilities
- Infrastructure as Code with Terraform
- Development scripts and tooling
- Comprehensive .gitignore and documentation"

git push origin main
```

## Next Steps After Repository Setup

1. **Create the repository on GitHub**
2. **Set up the directory structure** 
3. **Start with core services**: user-service, upload-service, api-gateway
4. **Build web-portal** for the frontend
5. **Add processing services** one by one
6. **Set up CI/CD pipelines**
7. **Deploy to development environment**

This structure gives us clean separation of concerns, independent deployability, and scalability for the massive DeepUbuntuAV platform! 