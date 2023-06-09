import { Frame, Page } from 'playwright';
import { ElementLocator } from '../env/global'; 

export const clickElement = async(
  page: Page,
  elementIdentifier: ElementLocator
): Promise<void> => {
  await page.click(elementIdentifier);
}

export const inputValue =async (
  page: Page,
  elementIdentifier: ElementLocator,
  input: string,
): Promise<void> => {
  await page.focus(elementIdentifier);
  await page.fill(elementIdentifier, input);
}

export const selectValue =async (
  page: Page,
  elementIdentifier: ElementLocator,
  option: string,
): Promise<void> => {
  await page.focus(elementIdentifier);
  await page.selectOption(elementIdentifier, option);
}

export const checkElement = async (
  page: Page,
  elementIdentifier: ElementLocator
): Promise<boolean> => {
  let isElementChecked = false;
  const result = await page.waitForSelector(elementIdentifier, { state: 'visible' });

  if (result) {
    await page.check(elementIdentifier);
    isElementChecked = await page.isChecked(elementIdentifier);
  }
  return (isElementChecked && result != null);
}

export const getValue = async (
  page: Page,
  elementIdentifier: ElementLocator
): Promise<String | null> => {
  const value = await page.$eval<String, HTMLSelectElement>(elementIdentifier, el => el.value);
  return value;
}


export const getIframeElement = async (
  page: Page,
  iframeidentifier: ElementLocator
): Promise<Frame | undefined | null> => {
  await page.waitForSelector(iframeidentifier);
  const elementHandle = await page.$(iframeidentifier);
  const elementIframe = await elementHandle?.contentFrame();
  return elementIframe;
}


export const inputValueOnIframe = async (
  elementIframe: Frame,
  elementIdentifier: ElementLocator,
  inputValue: string
): Promise<void> => {
  await elementIframe.fill(elementIdentifier, inputValue);
}