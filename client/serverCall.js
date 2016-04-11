import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import '/client/diceStorm.html'

import { Rolls } from '/both/rolls.js';

Template.userRoll.onCreated(function userRollOnCreated() {
    this.state = new ReactiveDict();
    Meteor.subscribe("rolls", Session.get("rolling"))
    // Meteor.subscribe('rolls');
});
Template.userRoll.helpers({
    rolls: [
        { text: 'This is task 1' },
        { text: 'This is task 2' },
        { text: 'This is task 3' },
    ],
    rolls() {
        // Show newest tasks at the top
        return Rolls.find({}, { sort: { createdAt: -1 } });
    },
});


    Template.userRoll.result = function() {
        return Session.get('rolling') || "";
    };
    Template.userRoll.events = {
        'click .aDie': function (event) {
            whichDie = event.target.innerHTML;
            // guyRoll = d20.roll(20);
            // console.log(Meteor.sandstormUser().name + " rolled?");
            Meteor.call('rollIt', whichDie, function (err, response) {
                if (err) {
                    Session.set('rolling', "Good Error:" + err.reason);
                    return;
                }
                Session.set('rolling', response);
            });

        }
    };

