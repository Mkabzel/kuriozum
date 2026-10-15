import { test, expect } from "@playwright/test";

test("archive, project detail, next project and random navigation", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "KURIOZUM", exact: true }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  const cards = page.locator(".project-link");
  await expect(cards).toHaveCount(6);
  for (const card of await cards.all()) {
    await card.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        card
          .locator("img")
          .evaluate(
            (img: HTMLImageElement) => img.complete && img.naturalWidth > 0,
          ),
      )
      .toBe(true);
  }
  await cards.first().click();
  await expect(page).toHaveURL("/project/poza-zasiegiem");
  await expect(
    page.getByRole("heading", { name: "POZA ZASIĘGIEM", exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: /NEXT CURIOSITY/ }).click();
  await expect(page).toHaveURL("/project/forma-nieznana");
  await page
    .locator("header")
    .getByRole("button", { name: "Wylosuj projekt" })
    .click();
  await expect(page).toHaveURL(/\/project\/(?!forma-nieznana)[a-z0-9-]+$/);
  await page.goto("/project/missing-project");
  await expect(page.getByRole("heading", { name: /TU NIC/ })).toBeVisible();
  expect(errors).toEqual([]);
});

test("navigation, keyboard and reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Przejdź do treści" }),
  ).toBeFocused();
  expect(
    await page
      .locator(".orbit")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
  for (const route of ["work", "about", "contact"]) {
    await page
      .locator("header")
      .getByRole("link", { name: route.toUpperCase(), exact: true })
      .click();
    await expect(page).toHaveURL("/" + route);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});
