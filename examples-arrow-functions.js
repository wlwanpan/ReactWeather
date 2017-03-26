// Arrow function tutorial

var names = ['Warren', 'Wan', 'Pang'];

names.forEach(function (name) {

    console.log('forEach', name);

});
// Not a simple expression
// Need to specify return since function doesnt not
// automatically returns.
names.forEach((name) => {
    console.log('arrowFunc', name);
});
// returns a simple expression
// this takes on their parents expression not itself
names.forEach((name) => console.log('arrowFunc', name));

var returnMe = (name) => name + '!';

// this.name = 'warren' since arrow function did not
// update the this keyword.
var person = {
    name: 'Warren',
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + 'says hi to' + name);
        })
    }
}
