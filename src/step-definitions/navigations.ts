import { Given, Then } from "@cucumber/cucumber";
import { PageId } from "../env/global";
import { currentPathMatchesPageId, navigateToPage } from "../support/navigation-behavior";
import { waitFor } from "../support/wait-for-behavior";
import { ScenarioWorld } from "./setup/world";


Given(
  /^I am on the "([^"]*)" page$/, 
  async function(this: ScenarioWorld, pageId: PageId) {
    console.log(`I am on the ${pageId} page`);

    const {
      screen: { page },
      globalConfig,
    } = this;

    
    await navigateToPage(page, pageId, globalConfig);
    await waitFor(() => currentPathMatchesPageId(page, pageId, globalConfig));
});

Then(
  /^I am directed to the "([^"]*)" page$/, 
  async function(this: ScenarioWorld, pageId: PageId) {
    console.log(`^I am directed to the ${pageId} page`);

    const {
      screen: { page },
      globalConfig,
    } = this;
    
    await waitFor(() => currentPathMatchesPageId(page, pageId, globalConfig));
});

