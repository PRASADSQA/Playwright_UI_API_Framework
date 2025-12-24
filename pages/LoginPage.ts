import { BasePage } from './BasePage';
import { BASE_URL } from '../utils/env'; // adjust path as needed


export class LoginPage extends BasePage {

  async goto() {
    await this.page.goto(`${BASE_URL}/login`);
  }

  async login(username: string, password: string) {
    await this.page.getByLabel('Username').fill(username);
    await this.page.getByLabel('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
}
