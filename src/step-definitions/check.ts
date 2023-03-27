import { checkElement, clickElement } from "../support/html-behavior";

import { waitFor } from "../support/wait-for-behavior";
import { getElementLocator } from "../support/web-element-helper";
import { ElementKey } from "../env/global";
import { Then } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";


Then(
  /^I check the "([^"]*)"$/,
  async function(this: ScenarioWorld, elementKey: ElementKey) {
    const {
      screen: {page},
      globalConfig
    } = this;

    console.log(`I check the ${elementKey}`)

    const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

    await waitFor(async () => {
      return await checkElement(page, elementIdentifier);
    });
  }
)