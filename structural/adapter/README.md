# The Adapter Pattern
The Adapter Pattern is very useful when an existing code/interface exports data formated in a specific format (XML for example) and helps to convert it into JSON to another part of the application be able to deal with the data;

Another good usage is when a part of the code is depending of a third party library that can be changed in the future and to avoid the headache of a code tightly coupled an adapter can be very usefull providing the same way to pass the data independendly of the library that is running under the hood;

To run the example just type `yarn adapter` or `npm run adapter`;

To see the code just click [here](/structural/adapter/example.js);
