import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given('User visit to Login page',()=>{
    cy.visit("https://dashboards.firsthelpfinancial.net");
})

When('Type Username and Password',()=>{
    cy.get('#okta-signin-username').type("collectionsmanager");
    cy.get('#okta-signin-password').type("FirstHelp_St@g!ng400#@!")
    })


When('Click on Sign in button',()=>{
    cy.get('#okta-signin-submit').click()
})

Then('User should land on Docman dashboard page',()=>{
    cy.get('#okta-signin-username').url().should('include', '/contracts')
})