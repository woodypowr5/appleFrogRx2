import { AppleFrogRx2Page } from './app.po';

describe('apple-frog-rx2 App', function() {
  let page: AppleFrogRx2Page;

  beforeEach(() => {
    page = new AppleFrogRx2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
