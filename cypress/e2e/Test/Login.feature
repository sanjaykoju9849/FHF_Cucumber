Feature: Login feature in FHF

    Scenario: User logins with valid credentials
        Given User visit to Login page
        When Type Username and Password
        When Click on Sign in button
        Then User should land on Docman dashboard page