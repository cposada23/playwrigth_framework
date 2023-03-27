import { clickElement } from "../support/html-behavior";

import { waitFor } from "../support/wait-for-behavior";
import { getElementLocator } from "../support/web-element-helper";
import { ElementKey } from "../env/global";
import { When } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";


When(
  /^I click the "([^"]*)"$/,
  async function(this: ScenarioWorld, elementKey: ElementKey) {
    const {
      screen: {page}
    } = this;

    console.log(`I click the ${elementKey} (?:button|link|icon|element)`)

    const elementIdentifier = getElementLocator(page, elementKey, this.globalConfig);

    await waitFor(async () => {
      const result = await page.waitForSelector(elementIdentifier, { state: 'visible'});

      if (result) {
        await clickElement(page, elementIdentifier);
      }

      return result;
    });
  }
)