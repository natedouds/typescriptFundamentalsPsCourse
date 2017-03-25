var demo;
(function (demo) {
    var name = ko.observable('Nathan Douds');
    var id = ko.observable(1);
    var guy = {
        id: id,
        fullName: name
    };
    //  this would throw an error as fullName is the function, not the value
    //  var value: string = guy.fullName;
    //  valid sample
    var value = guy.fullName();
    console.log(value);
})(demo || (demo = {}));
