import LoginPage from  '../pageobjects/login.page';
import ProfilePage from  '../pageobjects/profile.page';

describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        LoginPage.setLogin('karanchyk123@gmail.com');
        LoginPage.setPassword('085212');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});

// describe('Auth', () => {
//     it('user logs in with invalid data', () => {
//         LoginPage.open();
//         LoginPage.setLogin('karanchyk123@gmailcom');
//         LoginPage.setPassword('085212');
//         LoginPage.clickSubmitButton();
//         ProfilePage.isOpen();
//     });



