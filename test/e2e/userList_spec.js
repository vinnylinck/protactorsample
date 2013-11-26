/*global describe, protractor, beforeEach,it, expect*/

describe('User List', function () {
    'use strict';
    
    var ptor = protractor.getInstance();
    
    beforeEach(function () {
        ptor.get('#/users');
    });
    
    it('should list at least one record', function () {
        ptor.findElements(protractor.By.repeater('user in users')).then(function (arr) {
            expect(arr.length).toBeGreaterThan(0);
        });
    });
    
    it('should navigate to the details page when clicking on the Add button', function () {
        var button = ptor.findElement(protractor.By.css('.add_button'));
        
        button.click();
        
        expect(ptor.getCurrentUrl()).toContain('/user/new');
    });
    
});