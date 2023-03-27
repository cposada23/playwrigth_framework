Feature: As a user I expect to be able to....

  @playground
  Scenario: As a user I expect to be able to see contacts
    Given I am on the "home" page
    And the "Header logo" should be displayed
    Then the "contacts header" should contain the text "Contacts"