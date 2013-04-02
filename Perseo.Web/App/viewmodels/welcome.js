 
define(function (require) {
    var system = require('durandal/system'),
        widget = require('durandal/widget'); 

    widget.registerKind('parallax'); 

    var ctor = function (name, description) {
        this.slides = ko.observableArray(["Title1", "Title2", "Title3", "Title4"]);
    };

    ctor.prototype.activate = function () {
        system.log('Model Activating', this);
    };
     
    return ctor;
});