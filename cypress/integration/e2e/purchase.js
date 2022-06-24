const { chooseCard, finishSalesDetails } = require("../../models/card");
const { performLogin } = require("../../models/login");
const { cardPage } = require("../../page-objects/card.page");
const { homePage } = require("../../page-objects/home.page");

const USER_DATA = {
  firstName: "FirstName",
  lastName: "LastName",
  postalCode: "testCode"
};
const SUCCESS_MESSAGE = "THANK YOU FOR YOUR ORDER";

describe("Ensure that user can buy product", function () {
  const envVariables = Cypress.env(Cypress.env("environment"));

  before("Login to web page", () => {
    cy.visit(envVariables.url);
    performLogin(envVariables.user.login, envVariables.user.password);
    cy.url().should("include", envVariables.main_page);
  });

  it("Ensure that user can buy a product", () => {
    homePage
      .inventoryItemName()
      .first()
      .invoke("text")
      .then((itemName) => {
        homePage
          .inventoryItemPrice()
          .first()
          .invoke("text")
          .then((itemPrice) => {
            chooseCard();
            cardPage.cartItem().should("be.visible").should("contain", itemName).and("contain", itemPrice);
            finishSalesDetails({ userData: USER_DATA });
            cardPage.checkoutCompleteContainer().should("be.visible").contains(SUCCESS_MESSAGE);
          });
      });
  });
});
