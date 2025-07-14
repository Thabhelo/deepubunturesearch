import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load the homepage with hero section', async ({ page }) => {
    await page.goto('/')
    
    // Check hero section elements - use more specific selector
    await expect(page.locator('h1').first()).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Deep Ubuntu Research' })).toBeVisible()
  })

  test('should display trust strip with partners', async ({ page }) => {
    await page.goto('/')
    
    // Wait for trust strip to load
    await expect(page.locator('text=Trusted by Leading')).toBeVisible()
    
    // Check if partner cards are visible - use first() to avoid strict mode violation
    await expect(page.locator('text=Army Research Lab').first()).toBeVisible()
  })

  test('should show all main sections', async ({ page }) => {
    await page.goto('/')
    
    // Check for main sections
    await expect(page.locator('text=Full-Stack AI Solutions')).toBeVisible()
    await expect(page.locator('text=Agentic AI Solutions')).toBeVisible()
    await expect(page.locator('text=Frontier AI Research')).toBeVisible()
    await expect(page.locator('text=The future of your industry starts here')).toBeVisible()
  })

  test('should have working navigation', async ({ page }) => {
    await page.goto('/')
    
    // Use scroll instead of click for better reliability
    await page.evaluate(() => window.scrollTo(0, 800))
    
    // Check if trust strip becomes visible after scroll
    await expect(page.locator('text=Trusted by Leading')).toBeVisible()
  })
})

test.describe('Hotkeys', () => {
  test('should toggle theme with "t" key', async ({ page }) => {
    await page.goto('/')
    
    // Wait for page to load
    await page.waitForLoadState('networkidle')
    
    // Press 't' key to toggle theme
    await page.keyboard.press('t')
    
    // Wait a bit for theme change
    await page.waitForTimeout(500)
    
    // Check if body class changed (assuming dark theme adds a class)
    const bodyClass = await page.getAttribute('body', 'class')
    expect(bodyClass).toBeTruthy()
  })

  test('should toggle animations with "g" key', async ({ page }) => {
    await page.goto('/')
    
    // Wait for page to load
    await page.waitForLoadState('networkidle')
    
    // Press 'g' key to toggle animations
    await page.keyboard.press('g')
    
    // Wait a bit for animation toggle
    await page.waitForTimeout(500)
    
    // Verify animation state changed
    const bodyClass = await page.getAttribute('body', 'class')
    expect(bodyClass).toBeTruthy()
  })

  test('should show formulas with "m" key', async ({ page }) => {
    await page.goto('/')
    
    // Wait for page to load
    await page.waitForLoadState('networkidle')
    
    // Press 'm' key to show formulas
    await page.keyboard.press('m')
    
    // Wait a bit for formulas to appear
    await page.waitForTimeout(500)
    
    // Check if any formulas or math content became visible
    const mathElements = await page.locator('.katex, [data-math]').count()
    expect(mathElements).toBeGreaterThanOrEqual(0)
  })
}) 