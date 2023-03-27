import { Then } from "@cucumber/cucumber";
import { waitFor } from "../../support/wait-for-behavior";
import { ScenarioWorld } from "../setup/world";
import { getElementLocator } from "../../support/web-element-helper";
import { ElementKey } from "../../env/global";


Then(
  /^The "([^"]*)" should( not)? be checked$/,
  async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean) {
    const {
      screen: {page}
    } = this;

    console.log(`The ${elementKey} should ${negate?'not':''} be checked`)

    const elementIdentifier = getElementLocator(page, elementKey, this.globalConfig);

    await waitFor(async () => {
      const isElementChecked = await page.isChecked(elementIdentifier);
      return isElementChecked === !negate;
    });
  }
)