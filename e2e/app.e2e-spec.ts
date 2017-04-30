import { Angular4Template1Page } from './app.po';

describe('angular4-template1 App', () => {
  let page: Angular4Template1Page;

  beforeEach(() => {
    page = new Angular4Template1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
