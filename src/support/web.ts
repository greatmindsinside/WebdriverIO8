/* eslint-disable require-jsdoc */
import { Selector } from 'webdriverio';

type ELEMENTS = WebdriverIO.Element | Promise<WebdriverIO.Element>;

export const waitForPageToLoad = async () => {
  await browser.waitUntil(
    () => {
      return browser.execute(() => {
        return document.readyState === 'complete';
      });
    },
    { timeout: 5000, timeoutMsg: 'Page failed to load within 5 seconds' }
  );
};

// export async function click(element: ELEMENTS, timeout: number) {
//     await (await element).waitForClickable({ timeout: timeout, timeoutMsg: `${element} failed to be clickable.` })
//     await (await element).click();
//   }

export type actions = 'click' | 'doubleClick';

export async function clickOn(selector: Selector, action: actions, type: 'link' | 'selector') {
  const selector2 = type === 'link' ? `=${selector}` : selector;
  const method: string = action === 'click' ? 'click' : 'doubleClick';
  await $(selector2)[method]();
}

export async function waitUntilDisplayed(element: ELEMENTS) {
  await (await element).waitForExist();
  await (await element).waitForDisplayed();
}
