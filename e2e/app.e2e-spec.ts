import { ProjekatPage } from './app.po';

describe('projekat App', () => {
  let page: ProjekatPage;

  beforeEach(() => {
    page = new ProjekatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
