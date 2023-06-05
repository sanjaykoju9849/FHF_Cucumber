Feature: Login feature in FHF.

    Scenario: User logins with valid credentials.

        Given User visit to Login page
        When User type username
        And User type password
        And User click on Sign in button
        Then User should land on Docman dashboard page


