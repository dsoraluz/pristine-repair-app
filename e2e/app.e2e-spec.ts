import { PristineRepairAppPage } from './app.po';

describe('pristine-repair-app App', () => {
  let page: PristineRepairAppPage;

  beforeEach(() => {
    page = new PristineRepairAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
