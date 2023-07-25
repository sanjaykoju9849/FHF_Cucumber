class CustodianObj
{

    getCustodianDashboardMenu()
    {
        return  cy.get('a[href*="custodian/exception-queue"]').eq(0)
    }

    mouseHover()
    {
        return cy.get('[xmlns\\:xlink="http://www.w3.org/1999/xlink"]').eq(0)
    }

    getSearchIcon()
    {
        return cy.get('.search-icon')
    }

    getSearchField()
    {
        return cy.get('.search-text')
    }

    getFirstLoan()
    {
        return cy.get('div.table-body-wrapper > div:nth-child(1) > div:nth-child(1)')
    }

} 
export default  CustodianObj;

