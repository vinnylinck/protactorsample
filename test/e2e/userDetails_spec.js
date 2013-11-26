/*global describe, protractor, beforeEach,it, expect, inject*/

describe('User Details', function () {
    'use strict';
    
    var ptor = protractor.getInstance(),
        userDetailsScope,
        controllerService,
        loginValue,
        nameValue,
        projectValue;
    
    beforeEach(function () {
        ptor.get('#/users');
        
        ptor.findElements(protractor.By.repeater('user in users')).then(function (arr) {
            var rows = arr.length;
            
            if (rows > 0) {
                var login = ptor.findElement(protractor.By.repeater('user in users').row(0).column('user.login')),
                    name = ptor.findElement(protractor.By.repeater('user in users').row(0).column('user.name')),
                    project = ptor.findElement(protractor.By.repeater('user in users').row(0).column('user.project'));
                
                login.getText().then(function (value) {
                    
                    loginValue = value;
                    
                    name.getText().then(function (value) {
                        nameValue = value;
                        
                        project.getText().then(function (value) {
                            projectValue = value;
                            
                            // redirect to details page
                            login.click();
                        });
                    });
                });
            }
        });
    });
    
    it('should correctly fill in user data', function () {
        expect(ptor.getCurrentUrl()).toContain('/user/akira');
        
        var loginField = ptor.findElement(protractor.By.input('user.login')),
            nameField = ptor.findElement(protractor.By.input('user.name')),
            projectField = ptor.findElement(protractor.By.input('user.project'));
        
        // Dica do dia: getText não funciona para elementos que não tem tag de fechamento <tag />.
        // para isso é preciso usar o método getAttribute()
        expect(loginField.getAttribute('value')).toEqual(loginValue);
        expect(nameField.getAttribute('value')).toEqual(nameValue);
        expect(projectField.getAttribute('value')).toEqual(projectValue);
    });
    
    it('should update data', function () {
        var nameField = ptor.findElement(protractor.By.input('user.name')),
            projectField = ptor.findElement(protractor.By.input('user.project')),
            button = ptor.findElement(protractor.By.css('.update_button'));
        
        nameValue += '_test';
        projectValue += '_test';
        
        nameField.clear();
        nameField.sendKeys(nameValue);
        
        projectField.clear();
        projectField.sendKeys(projectValue);
        
        button.click();
        
        console.log('click');
        
        ptor.findElements(protractor.By.repeater('user in users')).then(function (arr) {
            var rows = arr.length;
            
            if (rows > 0) {
                var name = ptor.findElement(protractor.By.repeater('user in users').row(0).column('user.name')),
                    project = ptor.findElement(protractor.By.repeater('user in users').row(0).column('user.project'));
                
                expect(name.getText()).toEqual(nameValue);
                expect(project.getText()).toEqual(projectValue);
            }
        });
    });
    
});