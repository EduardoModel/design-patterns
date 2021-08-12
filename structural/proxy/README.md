# The Proxy Pattern
The Proxy Pattern has the responsability to restrict the access to a specific class due security reasons or this object is costy to initiate, for example;

Another advantage of this pattern is to create a internal cache to save the response from some results that can not vary in a short period of time;
One of the big challenges of this pattern is to keep track of outdated values inside the cache;

A very good example is a credit card, because in the end it is a proxy for a bank account that contains money that can be used to pay services and goods just like cash does;
The benefit in this case is the security because a shop owner that recieves the payments virtualy doesn't have the concerns of loosing his profit due security issues;

This pattern is very similar to the [Module Pattern](/behavioral/module) in the aspect to restrict access to a given resource; The only difference is that by the Module Pattern was a value and with the Proxy Pattern is with a class;

Notes: The class and the proxy should implement the same methods;

To run the example just type `yarn proxy` or `npm run proxy`;

To see the code just click [here](/structural/proxy/example.js);
