import { Given, Then, When, And } from "@badeball/cypress-cucumber-preprocessor";
import { when } from "cypress/types/jquery";

Given('User visit to Login page',()=>{
cy.visit("https://dashboards.firsthelpfinancial.net/login");
})

when('User type username',()=>{
    cy.get('#okta-signin-username').type("collectionsmanager");
    })


And('User type password',()=>{
    cy.get('#okta-signin-password').type("FirstHelp_St@g!ng400#@!")
})

And('User click on Sign in button',()=>{
    cy.get('#okta-signin-submit').click()
})

Then('User click on Sign in button',()=>{
    cy.get('#okta-signin-username').url().should('include', '/contracts')
})