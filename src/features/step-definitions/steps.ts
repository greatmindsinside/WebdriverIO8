import { Given, When, Then } from '@wdio/cucumber-framework';

import chai from 'chai'; // Using Expect style
import dirtyChai from 'dirty-chai';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';
import { clickOn, waitForPageToLoad } from '../../support/web.js';

const { expect } = chai;
chai.use(dirtyChai);

const pages = {
  login: LoginPage,
};

Given('debug', async () => {
  await browser.debug();
});

Given('I wait for the page to load', async () => {
  await waitForPageToLoad();
  await clickOn('ham', 'click', 'link');
});

Given(/^I am on the (\w+) page$/, async page => {
  await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then('I should see a flash message saying {string}', async (message: string) => {
  expect(await SecurePage.flashAlert.getText()).to.include(message);
});
