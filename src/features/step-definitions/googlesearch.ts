import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';

Given('I am on the Chrome new tab page', async () => {
  await browser.setWindowSize(823, 713);
  await browser.url('chrome://new-tab-page/');
  expect(browser.getUrl()).to.contain('chrome://new-tab-page/');
});

When('I search for something', async () => {
  await browser.$('#realbox').click();
  await browser.$('#realbox').setValue('something to search for');
  await browser.keys('Enter');
});

Then('I should be taken to the Google search results page', async () => {
  expect(browser.getUrl()).to.contain('search?q=something+to+search+for');
});

Then('I should be able to click on the first result', async () => {
  await browser.$("//*[@id='rso']/div[1]/div/div/div/div[1]/div/a/h3").click();
  expect(browser.getUrl()).to.contain('www.fastcompany.com');
});
