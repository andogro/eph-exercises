function Salutation(fn, ln) {

    // Private variable to store current first and last name
    var firstName = fn;
    var lastName = ln;

    // Return an object with greeting and fullName functions
    return {
        fullName: function() {
            return (firstName + ' ' + lastName + '<br />');
        },
        greeting: function() {
            return ('Greetings and Salutations' + ' ' + firstName + ' ' + lastName + '<br />');
        }
    };
};