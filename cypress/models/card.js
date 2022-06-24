import { cardPage } from "../page-objects/card.page";
import { homePage } from "../page-objects/home.page";

const REMOVE = "Remove";

export function finishSalesDetails({ userData }) {
  cy.getTestSel("checkout").click();
  cardPage.checkoutInfo().should("be.visible");
  cy.getTestSel("firstName").type(userData.firstName);
  cy.getTestSel("lastName").type(userData.lastName);
  cy.getTestSel("postalCode").type(userData.postalCode);
  cardPage.continueButton().click();
  cy.getTestSel("finish").click();
}

export function chooseCard() {
  cy.getTestSel("add-to-cart-sauce-labs-backpack").should("be.visible").first().click();
  cy.getTestSel("remove-sauce-labs-backpack").should("exist").should("have.text", REMOVE);
  homePage.shoppingCartContainer().click();
}

export function filterOption({ option }) {
  cy.getTestSel("product_sort_container").select(option);
  homePage.inventoryList().should("be.visible");
}
