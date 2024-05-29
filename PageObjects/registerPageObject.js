const { expect } = require("@playwright/test");
class registerPageObject {
  constructor(page) {
    this.page = page;
    this.register_email = page.locator("//input[@name='username']");
    this.register_password = page.locator("//input[@name='password']");
    this.register_button = page.locator("//button[@type='submit']");
    this.registration_text = page.locator("h6").first();
    this.sideNavlinks = page.locator(".oxd-main-menu > li");
  }

  async homepage() {
    await this.page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }
  async login(username, password) {
    await this.page.waitForTimeout(1000);
    await this.register_email.fill(username);
    await this.register_password.fill(password);
    await this.register_button.click();
    await this.page.waitForTimeout(1000);
  }

  async verifying_text_on_the_following_Page(text) {
    await this.registration_text.waitFor();
    await expect(this.registration_text).toContainText(text);
  }

  async sideNav(sideNavLinkName) {
    const sideNavCount = await this.sideNavlinks.count();
    for (let i = 0; i < sideNavCount; i++) {
      if (
        (await this.sideNavlinks.nth(i).locator("a > span").textContent()) ===
        sideNavLinkName
      ) {
        await this.sideNavlinks.nth(i).click();
        break;
      }
    }
    await this.page.waitForTimeout(1000);
  }
}
module.exports = { registerPageObject };
