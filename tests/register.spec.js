const { test } = require("@playwright/test");
const { registerPageObject } = require("../PageObjects/registerPageObject");
const { PIM_PageObject } = require("../PageObjects/PIM_PageObject");
const dataSet = JSON.parse(
  JSON.stringify(require("../TestData/registerData.json"))
);
let reg;
let pim;

test.beforeEach(async ({ page }) => {
  reg = new registerPageObject(page);
  pim = new PIM_PageObject(page);
});
//test.describe.configure({ mode: "parallel" });
test("Users should be able to register successfully", async ({ page }) => {
  await reg.homepage();
  await reg.login(dataSet.username, dataSet.password);
  await reg.verifying_text_on_the_following_Page("Dashboard");
  await reg.sideNav(dataSet.sideNavAction);
  await reg.verifying_text_on_the_following_Page(dataSet.sideNavAction);
});

test("Users should be able to add new employee to the system", async ({
  page,
}) => {
  await reg.homepage();
  await reg.login(dataSet.username, dataSet.password);
  await reg.verifying_text_on_the_following_Page("Dashboard");
  await reg.sideNav(dataSet.sideNavAction);
  await reg.verifying_text_on_the_following_Page(dataSet.sideNavAction);
  await pim.clikingOnButton();
  await page.waitForTimeout(2000);
});
