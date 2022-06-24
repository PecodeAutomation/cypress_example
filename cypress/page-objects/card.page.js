class CardPage {
  cartItem() {
    return cy.get(".cart_item");
  }

  checkoutInfo() {
    return cy.get(".checkout_info");
  }

  shoppingCartContainer() {
    return cy.get("#shopping_cart_container");
  }

  continueButton() {
    return cy.get("#continue");
  }

  checkoutCompleteContainer() {
    return cy.get(".checkout_complete_container");
  }
}

export const cardPage = new CardPage();
