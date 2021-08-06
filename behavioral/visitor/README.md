# The Visitor Pattern
The Visitor Pattern takes the responsability to implement some strategy to apply to specific elements and leaves the classes with only a method to give access to the visitor and thus avoiding unecessary methods to be saved within the class and keeping the [Single Responsability Principle](https://en.wikipedia.org/wiki/Single-responsibility_principle);

A good example for this pattern would be a building inspector because depending of the type of the building different verifications should be done;
Another example would be an insurance agent that needs to sell different types of insurances depending of the type of building that he visits (more about [here](https://refactoring.guru/design-patterns/visitor));

To run the example just type `yarn visitor` or `npm run visitor`;

To see the code just click [here](/behavioral/visitor/example.js);
