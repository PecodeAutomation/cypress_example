class CardPage {
    cartItem() {
        return cy.get('.cart_item')
    }   
    
    checkoutInfo() {
        return cy.get('.checkout_info')
    }    

    shoppingCartContainer() {
        return cy.get('#shopping_cart_container')
    }  
    
    continueButton(){
        return cy.get("#continue")
    }

    checkoutCompleteContainer(){
        return cy.get(".checkout_complete_container")
    }

    salesDetails({ userData }){
        this.checkoutInfo().should("be.visible")
        cy.getTestSel("firstName").type(userData.firstName)
        cy.getTestSel("lastName").type(userData.lastName)
        cy.getTestSel("postalCode").type(userData.postalCode)
    }
}

export const cardPage = new CardPage()