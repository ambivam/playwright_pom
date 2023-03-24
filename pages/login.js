exports.LoginPage = class LoginPage {
    
    constructor(page) {
        this.page = page;
        this.username_textbox = page.getByLabel('Username');
        this.password_textbox = page.getByLabel('Password');
        this.login_button = page.getByRole('button', { name: ' Login' });
    }

    async gotoLoginPage(){
        await this.page.goto("https://the-internet.herokuapp.com/login");
    }

    async enterUserName(username) {
        await this.username_textbox.fill(username);
    }

    async enterPassword(password) {
        await this.password_textbox.fill(password);
    }

    async clickOnLogin() {
        await this.login_button.click();
    }

    async login(username, password) {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickOnLogin();
    }

}