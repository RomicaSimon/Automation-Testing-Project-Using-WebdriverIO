describe('bigfish.ro', () => {

    it('should load', async () => {

        await browser.url('https://bigfish.ro/#');

        const searchForProducts = await $('#quick-search');

        const searchButton = await $('#go-quick-search');

        const brandFilter = await $('.sprite');

        const crapFishingProducts = await $('//*[@id="website-categories"]/li[1]/a');

        searchButton.click();   
    });  


    
    it('should have the correct page title', async () => {
        await browser.url('https://bigfish.ro/#');
        await expect(browser).toHaveTitle('Magazin online de pescuit - articole si accesorii pentru pescuit');
    });


    it('should contain the word "Magazin" in title of the page', async () => {
        await browser.url('https://bigfish.ro/#')
        await expect(browser).toHaveTitleContaining('Magazin');
    });


    it('should have a specific Url', async () => {
        await browser.url('https://bigfish.ro/#');
        await expect(browser).toHaveUrl('https://bigfish.ro/#');
    });


    it('should contain "bigfish" in the Url', async () => {
        await browser.url('https://bigfish.ro/#');
        await expect(browser).toHaveUrlContaining('bigfish');
    });


    it('should contain a cart button', async () => {
        const myCartButton = await $('//*[@id="website-cart"]/a');
        await expect(myCartButton).toBeDisplayed();
    });


    it('should have a specific logo', async () => {
        const bigfishLogo = await $('//*[@id="logo"]/img')
        await expect(bigfishLogo).toExist();
    });

    it('should have a specific logo', async () => {
        const bigfishLogo = await $('//*[@id="logo"]/img')
        await expect(bigfishLogo).toExist();
    });


    it('should open Abu-Garcia page', async () => {
        const abuGarciaButton = await $('//*[@id="brands-slide"]/div[1]/div/div[1]/div/ul/li[4]/a/img');
        await abuGarciaButton.click();
        await expect(browser).toHaveTitle('Abu Garcia | BigFish.ro - magazin online de pescuit sportiv.');
    }); 


    it('should have a working search', async () => {
        const searchBox = await $('//*[@id="quick-search"]/input[2]');
        const searchButton = await $('#go-quick-search');
        await searchBox.setValue('mulineta');
        await searchButton.click();
    });  


    it('should access Newsletter', async () => {
        const emailBox = await $('#boxes-newsletter-email');
        const sendEmailButton = await $('//*[@id="newsletter-box-boxes"]/a/span');
        await emailBox.setValue('ion@gmail.com');
        await sendEmailButton.click();
    });

});
