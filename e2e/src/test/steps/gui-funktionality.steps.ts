import {Given, TableDefinition, Then, When} from 'cucumber';

const {Builder, By, Capabilities, Key} = require('selenium-webdriver');
const {expect} = require('chai');

require("chromedriver");

const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', {"w3c": false});
const driver = new Builder().withCapabilities(capabilities).build();

var tableelements;


Given('are the following values:', async (table: TableDefinition) => {
  await table.rows().forEach(element => {
    tableelements = element;
  })

});


When('these data are entered', function () {

  openURL(driver, "create-user-account");

  if(driver.findElement(By.id("createUserButton")).isDisplayed())
  {
    driver.findElement(By.id("createAccountNameInput")).sendKeys(tableelements[1][1]);
    driver.findElement(By.id("createAccountMailInput")).sendKeys(tableelements[2][2]);
    driver.findElement(By.id("createAccountPINInput")).sendKeys(tableelements[3][3]);
  }



  return 'pending';
});


When('The button Create was clicked', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('a new user should exist.', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
  closeWebsite(driver);
});

Given('a logged-in user', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


When('a new profile called {string} is created', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});


Then('a new profile should be available', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

function openURL(driver, url){
  driver.get("http://localhost:8100/"+url);
}

function closeWebsite(driver) {
  driver.close();
}
