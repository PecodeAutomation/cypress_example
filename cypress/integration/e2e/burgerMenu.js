const { END_POINT } = require("../../fixtures/endpoint");
const { performLogin } = require("../../models/login");
const { homePage } = require("../../page-objects/home.page");

describe("Ensure that burger menu work with correct behavior", function () {
  const envVariables = Cypress.env(Cypress.env("environment"));

  beforeEach("Login to web page", () => {
    cy.visit(envVariables.url);
    performLogin(envVariables.user.login, envVariables.user.password);
    homePage.burgerMenuButton().click();
  });

  it("Ensure that about button work", () => {
    homePage.aboutSidebarButton().should("be.visible").click();
    cy.url().should("include", END_POINT.about);
  });

  it("Ensure that logout button work", () => {
    homePage.logoutSidebarButton().should("be.visible").click();
    cy.url().should("include", envVariables.url);
  });
});
