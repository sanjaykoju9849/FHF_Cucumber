Feature: Go to Custodian dashboard and Perform hover.

#     Scenario: User visits Custodian dashboard page
#         Given Valid user logins
#         When Click on custodian dashboard icon
#         Then User should land on Custodian dashboard page

    Scenario: User to hover over first loan number
        Given Valid user logins
        Given User visits Custodian dashboard
        When Hover to first loan number
        When Double click on the first loan number
       