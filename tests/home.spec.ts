import { test, expect } from '@playwright/test';

test('home page has title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Home/);
});

test('home page has a navigation bar', async ({ page }) => {
    await page.goto('/');
    const navBar = await page.locator('nav');
    await expect(navBar).toBeVisible();
});

test('home page has a specific button', async ({ page }) => {
    await page.goto('/');
    const button = await page.locator('button#specific-button');
    await expect(button).toBeVisible();
});