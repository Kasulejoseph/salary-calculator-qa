const { default: test, expect } = require("@playwright/test");
const { default: SalaryCalculator } = require("./pageobjects/salary-calculator.page");



test("should calculate employee salary", async ({page})=> {
    await page.goto("/dev/salary-calculator");
    const salaryCalculator = new SalaryCalculator(page);
    await salaryCalculator.formCalculator("Belgium", "30000", "USD")
})