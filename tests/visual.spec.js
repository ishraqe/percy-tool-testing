import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';

async function gotoAndSnapshot(page, path, name) {
  await page.goto(path, { waitUntil: 'networkidle' });
  await page.waitForLoadState('domcontentloaded');
  await page.locator('img').first().waitFor({ state: 'visible', timeout: 15_000 }).catch(() => {});
  await percySnapshot(page, name);
}

test('Home page', async ({ page }) => {
  await gotoAndSnapshot(page, '/', 'Homepage');
});

test('Login page', async ({ page }) => {
  await gotoAndSnapshot(page, '/login', 'Login page');
});

test('Dashboard page', async ({ page }) => {
  await gotoAndSnapshot(page, '/dashboard', 'Dashboard page');
});
