# The Facade Pattern
The Facade Pattern consists to hide the complexity and present a friendly interface to communicate with the external world, abstracting all the heavy lifting that is happening in the background;

For example, when the power button of a computer is pressed a series of events are fired to initiate the operational system and be able to be utilized;
Another good example is the [jQuery library](https://jquery.com/) with the $(...) operator. Everytime that a function like $(...).animate() or $(...).css() a facade is been used;

The major downside of this pattern is basically the tradeoff between usability and performance;

To run the example just type `yarn facade` or `npm run facade`;

To see the code just click [here](/structural/facade/example.js);
