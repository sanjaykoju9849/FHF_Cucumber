import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPageObj from "../../e2e/PageObj/LoginPageObj";
import CustodianObj from "../../e2e/PageObj/CustodianObj";
//import './commands';
const loginObj = new LoginPageObj();
const custodianObj = new CustodianObj();

//Login Step Definations
Given('Valid user logins',()=>{
    cy.visit("https://dashboards.firsthelpfinancial.net");
    loginObj.getUserName().type("collectionsmanager");
    loginObj.getPassword().type("FirstHelp_St@g!ng400#@!")
    loginObj.getSignInButton().click()
})

When('Click on custodian dashboard icon',()=>{
    custodianObj.getCustodianDashboardMenu().click()
    })

Then('User should land on Custodian dashboard page',()=>{
    cy.url().should('include', '/custodian')
})

//Custodian dashboard Step Definations
Given('User visits Custodian dashboard',()=>{
    custodianObj.getCustodianDashboardMenu().click()
})

When('Hover to first loan number',()=>{
    // cy.customCommand()
    // cy.customCommand().focused().dblclick() 
    custodianObj.mouseHover().realHover('mouse')
    })

When('Double click on the first loan number',()=>{
    custodianObj.mouseHover().then(($ele)=>{
        custodianObj.getSearchIcon().click();
        custodianObj.getSearchField()

        
    
        const pasteEvent = new ClipboardEvent('paste', {
            clipboardData: {
              getData: () => "test",
            },
          });
        
          // Trigger the paste event on the input field
          $ele[0].dispatchEvent(pasteEvent);
        //   .type('{ctrl}', { release: false }) // Press Ctrl key
        //   .type('v') // Press V key
        //   .type('{ctrl}', { release: true });
    })
    })

// Then('Verify the copied loan number from double click to paste in search bar',()=>{
//     custodianObj.getSearchBar().click().then(()=>{
//         custodianObj.getSearchField() .invoke('val', 'Pasted text goes here')
//         .trigger('paste', { clipboardData: { getData: () => 'Pasted text goes here' } });
//     })
// })

