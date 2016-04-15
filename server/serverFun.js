// Meteor.startup( function() {
// //     // if(_.has(this.connection, "sandstormUser()")) {
//     this.connection.sandstormUser();
//  // }
// });
// // this.connection.sandstormUser();
//
// Meteor.publish('start', function(){
//     // this.connection.sandstormUser();
// });

Meteor.startup(function () {
    Meteor.methods({
        getCurrentTime: function () {
            console.log('on server, getCurrentTime called');
            return new Date();
        },

        welcome: function (name) {
            console.log('on server, welcome called with name: ', name);
            if(name==undefined || name.length<=0) {
                throw new Meteor.Error(404, "Please enter your name");
            }
            return "Welcome " + name;
        },
        checkSandstormUserPermissions: function () {
            // check(types, Array);
            var sandstormUser = this.connection.sandstormUser();
            if (!sandstormUser) {
                console.log('no sandstormUser');
                return;
            }else{
                console.log('sandTime READY');
            }
            return true;
        }
        // getUser: function(){
        //     if(_.has(this.connection, "sandstormUser")) {
        //         return this.connection.sandstormUser();
        //     }else{
        //         return false;
        //     }
        //
        // },
        
    });
    // Meteor.call('getUser',function(err, response) {
    //     Session.set('userResponse', response);
    // });
});