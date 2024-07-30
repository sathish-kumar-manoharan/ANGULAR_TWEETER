import { TweeterPage } from './app.po';

describe('tweeter App', () => {
  let page: TweeterPage;

  beforeEach(() => {
    page = new TweeterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
