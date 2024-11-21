// test object
var test = {
    fname: "yilian",
    lname: "zhang",
    age: 100,
    display: function(){
        console.log("in function");
        return this.fname + " " + this.lname;
    }
};
console.log(test.display());

// hotel reservation
var guestgroup = new Array();
$('#submit').click(reservation);
function reservation(){
    var guest={
     name: $('#name').val(),
     checkin: $('#checkin').val(),
     numberofguest: $('#numberofguest').val(),
     roomtype: $('#roomtype').val(),
// complete this
    };
    alert(guest.name + " Reserve a Room");
    guestgroup.push(guest);
    console.log(guestgroup);
}