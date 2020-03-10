/// <reference types="Cypress" />
// https://docs.cypress.io/api/introduction/api.html
/* eslint-env mocha */
/* global cy */
// function generateRandomEmail() {
//     const name = Math.random()
//         .toString(36)
//         .replace(/[^a-z]+/g, '')
//         .substr(0, 5);
//     return `${name}@test.com`;
// }

// describe('12 factor', () => {
//     beforeEach(() => {
//         cy.visit('/');
//     });

// });

describe('12factor', function () {
    it('start', function () {
        cy.viewport(1366, 625);

        cy.visit('http://localhost:8081/');
    });
});

describe('test-expansion', function () {
    it('expand-first-row', function () {
        cy.viewport(1366, 625);

        cy.visit('http://localhost:8081/');

        cy.get(
            '.layout:nth-child(1) > .v-expansion-panel > .v-expansion-panel__container > .v-expansion-panel__header > .headerName'
        ).click();

        cy.get(
            '.layout > .v-expansion-panel > .v-expansion-panel__container--active > .v-expansion-panel__header > .headerName'
        ).click();
    });
});
