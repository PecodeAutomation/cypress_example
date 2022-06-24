const { performLogin } = require("../../models/login");
const { cardPage } = require("../../page-objects/card.page");
const { homePage } = require("../../page-objects/home.page");

const REMOVE = "Remove"
const USER_DATA = {
    firstName : "FirstName",
    lastName : "LastName",
    postalCode : "testCode"
}
const SUCCESS_MESSAGE = "THANK YOU FOR YOUR ORDER"

describe('Ensure that user can buy product', function () {

	const envVariables = Cypress.env(Cypress.env('environment'));

	before('Login to web page', () => {
		cy.visit(envVariables.url);
        performLogin(envVariables.user.login, envVariables.user.password);
		cy.url().should('include', envVariables.main_page);
	});

	it('Ensure that user can buy a product', () => {
        homePage.inventoryItemName().first().invoke('text').then((itemName) => {
            homePage.inventoryItemPrice().first().invoke('text').then((itemPrice) => {
                cy.getTestSel("add-to-cart-sauce-labs-backpack").should('be.visible').first().click();
                cy.getTestSel("remove-sauce-labs-backpack").should('exist').should("have.text", REMOVE);
                homePage.shoppingCartContainer().click()
                cardPage.cartItem().should("be.visible").should("contain", itemName).and("contain",itemPrice) 
                cy.getTestSel("checkout").click()
                cardPage.salesDetails({ userData: USER_DATA })
                cardPage.continueButton().click()
                cy.getTestSel("finish").click()
                cardPage.checkoutCompleteContainer().should("be.visible").contains(SUCCESS_MESSAGE)
            }); 
        });
	});
});