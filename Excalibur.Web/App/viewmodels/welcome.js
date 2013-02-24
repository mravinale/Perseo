define(function (require) {
    var system = require('durandal/system'),
          app = require('durandal/app');

    var ctor = function (name, description) {
    };

    ctor.prototype.activate = function () {
        system.log('Model Activating', this);
    };
     
    return ctor;
});