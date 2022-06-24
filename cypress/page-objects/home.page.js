import BasePage from "./base.page";

class HomePage extends BasePage {
    inventoryItemName() {
        return cy.get('.inventory_item_name')
    }   
    
    inventoryItemPrice() {
        return cy.get('.inventory_item_price')
    }    

    shoppingCartContainer() {
        return cy.get('#shopping_cart_container')
    }

    burgerMenuButton() {
        return cy.get("#react-burger-menu-btn")
    }

    aboutSidebarButton(){
        return cy.get("#about_sidebar_link")
    }

    logoutSidebarButton(){
        return cy.get("#logout_sidebar_link")
    }

    resetSidebarButton(){
        return cy.get("#reset_sidebar_link")
    }

    inventoryList(){
        return cy.get(".inventory_list")
    }
}

export const homePage = new HomePage()