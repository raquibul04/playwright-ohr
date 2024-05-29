class PIM_PageObject {
  constructor(page) {
    this.page = page;
    this.addButton = page.locator(".orangehrm-header-container > button");
  }
  async clikingOnButton() {
    await this.addButton.click();
  }
}
module.exports = { PIM_PageObject };
