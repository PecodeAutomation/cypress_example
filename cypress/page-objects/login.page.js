import BasePage from "./base.page";
class LoginPage extends BasePage {

    emailInput() {
        return cy.get('[data-test="username"]');
    }

    passwordInput() {
        return cy.get('[data-test="password"]');
    }

    submitLogin(){
        return cy.get('[data-test="login-button"]');
    }

    errorMessage(){
        return cy.get('[data-test="error"]');
    }
}

export default LoginPage;