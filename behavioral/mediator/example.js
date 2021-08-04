// Example for the Mediator Pattern
// Code adapted from https://www.youtube.com/watch?v=KOVc5o5kURE
const { name: fakerName } = require('faker');

const mediator = (function () {
  const participants = {};

  return {
    subscribe(participant) {
      if (!participants[participant]) {
        // Add the participant
        participants[participant.name] = participant;
        // Add the mediator inside the participant
        participant.mediator = this;
      }
    },
    publish(msg, from, to) {
      if (to) {
        to.notify(msg, from);
        return;
      }
      Object.keys(participants).forEach((key) => {
        if (participants[key] !== from) {
          // console.log(participants[key]);
          participants[key].notify(msg, from);
        }
      });
    },
  };
})();

function Participant(name) {
  this.name = name;
  this.mediator = null;
  this.send = function (msg, to) {
    this.mediator.publish(msg, this, to);
  };
  this.notify = function (msg, from) {
    console.log(`${from.name} to ${this.name}: ${msg}`);
  };
}

// Generate random participants
const participants = [];
for (let i = 0; i < 10; i++) {
  const participant = new Participant(fakerName.firstName());
  participants.push(participant);
  mediator.subscribe(participant);
}

console.log('\x1b[33m%s\x1b[0m', 'Broadcast a message');
participants[2].send('Hello from me! :D');

console.log('\x1b[33m%s\x1b[0m', '\nSend a direct message');
participants[1].send('Secret hello from me! ;)', participants[7]);

console.log('\x1b[33m%s\x1b[0m', '\nSend another direct message');
participants[5].send('Hi, how are you doing? ^^', participants[0]);

console.log('\x1b[33m%s\x1b[0m', '\nAnother broadcast');
participants[0].send(
  'GUYS!!! You are all invited to my BBQ tomorrow by my at home! :D'
);
