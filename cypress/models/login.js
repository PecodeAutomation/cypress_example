import { homePage } from "../page-objects/home.page";

function typeCredentials(usedLogin, usedPassword) {
  cy.getTestSel("username").click().clear().type(usedLogin);
  cy.getTestSel("password").clear().type(usedPassword);
  cy.getTestSel("login-button").click();
}

export function performLogin(usedLogin, usedPassword) {
  typeCredentials(usedLogin, usedPassword);
}

export function InvalidLoginValidateError() {
  cy.getTestSel("error").contains("Epic sadface: Username and password do not match any user in this service");
}
