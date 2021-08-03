# The Observer Pattern
The Observer Pattern provides a way to establish communication between objects that are listening (observers) and a subject
that has a list of observers. As soon as his context changes, it will notify all the observers inside the list with the new context;

This pattern provides a very low coupling level between the involved parts. This guarantee a loot of autonomy for the observers themselves because if they don't want to listen about changes of a specific subject, it can simply detach themselves;
The other case is valid, when an observer wants to listen about changes of a channel, it can register himself within the desired subject;

## The Publish/Subscribe Pattern
Another pattern that is very similar like the Observer is the Publish/Subscribe pattern. The main difference between both patterns is that by the Observer Pattern the observers need to be subscribed to a subject, as in the Publish/Subscribe Pattern all the parts are listening inside a topic(event) and when something is published inside it the subscribers will be notified by the channel itself;

Another way to see this pattern is to compare it to a chat application with sockets, where the users are the publishers AND the subscribers and when one send/publish a message all the parts will be notified about it;

To run the example just type `yarn observer` or `npm run observer`;

To see the code just click [here](/creational/observer/example.js);
