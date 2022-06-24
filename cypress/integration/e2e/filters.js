const { filterOption } = require("../../models/card");
const { performLogin } = require("../../models/login");
const { homePage } = require("../../page-objects/home.page");

let priceArray;
const nameList = [];

describe("Verify data after filtering", function () {
  const envVariables = Cypress.env(Cypress.env("environment"));

  beforeEach("Login to web page", () => {
    cy.visit(envVariables.url);
    performLogin(envVariables.user.login, envVariables.user.password);
  });

  context("Price filtering", () => {
    beforeEach(() => {
      // Get array with items prices
      homePage
        .inventoryItemPrice()
        .invoke("text")
        .then((priceList) => {
          priceArray = priceList.split("$").sort((a, b) => a - b);
        });
    });
    it("Ensure that price (low to high) work correct", () => {
      filterOption({ option: "lohi" });
      homePage.inventoryItemPrice().first().should("contain", priceArray[1]);
    });

    it("Ensure that price (high to low) work correct", () => {
      filterOption({ option: "hilo" });
      homePage.inventoryItemPrice().first().should("contain", priceArray.at(-1));
    });
  });

  context("Naming filtering", () => {
    // Get array with items names
    beforeEach(() => {
      homePage
        .inventoryList()
        .find(".inventory_item_name")
        .each((name) => {
          cy.get(name)
            .invoke("text")
            .then((cardName) => {
              nameList.push(cardName);
            });
        });
      nameList.sort();
    });

    it("Ensure that name (A to Z) work correct", () => {
      filterOption({ option: "az" });
      homePage.inventoryItemName().first().should("contain", nameList[0]);
    });

    it("Ensure that name (Z to A) work correct", () => {
      filterOption({ option: "za" });
      homePage.inventoryItemName().first().should("contain", nameList.at(-1));
    });
  });
});
