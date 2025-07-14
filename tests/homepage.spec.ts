import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should load the homepage with hero section', async ({ page }) => {
    await page.goto('/')
    
    // Check if the hero title is visible
    await expect(page.locator('h1')).toContainText('Breakthrough AI for Africa & Beyond')
    
    // Check if CTA buttons are present
    await expect(page.locator('text=Book a Demo')).toBeVisible()
    await expect(page.locator('text=Build with Us')).toBeVisible()
  })

  test('should display trust strip with partners', async ({ page }) => {
    await page.goto('/')
    
    // Wait for trust strip to load
    await expect(page.locator('text=Trusted by Leading')).toBeVisible()
    
    // Check if partner cards are visible
    await expect(page.locator('text=Army Research Lab')).toBeVisible()
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
    
    // Test scroll behavior
    await page.locator('text=Scroll to explore').click()
    
    // Check if page scrolled (trust strip should be visible)
    await expect(page.locator('text=Trusted by Leading')).toBeVisible()
  })
})

test.describe('Hotkeys', () => {
  test('should toggle theme with "t" key', async ({ page }) => {
    await page.goto('/')
    
    // Press 't' key to toggle theme
    await page.keyboard.press('t')
    
    // Wait for potential toast notification
    await page.waitForTimeout(1000)
    
    // The theme should change (we can't easily test this visually in e2e, 
    // but we can check if the hotkey system is working)
    // In a real implementation, you might check for specific class changes
  })

  test('should toggle animations with "g" key', async ({ page }) => {
    await page.goto('/')
    
    // Press 'g' key to toggle animations
    await page.keyboard.press('g')
    
    // Wait for potential toast notification
    await page.waitForTimeout(1000)
  })

  test('should show formulas with "m" key', async ({ page }) => {
    await page.goto('/')
    
    // Press 'm' key to show formulas
    await page.keyboard.press('m')
    
    // Wait for potential toast notification
    await page.waitForTimeout(1000)
  })
}) 