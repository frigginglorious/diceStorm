import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


export const Rolls = new Mongo.Collection('rolls');
// const Rolls = new Mongo.Collection('rolls');
// module.exports = Rolls;

if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('rolls', function rollsPublication() {
        // this.connection.sandstormUser();
        return Rolls.find();
    });
}
console.log("rolls.js is being called");
Meteor.methods({
    // 'rolls.insert'(text) {
    //     check(text, String);
    //
    //     // Make sure the user is logged in before inserting a task
    //     if (! Meteor.userId()) {
    //         throw new Meteor.Error('not-authorized');
    //     }
    //
    //     Rolls.insert({
    //         text,
    //         createdAt: new Date(),
    //         owner: Meteor.userId(),
    //         username: Meteor.user().username,
    //     });
    // },
    // 'rolls.remove'(taskId) {
    //     check(taskId, String);
    //
    //     Rolls.remove(taskId);
    // },
    // 'rolls.setChecked'(taskId, setChecked) {
    //     check(taskId, String);
    //     check(setChecked, Boolean);
    //
    //     Rolls.update(taskId, { $set: { checked: setChecked } });
    // },
    'rollIt'(d) {
        // check(d, Number);
        if (isNaN(d)){
            throw new Meteor.Error("No Num", "That wasn't a number");
        }

        var theRoll = d20.roll(d);
        // Meteor.call('tasks.insert', theRoll);
        // if(_.has(Meteor, "sandstormUser")){
        //     var guyID = Meteor.sandstormUser().id;
        //     var guy = Meteor.sandstormUser().name;
        //     console.log("not Sandstorm");
        // }else{
            var guyID = "1";
            var guy = "guy";

        // }


        Rolls.insert({
            theRoll,
            dieType: d,
            createdAt: new Date(),
            owner: guyID,
            username: guy,
        });

        // return theRoll;
    },
});