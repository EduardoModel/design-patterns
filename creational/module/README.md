# The Module Pattern
The Module Pattern is basically a way to provide private and public encapsulation for methods and attributes;

It is like the private and public attributes from a class (read more about it [here](https://stackoverflow.com/questions/215497/what-is-the-difference-between-public-protected-package-private-and-private-in#:~:text=public%20%3A%20accessible%20from%20everywhere.,within%20the%20same%20class%20only.));

The main keyword here is **privacy**, because this pattern allows the developer to write public and private methods and variables and thus protecting them to be leaked outside the module and possibly conflicting with other variables or interfaces that are being currently used;

Another main advantage is to encapsulate a lot of logic and complexity and only expose some interface methods to communicate with the module, making the usage for the developer a lot easier;

To run the example just type `yarn module` or `npm run module`;

To see the code just click [here](/creational/module/example.js);
