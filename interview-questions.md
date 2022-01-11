# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What are props in React?

Your answer: In React, props are short for properties. It is a way for information to be passed from parent component child components, however, not the other way around. Props get passed into the constructor and super as arguments, ex. `contructor(props)` and `super(props)`. A prop, such as a state value, would then need to be saved in a variable and passed to the child component, ex. <SomeComponent someProp={this.state.someProp}/> and called in SomeComponent as `{this.props.someProp}`.

Researched answer: Props are arguments that are passed form parent to child React components uni-directionally via HTML attributes. Props data is read-only which means it comes from the parent and should not be changed in the child components.

2. What is a DOM event?

Your answer: A DOM event an action that the user makes such as a keystroke or a mouse click. It also can be any change that occurs on the website. These types of events are captured by event handlers and can be used triggers.

Researched answer: HTML DOM events allow JavaScript to use different even handlers on HTML elements. Events are usually coupled with functions, the functions will not execute before an event occurs. DOM events have properties and methods that can be accessed as well.

3. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming (OOP) is the paradigm of writing your code around the use classes and objects. There four tenents of OOP; abstraction, encapsulation, polymorphism, and one more that I cannot remember off the top of my head. It it different than functional programming (FP) in that FP's foundation is around functions, take input, get an output, no mutations, no side effects. In OOP, things change and that's the beauty of it. If I were to draw a comparison, I would say OOP is more like art while FP is more like science. That being said there are good and bads in each paradigm and I want to eventually learn both and then pick the best tool for the job.

Researched answer: The four pillars of OOP are encapsulation, abstraction, inheritance, and polymorphism. OOP produces simple and understandable structures from complex things. Downsides of OOP can be that if you have erros because a class is not inheriting the right things, it can be a bit of a daunting task to debug. FP is a way to describe the solution to a problem via a mathematical function. In OOP, the question is "how do we solve this?" While in FP the question is "what do we solve?". Some popular languages in OOP include Ruby, Scala, and Smalltalk and popular FP languages include Haskell, Rust, and Elixir.

4. What is the difference between a Float and an Integer in Ruby?

Your answer: In Ruby, a float is a number with decimals such as 1.0, 10.59, -125.12837. An integer in Ruby are only the whole numbers like 11, 0, -1593. When doing division on just numbers, you receive a number, which is, I believe rounded down to the nearest whole number. To get the more exact amount, you have to use floats. 5/3 vs 5.0/3.0. Note, only one of the numbers need to be a float.

Researched answer: An integer, or int, are whole numbers that can be positive, negative or 0. Large ints can be separted with `_` to make it easier to read for humans, ex 1_000_000. When printed to the screen the output would be 1000000 though. A floating-point number represents a real number that either are rational or irrational, `10.0` or `-152.5983`.

5. Ruby has an implicit return. What does that mean?

Your answer: An implicit return means that in a method, the last line of close is the thing that is returned, thus eliminating the need for an explicit `return`, unlike JavaScript.

Researched answer: Every block in Ruby will return the last line automatically because of the implicit return. Explicit returns can lead to erros if used inside Procs so it's better to just let the language do it's thing and implicitly return.

## Looking Ahead: Terms for Next Week

1. Instance Variable: A variable in ruby that begins with `@` which deals with only the scope of the object it exists in. In a class with two objects, they can have the same named instance variable but equal different things. It reminds me of `this` in JavaScript.

2. PostgreSQL: It is a free and open-source database which focuses on extensibility and SQL compliance. It is a successor to the Ingres database developed at Cal. PostgreSQL is also known as simply Postgres.

3. Ruby on Rails: A backend web application open-source framework that provides structures for database, a web service, and web pages. Rails was first released in August of 2004 and is currently up to version 7. The original author of Rails is David Heinemeier Hansson.

4. ORM: Object Relational Mapping is a technique for converting data between different systems using OOP. It creates a "virtual object database" that can be used from within a programming language.

5. Active Record: It is the Model in Model View Controller (MVC) which is reponsible for representing business data and logic. It facilitates the creation and use of business objects that require presistent storage in a database.
