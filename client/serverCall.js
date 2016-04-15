// import { Meteor } from 'meteor/meteor';
// import { Template } from 'meteor/templating';
// import { ReactiveDict } from 'meteor/reactive-dict';
//
// import '/client/dieStorm.html'
// import { Rolls } from '/both/rolls.js';

// require(Meteor);
// require(Template);

// const Rolls = new Meteor.Collection('rolls');

Template.userRoll.onCreated(function userRollOnCreated() {
//     this.state = new ReactiveDict();
//     // Meteor.subscribe("bolls", Session.get("rolling"));
//     // Meteor.subscribe('bolls');
    Meteor.call('checkSandstormUserPermissions');
});
Template.userRoll.helpers({
    bolls: function() {
        // Show newest tasks at the top
        return Rolls.find({}, { sort: { createdAt: -1 } });
    },
});


    Template.userRoll.result = function() {
        // return Session.get('rolling') || "";
    };
    Template.userRoll.events = {
        'click .aDie': function (event) {
            whichDie = event.target.innerHTML;
            var guyID = Meteor.sandstormUser().id;
            var guy = Meteor.sandstormUser().name;
            // guyRoll = d20.roll(20);
            // console.log(Meteor.sandstormUser().name + " rolled?");
            Meteor.call('rollIt', whichDie, guyID, guy, function (err, response) {
                if (err) {
                    // Session.set('rolling', "Good Error:" + err.reason);
                    return;
                }
                // Session.set('rolling', response);
            });

        }
    };

