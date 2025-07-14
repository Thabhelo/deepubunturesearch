import { test, expect } from '@playwright/test'

test.describe('Products Page', () => {
  test('should load products page with product cards', async ({ page }) => {
    await page.goto('/products')
    
    // Check page title
    await expect(page.locator('h1')).toContainText('Our Products')
    
    // Check if product cards are visible
    await expect(page.locator('text=Deep Ubuntu AI')).toBeVisible()
    await expect(page.locator('text=cowcow CLI')).toBeVisible()
    await expect(page.locator('text=More Coming Soon')).toBeVisible()
  })

  test('should navigate to product detail pages', async ({ page }) => {
    await page.goto('/products')
    
    // Click on Deep Ubuntu AI card
    await page.locator('text=Deep Ubuntu AI').first().click()
    
    // Should navigate to product detail page
    await expect(page).toHaveURL(/\/products\/deep-ubuntu-ai/)
    await expect(page.locator('h1')).toContainText('Deep Ubuntu AI')
  })

  test('should show product status badges', async ({ page }) => {
    await page.goto('/products')
    
    // Check for status badges
    await expect(page.locator('text=BETA')).toBeVisible()
    await expect(page.locator('text=STABLE')).toBeVisible()
  })
})

test.describe('Product Detail Page', () => {
  test('should load Deep Ubuntu AI product page', async ({ page }) => {
    await page.goto('/products/deep-ubuntu-ai')
    
    // Check hero section
    await expect(page.locator('h1')).toContainText('Deep Ubuntu AI')
    await expect(page.locator('text=Foundation models for African languages')).toBeVisible()
    
    // Check CTA buttons
    await expect(page.locator('text=Get Started')).toBeVisible()
    await expect(page.locator('text=View Documentation')).toBeVisible()
  })

  test('should have working product tabs', async ({ page }) => {
    await page.goto('/products/deep-ubuntu-ai')
    
    // Check all tab labels are present
    await expect(page.locator('text=Overview')).toBeVisible()
    await expect(page.locator('text=Features')).toBeVisible()
    await expect(page.locator('text=Architecture')).toBeVisible()
    await expect(page.locator('text=Quickstart')).toBeVisible()
    await expect(page.locator('text=Pricing')).toBeVisible()
    
    // Click on Features tab
    await page.locator('text=Features').click()
    await expect(page.locator('text=Key Features')).toBeVisible()
    
    // Click on Pricing tab
    await page.locator('text=Pricing').click()
    await expect(page.locator('text=Pricing Plans')).toBeVisible()
    await expect(page.locator('text=Starter')).toBeVisible()
    await expect(page.locator('text=Pro')).toBeVisible()
    await expect(page.locator('text=Enterprise')).toBeVisible()
  })

  test('should load cowcow product page', async ({ page }) => {
    await page.goto('/products/cowcow')
    
    // Check hero section
    await expect(page.locator('h1')).toContainText('cowcow CLI')
    await expect(page.locator('text=Offline-first data capture')).toBeVisible()
    
    // Check status badge
    await expect(page.locator('text=STABLE')).toBeVisible()
  })
}) 