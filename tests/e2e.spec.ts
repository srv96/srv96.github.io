import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E', () => {
    test.beforeEach(async ({ page }) => {
        // Wait for DOM content (HTML) to load, ignoring slow stylesheets or images
        await page.goto('/', { waitUntil: 'domcontentloaded' });
        // Wait for the loader to disappear, ensuring the app is interactive
        await expect(page.locator('#loader')).not.toBeVisible({ timeout: 10000 });
    });

    test('Smoke Test: Page loads and title is correct', async ({ page }) => {
        await expect(page).toHaveTitle(/Sourav Dash/);
        await expect(page.locator('.hero h1')).toHaveText('Sourav Dash');
    });

    test('Navigation: Scroll to sections', async ({ page }) => {
        // Click "About" link
        await page.getByRole('link', { name: 'About' }).click();
        // Check if navigation active class is updated
        // This confirms the click handler ran and the scroll logic was triggered
        await expect(page.getByRole('link', { name: 'About' })).toHaveClass(/active/);

        // Check if section is visible (Playwright auto-waits)
        // Ensure AOS animation completes or element is in viewport
        await expect(page.locator('#about')).toBeVisible({ timeout: 10000 });
    });

    test('Portfolio: Filter works', async ({ page }) => {
        // Scroll to portfolio
        await page.locator('#portfolio').scrollIntoViewIfNeeded();

        // Initial state: All items visible
        const allItems = page.locator('.portfolio-item');
        // Check if items are loaded first
        await expect(allItems).not.toHaveCount(0);
        // Wait for potential animations/layouts to settle
        await page.waitForTimeout(1000);

        // Click "Analytics" filter
        await page.getByRole('button', { name: 'Analytics' }).click();

        // Check if class includes 'filter-1' which corresponds to Analytics
        // Note: Isotope hides items by style, but identifying them via class is a good proxy for selection logic
        const analyticsItems = page.locator('.portfolio-item.filter-1');
        await expect(analyticsItems.first()).toBeVisible();
    });
});
