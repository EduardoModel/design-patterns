# Builder Pattern
This pattern allows objects to be built like in a production line, following different steps until the object is finalized;

For example, if a car object needs to be build but some of the defined attributes aren't necessary, by a normal class implementation all those fields need to be skipped; On the other hand with the Builder Pattern the fields can be added dynamically, to suit the necessity on demand;

Another approach would be the use of a **Director**. The director defines the order of the building steps and the builder implement those steps; The main advantage of the director is that it encapsulates all the default construction steps, centering the complexity inside one element and making easy the creation of those objects anywhere inside the code;

A very good explanation can be found on [this video](https://youtu.be/M7Xi1yO_s8E) by [Kyle from Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)

To run the example just type `yarn builder` or `npm run builder`;

To see the code just click [here](/creational/builder/example.js);
