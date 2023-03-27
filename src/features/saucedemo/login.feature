Feature: Login

  As I user I want to be able to login into the application
  @smoke
  Scenario: As a standar user I can login into the application
    Given I am on the "login" page
    And I fill in the "username" input with "standard_user"
    And I fill in the "password" input with "secret_sauce"
    And I click the "loginbutton"
    Then I am directed to the "inventory" page
    And the "header container" should contain the text "Products"

  @smoke
  Scenario: As a locked out user If I try to login into the application I prompted an error message
    Given I am on the "login" page
    And I fill in the "username" input with "locked_out_user"
    And I fill in the "password" input with "secret_sauce"
    And I click the "loginbutton"
    Then I am directed to the "login" page
    And the "error element" should contain the text "Epic sadface: Sorry, this user has been locked out."

  @smoke
  @dev
  Scenario: As a user that is experience perfomance issues I can login into the application
    Given I am on the "login" page
    And I fill in the "username" input with "performance_glitch_user"
    And I fill in the "password" input with "secret_sauce"
    And I click the "loginbutton"
    Then I am directed to the "inventory" page
    And the "header container" should contain the text "Products"
