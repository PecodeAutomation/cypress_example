import LoginPage from '../page-objects/login.page.js';
import BasePage from '../page-objects/base.page.js';

const loginPage = new LoginPage();
const basePage = new BasePage();

export function performLogin(usedLogin, usedPassword) {
    typeCredentials(usedLogin, usedPassword);
}

function typeCredentials(usedLogin, usedPassword) {
    loginPage.emailInput().click().clear().type(usedLogin);
    loginPage.passwordInput().clear().type(usedPassword);
    loginPage.submitLogin().click();
   // basePage.button('Login').click();
}

export function InvalidLoginValidateError(){
  loginPage.errorMessage().contains("Epic sadface: Username and password do not match any user in this service")
}