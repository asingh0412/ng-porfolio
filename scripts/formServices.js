app.service('formServices', function(){

    var list = [
        {
            fName: 'a',
            lName: 's',
            email: 'e@e.com'
        },
        {
            fName: 'b',
            lName: 's',
            email: 'c@c.com'
        },
        {
            fName: 'd',
            lName: 's',
            email: 'le@le.com'
        }
    ];
    this.addRecord = function (){
        console.log("in the service add");
        return list;

    };
});