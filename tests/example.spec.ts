import { test, expect } from "@playwright/test";

test.describe("Login Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });
  test("should have correct metadata and elements", async ({ page }) => {
    await expect(page).toHaveTitle("Engine Petroleum Station");
    await expect(
      page.getByRole("heading", { name: "Engine Petroleum Station" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "forgot a password?" })
    ).toBeVisible();
  });

  test("should redirect to dashboard page", async ({ page }) => {
    await page.getByRole("link", { name: "forgot a password?" }).click();
    await expect(page).toHaveTitle("Engine Petroleum Station");
  });
});

test.describe("Dashboard page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/dashboard");
  });

  test("should have correct metadata and elements", async ({ page }) => {
    await expect(page).toHaveTitle("Engine Petroleum Station");
    await expect(
      page.getByRole("heading", { name: "Hello dev" })
    ).toBeVisible();
    await expect(page.getByPlaceholder("Enter a task")).toBeVisible();
    await expect(page.getByRole("button", { name: "Add todo" })).toBeVisible();
  });

  test("should have an empty item list on start", async ({ page }) => {
    const itemList = page.getByTestId("items-list");
    
    await expect(itemList).toBeEmpty();
  });

  test("should add task to list", async ({ page }) => {
    const input = page.getByPlaceholder("Enter a task");
  
    await input.fill("Task 1");
    await page.getByRole("button", { name: "Add todo" }).click();
    const item = page.getByTestId("Item").nth(0);
    await expect(item).toHaveText("Task 1");
    await expect(input).toHaveValue("");
  });
  
});
