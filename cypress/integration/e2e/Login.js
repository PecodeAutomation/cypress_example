const { performLogin, InvalidLoginValidateError } = require("../../models/login");

describe('Login Tests', function () {

	let envVariables = Cypress.env(Cypress.env('environment'));

	beforeEach(() => {
		cy.visit(envVariables.url);
		cy.url().should('include', envVariables.url);
	});


	it('Invalid login, valid password', () => {
		performLogin(envVariables.user.invalid_login, envVariables.user.password);
		InvalidLoginValidateError();
	});

	it('Valid login, invalid password', () => {
		performLogin(envVariables.user.login, envVariables.user.invalid_password);
		InvalidLoginValidateError();
	});

	it('Invalid login and password', () => {
		performLogin(envVariables.user.invalid_login, envVariables.user.invalid_password);
		InvalidLoginValidateError();
	});

	it('Empty login, empty password', () => {
		performLogin(envVariables.user.empty_login, envVariables.user.empty_password);
		InvalidLoginValidateError();
	});

	it('Successful login via ui', () => {
		performLogin(envVariables.user.login, envVariables.user.password);
		cy.url().should('include', envVariables.main_page);
	});
});