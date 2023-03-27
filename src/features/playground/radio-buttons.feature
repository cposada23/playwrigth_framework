Feature: Radio Buttons

  As I user I can interact with radio buttons
  @playground
  Scenario: As a user I can interact and assert on radio buttons
    Given I am on the "home" page
    And I click the "playground button"
    Then I am directed to the "playground" page
    And The "female radio button" should be checked
    Then I check the "male radio button"
    And The "female radio button" should not be checked