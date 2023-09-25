import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPageObj from "../../e2e/PageObj/LoginPageObj";
import CustodianObj from "../../e2e/PageObj/CustodianObj";
const loginObj = new LoginPageObj();
const custodianObj = new CustodianObj();

//Login Step Definations
Given('Valid user logins', () => {
    cy.visit("https://dashboards.firsthelpfinancial.net");
    loginObj.getUserName().type("");
    loginObj.getPassword().type("")
    loginObj.getSignInButton().click()
})

When('Click on custodian dashboard icon', () => {
    custodianObj.getCustodianDashboardMenu().click()

})

Then('User should land on Custodian dashboard page', () => {
    cy.url().should('include', '/custodian')
})

//Custodian dashboard Step Definations
Given('User visits Custodian dashboard', () => {
    cy.intercept('GET', 'https://restinternal.firsthelpfinancial.net/ordswrapper?https://apisdev.firsthelpfinancial.com/ords/firsthelp_coll/custodian/custodian_exception_queue_tracker?limit=35').as('getAPI');
    custodianObj.getCustodianDashboardMenu().click()
    cy.wait('@getAPI', { timeout: 15000 }).its('response.statusCode').should('eq', 200);
})

When('Hover to first loan number and perform double click action', () => {
    custodianObj.mouseHover().realHover('mouse').dblclick()

})


When('Paste copied loan number in Search', () => {
    custodianObj.mouseHover().then(() => {
        custodianObj.getSearchIcon().click();
        custodianObj.getSearchField().then(($textField) => {
            cy.window().then((win) => {
                return win.navigator.clipboard.readText();
            }).then((copiedText) => {
                cy.wrap($textField).type(copiedText);
                cy.writeFile('cypress/fixtures/FHF_Loan_Number.json', { loanNumber: copiedText })
            });
        });
        custodianObj.getSearchField().type('{enter}')
    })
})

Then('Verify copied text', () => {
        cy.fixture('FHF_Loan_Number.json').then((data) => {
            custodianObj.getFirstLoan().should('contain', data.loanNumber)
    })
})

