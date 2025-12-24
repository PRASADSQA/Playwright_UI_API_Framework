import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(page.getByText('secure area')).toBeVisible();
});
