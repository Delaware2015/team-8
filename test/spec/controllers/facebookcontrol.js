'use strict';

describe('Controller: FacebookcontrolCtrl', function () {

  // load the controller's module
  beforeEach(module('gwJpmc8App'));

  var FacebookcontrolCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FacebookcontrolCtrl = $controller('FacebookcontrolCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FacebookcontrolCtrl.awesomeThings.length).toBe(3);
  });
});
