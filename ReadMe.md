# Description

This is a project, which I created for myself to learn the Basics of Typescript. It is a simple program, which fetches some JSON from the Web and displays it in the Terminal.

By doing so, I get to explore a lot of fundamentals of this language. It also explains why it is useful to work with Typescript rather then with Javascript

## Compilation
First of all it shows, how the compilation process works. By contrast to JavaScript, which can be directly executed by NodeJs, Typescript first needs to be compiled. This can be done with `npx ts-node <file.ts>`

## Intentional bugs
A good way to learn is to try to break things. So this is what I am doing here. I am intentionally introducing bugs to the code to learn about the benefits of Typescript.

### Incorrect usage of the fetched Data
In JS it often happens that you manually parse out the content of objects of fetched data. But you have no error checking there for the case that you are using the incorrect key names when parsing the data. By introducing the interface this bug is eventually resolved as it creates a local representation of the fetched data, against which your parsing instructions are compared against. 

### Incorrect ordering of function arguments 
A helper function is created for printing out the results, but the argument orders are messed up, when the function is called. Typescript also helps with that. If you assign a type to the arguments of the function, then you cannot provide the wrong arguments

## Summary
- The code no longer needs to be executed first to iron out all the bugs, but rather then that we receive a more sophisticated linting functionality from Typescript.
- The two bugs, are things which commonly break within such projects.

