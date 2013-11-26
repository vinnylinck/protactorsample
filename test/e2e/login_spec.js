/*global describe, protractor, beforeEach, it, expect*/
describe('Login', function () {
    'use strict';
    
    var ptor = protractor.getInstance();
    
    beforeEach(function () {
        ptor.get('#/login');
    });
    
    it('should attach the controller to the view', function () {
        var title = ptor.findElement(protractor.By.binding('title'));
        expect(title.getText()).toEqual('Login');
    });
    
    it('should fail if credential is invalid', function () {
        var username = ptor.findElement(protractor.By.input('username')),
            password = ptor.findElement(protractor.By.input('password')),
            button = ptor.findElement(protractor.By.css('.login_button')),
            message = ptor.findElement(protractor.By.binding('message'));
        
        username.clear();
        username.sendKeys('admin');
        
        password.clear();
        password.sendKeys('admin123');
        
        button.click();
        expect(message.getText()).toEqual('Invalid username or password!');
    });
    
    it('should redirect if credential is valid', function () {
        var username = ptor.findElement(protractor.By.input('username')),
            password = ptor.findElement(protractor.By.input('password')),
            button = ptor.findElement(protractor.By.css('.login_button')),
            newPageTitle;
        
        username.clear();
        username.sendKeys('admin');
        
        password.clear();
        password.sendKeys('admin');
        
        button.click();
        newPageTitle = ptor.findElement(protractor.By.binding('title'));
        expect(ptor.getCurrentUrl()).toContain('#/users');
        expect(newPageTitle.getText()).toEqual('User List');
    });
    
});