
$(document).ready(function() {

    $("button[name='forsberg']").click(function() {
        var mySalutation = Salutation("Peter", "Forsberg");
        $("#salutation").append(mySalutation.greeting());
    });

    $("button[name='sakic']").click(function() {
        var mySalutation = Salutation("Joe", "Sakic");
        $("#fullname").append(mySalutation.fullName());
    });

});