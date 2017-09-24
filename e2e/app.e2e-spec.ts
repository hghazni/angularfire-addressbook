import { Ng2FirebaseAddresslistPage } from './app.po';

describe('ng2-firebase-addresslist App', function() {
  let page: Ng2FirebaseAddresslistPage;

  beforeEach(() => {
    page = new Ng2FirebaseAddresslistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
