import { CraigslistCopyPage } from './app.po';

describe('craigslist-copy App', () => {
  let page: CraigslistCopyPage;

  beforeEach(() => {
    page = new CraigslistCopyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
