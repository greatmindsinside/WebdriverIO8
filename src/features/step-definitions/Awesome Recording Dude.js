describe("Awesome Recording Dude", () => {
  it("tests Awesome Recording Dude", async () => {
    await browser.setWindowSize(823, 713)
    await browser.url("chrome://new-tab-page/")
    await expect(browser).toHaveUrl("chrome://new-tab-page/")
    await browser.$("#realbox").click()
    await browser.$("#realbox").setValue("something to search for")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.url("https://www.google.com/search?q=something+to+search+for&rlz=1C1ONGR_enUS989US989&oq=something+to+search+for&aqs=chrome..69i57j0i22i30j0i15i22i30j0i22i30l6j0i390.5432j0j15&sourceid=chrome&ie=UTF-8")
    await expect(browser).toHaveUrl("https://www.google.com/search?q=something+to+search+for&rlz=1C1ONGR_enUS989US989&oq=something+to+search+for&aqs=chrome..69i57j0i22i30j0i15i22i30j0i22i30l6j0i390.5432j0j15&sourceid=chrome&ie=UTF-8")
    await browser.$("//*[@id=\"rso\"]/div[1]/div/div/div/div[1]/div/a/h3").click()
    await expect(browser).toHaveUrl("https://www.fastcompany.com/90308480/40-incredibly-useful-things-you-didnt-know-google-search-could-do")
  });
});
