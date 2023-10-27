# Description

This is a project, which I created for myself to learn the Basics of Typescript. It is a simple program, which fetches some JSON from the Web and displays it in the Terminal.

By doing so, I get to explore a lot of fundamentals of this language. It also explains why it is useful to work with Typescript rather then with Javascript

First of all it shows, how the compilation process works. By contrast to JavaScript, which can be directly executed by NodeJs, Typescript first needs to be compiled. This can be done with `npx ts-node <file.ts>`

Initially an intentional bug was inserted, so that the purpose of interfaces is showcased. The bug was, that the naming of the variables within the fetched object were chosen incorrectly. This is where the interface comes into play. With it you can structure your API locally, so that the internal linter will notify you when you made a mistake.

