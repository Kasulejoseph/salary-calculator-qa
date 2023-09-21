import { expect } from "@playwright/test";

export default class SalaryCalculator {
  constructor(page) {
    this.page = page;
  }

  get employeeCalculator() {
    return this.page.getByText("Employee Cost Calculator");
  }
  get countryElement() {
    return this.page.locator("#mui-2");
  }

  get annualSalaryElement() {
    return this.page.locator("input[type='number']");
  }

  get currencyElement() {
    return this.page.locator("#mui-6");
  }

  get calculateButtonElement() {
    return this.page.getByRole("button", { name: "Calculate" });
  }

  get entityCountryElement() {
    return this.page.locator(
      "#promo-section-container .MuiTypography-root > div"
    );
  }

  async formCalculator(country, salary, currency) {
    await expect(this.employeeCalculator).toBeVisible();
    await this.countryElement.fill(country);
    await this.page.locator(`//h4[text()='${country}']/parent::div`).click();

    await this.annualSalaryElement.fill(salary);
    await this.currencyElement.click();
    await this.page.locator(`//h4[text()='${currency}']/parent::div`).click();
    await this.calculateButtonElement.click();
    await this.page.waitForSelector(
      "#promo-section-container .MuiTypography-root > div"
    );
    await expect(this.entityCountryElement).toContainText(country);
  }
}
