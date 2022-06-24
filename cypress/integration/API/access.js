import { END_POINT } from "../../fixtures/endpoint";

describe("Api test", function () {
  const envVariables = Cypress.env(Cypress.env("environment"));

  it("[GET] Authorized /", () => {
    cy.request({
      method: "GET",
      url: envVariables.url,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it("[GET] Unauthorized /user", () => {
    cy.request({
      method: "GET",
      url: envVariables.url + END_POINT.user,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
