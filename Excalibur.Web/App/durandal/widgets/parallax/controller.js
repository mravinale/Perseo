define(function (require) {
    var widget = require('durandal/widget');

    var ctor = function (element, settings) {
        this.settings = settings; 
    };
    
    ctor.prototype.viewAttached = function (view) {
        $(view).children().cslider(this.settings.options);
    };

    return ctor;
});