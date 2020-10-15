const { Given, When, Then } = require('cucumber');
const { contains } = require('underscore');
const assert = require('assert');
const mychai = require('chai');
const { expect } = require('chai');

Given(/^I launch chrome browser$/, function() {
    browser.url("https://print.stamps.com/Webpostage/default2.aspx?")
});

When(/^I go to stamps url$/, function() {
    browser.url("https://print.stamps.com/Webpostage/default2.aspx?")
});

Then(/^I expect URL to contain print.stamps.com$/, function() {
    var currurl = browser.getUrl();
    console.log(currurl);
    expect(currurl).to.contain('print.stamps.com');
});

When(/^I set Print On to Stamps$/, function() {
    $('input[id="printmediadroplist-1038-inputEl"]').setValue("Stamps");
});

When(/^I set Serial Number to C12345$/, function() {
    $('input[id="sdc-mainpanel-nsserialtextfield-inputEl"]').setValue("C12345");
});

When(/^I set Mail From ZIP to 94102$/, function() {
    $('input[id="unauthMailFromZip-1048-inputEl"]').setValue("94102");
});

When(/^I set Mail To Country to Canada$/, function() {
    $('input[id="combo-1063-inputEl"]').setValue("Canada");
});

When(/^I set Weight lbs to 1 and oz to 1$/, function() {
    $('input[id="numberfield-1167-inputEl"]').setValue("1");
    $('input[id="numberfield-1169-inputEl"]').setValue("1");
});

Then(/^I expect that Weight lbs is 1$/, function() {
    var weightlbs = $('input[id="numberfield-1167-inputEl"]').getValue();
    console.log(weightlbs);
    expect(weightlbs).to.equal('1');
});

Then(/^I set service to Letter$/, function() {
    $('input[id="sdc-mainpanel-servicedroplist-inputEl"]').setValue("FCMI Letter (Varies)");
    browser.pause(1000);
});
