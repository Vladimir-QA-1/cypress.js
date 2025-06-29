describe('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайти
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст/ пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайти
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст/ пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввел верный логин
        cy.get('#pass').type('iLoveqastudio7'); // Ввел неверный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайти
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст/ пароль

        cy.get('#mail').type('german@dolnikov.com'); // Ввел неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Верный логин заглавными символами и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайти
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст/ пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввел неверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Проверка что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайти
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст/ пароль

        cy.get('#mail').type('germandolnikov.ru'); // Ввел логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввел верный пароль
        cy.get('#loginButton').click(); // Нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашел на сайти
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст/ пароль

        cy.get('#forgotEmailButton').click(); // Нажал кнопку восстановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажал кнопку отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
})


// План
// + Найти поле логин и ввести правильный логин
// + Найти поле пароль и ввести правильный пароль
// + Найти кнопку войти и нажать на неё
// + Проверить что авторизация прошла успешно