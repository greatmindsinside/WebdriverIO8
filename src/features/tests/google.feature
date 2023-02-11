Feature: Search on Google
  As a user I want to search on Google
  So that I can find information on the internet

  Scenario: Search for something on Google
    Given I open the url "www.google.com"
    Then I expect the url to contain "google.com"
    Then I wait on element "input[title='Search']" to be displayed
    
    When I set "WebdriverIO" to the inputfield "input[title='Search']"
    Then I click on the button "//input[@value='Google Search']"
    Then I wait for the page to load
    
    Then debug
    # When I search for something
    # Then I should be taken to the Google search results page
    # And I should be able to click on the first result