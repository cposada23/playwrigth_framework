export type PageId = string;
export type PagesConfig = Record<PageId, Record<string, string>>;
export type HostsConfig = Record<string, string>;
export type ElementKey = string;
export type ElementLocator = string;
export type PageElementsMappings = Record<PageId, Record<ElementKey, ElementLocator>>;



export type GlobalConfig = {
  hostsConfig: HostsConfig;
  pagesConfig: PagesConfig;
  pageElementMappings: PageElementsMappings;
}