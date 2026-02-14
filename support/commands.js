//adopet
//Cypress.Commands.add('login', (email, senha) => {
 //     cy.get('[data-test="input-loginEmail"]').type(email);
 //     cy.get('[data-test="input-loginPassword"]').type(senha);      
 //     cy.get('[data-test="submit-button"]').click();
// })

//adicionar o gato
//Cypress.Commands.add('adiciona', (item)=>{
//     cy.get('[data-test=new-todo]').type(`${item}{enter}`)
//     cy.get('[data-id="1770664831299"] > .view > label')
//})     
// ***********************************************

Cypress.Commands.add('cadastrar', (nome, email, senha) => { 
    cy.get('[data-test="input-name"]').type(nome);
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type(senha);
    cy.get('[data-test="input-confirm-password"]').type(senha);
    cy.get('[data-test="submit-button"]').click();
 })

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This 