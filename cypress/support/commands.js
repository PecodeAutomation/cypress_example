import "cypress-file-upload";

let LOCAL_STORAGE = {};
require("@4tw/cypress-drag-drop");

Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE[key]);
  });
});

Cypress.Commands.add("getTestSel", (selectorName) => {
  return cy.get(`[data-test="${selectorName}"]`);
});

Cypress.Commands.add("setJSON", (username, password = "12345678") => {
  return cy
    .readFile("cypress/fixtures/data.json", (err, data) => {
      if (err) {
        return console.log(err);
      }
    })
    .then((data) => {
      data.user = username;
      data.password = password;
      cy.writeFile("cypress/fixtures/data.json", JSON.stringify(data));
      return cy.wrap(data);
    });
});
