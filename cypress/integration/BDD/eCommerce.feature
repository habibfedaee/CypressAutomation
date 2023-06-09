// here we are going to start writing our scenarios in gherkin language
// keywords: Feature, Scenario, Given, When, And, Then 

Feature: End-to-End ECommerce Validation
        Application Regression

Scenario: ECommerce product delivery

Given I open ECommerce page
When I add items to the cart
And validate the total prices
Then  select the country and submit and verify thank you message