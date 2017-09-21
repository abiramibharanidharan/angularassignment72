import { AAngular72Page } from './app.po';

describe('a-angular72 App', function() {
  let page: AAngular72Page;

  beforeEach(() => {
    page = new AAngular72Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
