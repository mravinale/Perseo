define(function (require) { 
    var system = require('durandal/system');

    var ctor = function (element, settings) {
        this.settings = settings;
    };
    
    ctor.prototype.viewAttached = function (view) {
        $(view).cslider(this.settings.options);
        
        system.log('View Attached', view);
    };
    
    ctor.prototype.afterRenderItem = function (elements, item) {
        system.log('afterRenderItem', item);
    };

    return ctor;
});