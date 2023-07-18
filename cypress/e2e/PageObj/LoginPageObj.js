class LoginPageObj
{
getUserName()
{
    return cy.get('#okta-signin-username')
}

getPassword()
{
   return cy.get('#okta-signin-password')
}

getSignInButton()
{
    return cy.get('#okta-signin-submit')
}
} 
export default  LoginPageObj;

