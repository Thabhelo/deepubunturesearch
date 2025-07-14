import { test, expect } from '@playwright/test'

test.describe('Products Page', () => {
  test('should load products page with product cards', async ({ page }) => {
    await page.goto('/products')
    
    // Check page title
    await expect(page.locator('h1')).toContainText('Products')
    
    // Check if product cards are visible
    await expect(page.locator('text=Deep Ubuntu AI')).toBeVisible()
    await expect(page.locator('text=cowcow CLI')).toBeVisible()
  })

  test('should navigate to product detail pages', async ({ page }) => {
    await page.goto('/products')
    
    // Click on Deep Ubuntu AI product card
    await page.locator('text=Deep Ubuntu AI').click()
    
    // Should navigate to product detail page
    await expect(page).toHaveURL('/products/deep-ubuntu-ai')
    await expect(page.locator('h1')).toContainText('Deep Ubuntu AI')
  })

  test('should show product status badges', async ({ page }) => {
    await page.goto('/products')
    
    // Check for status badges based on actual content
    await expect(page.locator('text=beta')).toBeVisible()
    await expect(page.locator('text=stable')).toBeVisible()
  })
})

test.describe('Product Detail Page', () => {
  test('should load Deep Ubuntu AI product page', async ({ page }) => {
    await page.goto('/products/deep-ubuntu-ai')
    
    // Check page content based on actual MDX content
    await expect(page.locator('h1')).toContainText('Deep Ubuntu AI')
    await expect(page.locator('text=Foundation models for African languages and contexts')).toBeVisible()
    await expect(page.locator('text=beta')).toBeVisible()
  })

  test('should have working product tabs', async ({ page }) => {
    await page.goto('/products/deep-ubuntu-ai')
    
    // Check all tab buttons are present - use role selector to be more specific
    await expect(page.getByRole('button', { name: 'Overview' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Features' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Architecture' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Quickstart' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Pricing' })).toBeVisible()
    
    // Click on Features tab
    await page.getByRole('button', { name: 'Features' }).click()
    
    // Check if Features content is shown
    await expect(page.locator('text=Key Features')).toBeVisible()
    
    // Click on Architecture tab
    await page.getByRole('button', { name: 'Architecture' }).click()
    
    // Check if Architecture content is shown
    await expect(page.getByRole('heading', { name: 'System Architecture' })).toBeVisible()
  })

  test('should load cowcow product page', async ({ page }) => {
    await page.goto('/products/cowcow')
    
    // Check page content based on actual MDX content
    await expect(page.locator('h1')).toContainText('cowcow CLI')
    await expect(page.locator('text=Offline-first data capture and processing')).toBeVisible()
    await expect(page.locator('text=stable')).toBeVisible()
  })
}) 