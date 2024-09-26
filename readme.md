# JavaScript Jotting

## Chapter One: 

JavaScript(JS): This works to enable interactivity in web pages. HTML provides the content and structure, CSS provides the styling and layout, and JavaScript provides the interactivity. 

JavaScript is fundamentally one of the three languages that are native to the web. The other two languages are HTML semantic markup language & CSS styling and layout language. All three are very different from one another in purpose and function, but they are all meant to work together in one single environment. 

### Exercise 1.02: Can I Use This Feature?

There is no easy way to tell which versions of JavaScript are supported by which browsers. A more reliable approach is to test whether the features you wish to use are supported by the engine currently running the code. Lets take a look at the Can I use table:
1. Open a web browser and instruct it to load <https://caniuse.com/> Notice that you have immediate access to the latest and most searched features directly from the home page, without even searching:
2. Locate the search area toward the top, which reads Can I use ___________?,and type in finally, since we want to see which browsers support Promise.prototype.finally. The results for our search will be displayed automatically within a colored grid

> Note that certain blocks are red, while others are green. A red color indicates that the feature is unsupported, and green indicates that the feature is supported. You may also see a yellow color, indicating partial support.
3. If you want to see the specifics pertaining to a certain browser version, hover your 
cursor over the indicated version or version range and a small overlay will appear 
with additional information such as the date of version release and even usage 
statistics for that version.

### Accessing Web Browser Developer Tools (Windows)

When writing JavaScript for the web browser, it is important to know how to access and use the browser developer tools—especially the JavaScript console tab.

To access developer tools and the JavaScript console within Chrome, you can right-click anywhere in the viewport and choose ***Inspect*** from the menu that appears. Once the developer tools are open, click on the ***Console*** tab to inspect and write JavaScript code within Chrome itself.

Using the Chrome developer tools, you can filter the sort of things that show errors, warnings, or even just information such as that returned by **console.log()**. You can even write JavaScript within the browser using the **Console** tab view, as you'll see shortly. There is also a **Sources** tab, which allows for modifying and debugging of code.

### Accessing Web Browser Developer Tools (Apple Safari)

On Apple macOS and iOS operating systems, Safari is the default web browser and is tightly integrated into the user experience on those machines. Similar to Windows and Internet Explorer/Edge, many users will never deviate from the browser that is preinstalled on their machine.Safari was once even available on Windows, but development ceased with the final Windows version in 2012.

To access the developer tools and the JavaScript console within Safari, you must first 
tweak some of the preferences within the browser itself.
1. First, access the preferences dialog by choosing **Safari | Preferences** through the **Application** menu.
2. Within the **Preferences** dialog, click on the tab called **Advanced**.
3. Once the contents of the **Advanced** tab has appeared, look to the bottom and enable the **Show Develop menu in menu bar option**
4. With that option enabled, close the **Preferences** dialog.
5. Now, choose the newly enabled **Develop** option from the **Application** menu and select **Show JavaScript Console** to display the developer tools. You can also right-click and choose **Inspect Element** as well.

### JavaScript Code within the Developer Tools Console

1. Within the console, type in the following code and hit Enter:
   var myCity= "London";
2. Type the following within the console and hit Enter:
    alert("Welcome to " + myCity + "!");
 alert("Welcome to " + myCity + "!");
An alert will pop up over the browser viewport stating, "Welcome to London!". 

### Overview of JavaScript Capabilities

Without JavaScript, the web would be a fairly bland and non-interactive experience. JavaScript allows us to perform complex interactions, ferry data into your application, and display restructured values within web views. It even has the ability to build, destroy, and otherwise modify an entire HTML document.

#### Client-Side Form Validation

 This is likely one of the most common uses for JavaScript on the web: you can provide basic feedback letting the user know they've done something in error—in this case, invalid login credentials.

 ## Chapter Two

 Some of the benefits of using the web browser as a JavaScript runtime are as follows:
 * Web browsers are one of the most distributed software platforms in the world.
 * Browsers include a set of built-in developer tools for debugging and monitoring JavaScript.
 * Browsers are the absolute primary runtime for JavaScript and all others follow it.

Node.js is an example of Sever-based JavaScript

The benefits of using a server-based JavaScript runtime include the following:
* Threadless execution of code.
* Events are completely non-blocking.
* Efficiency and performance are separated from the client.
You can learn more about Node.js at <https://nodejs.org/>

### Mobile JavaScript
Ionic have become incredibly popular for those using common JavaScript-based frameworks such as Angular,React,and Vue. With many of these tools, you can also use plain vanilla JavaScript as well.

Ionic helps teams build and ship beautiful cross-platform hybrid and progressive Web Apps with ease ionicframework.com

The benefits of using a mobile-focused JavaScript runtime include the following:
* The ability to use native web technologies to write iOS and Android applications.
* Most functionality is platform-agnostic, so, often, no specific mobile operating system commands are needed.
You can learn more about Ionic at <https://ionicframework.com/>
> Note
> To access Developer Tools in Google Chrome, press the F12 key.

### The Element View 
The primary view that you'll be presented with when exploring browser developer tools for the first time will most likely be the Elements view. This view is super useful as it presents all the elements of a web document and the associated content and attributes in a very structured way. Selecting an element will display both the CSS rules and any associated event listeners.

### The Console View 
This is the developer tools view that we've had the most interaction with thus far and is likely to be the most important view when writing and testing JavaScript code. Any errors and warnings will be displayed within this view and you can also get the output on whatever data you wish as your code executes within the document. Using a JavaScript method such as console.log() will display output of all sorts of useful data for you to explore within the Console view, and you can even customize exactly the sort of data that is shown through various options associated with the view itself.

#### The Source View 
This view provides a way for us to choose to view the source code for any HTML or JavaScript files that are currently running and set breakpoints at specific lines in order to cause the runtime to pause when the breakpoint is encountered. Once paused, we can then use additional tools within the source's view to examine our code in certain ways.

### The Network View
The final developer tools view that we'll look at before moving on is the Network view. This allows you to keep tabs on everything being transferred as part of your application. HTML documents, JavaScript files, CSS files, and even invisible content such as XMLHttpRequests (XHR) and other behind the scenes data transmissions are all logged and measured here for you to inspect. If you want to see a specific type of network activity and hide all the others, there is even a handy filter along the top. One of the important aspects of the Network view that you'll want to note is that Disable cache is a tool option. Disabling the browser cache is an especially good idea if you are making many changes to externally loaded .js files while testing your program as it will prevent these files from being cached by the browser while testing.

### HTML Element Manipulation with JavaScript
If we need to address a specific HTML element to manipulate, the best way to do so is with the getElementById() JavaScript method. Of course, the element in question must contain an ID attribute for this to function as expected. Check the exercise modify.html

Once we have a reference to any element in JavaScript through the use of getElementById(), we can then get a reference to its child elements through the children.length child attribute and finally get a count of how many child elements exist by invoking the length property.

## Chapter Three
### Data Types
All the data in a program has a data type. The data types that you usually learn to use first in JavaScript are number, string, boolean, object, array, and function. The number, string, and Boolean data types represent a single value. Objects represent more complex data. Functions are for writing programs.

Some common JavaScript data types with their uses and descriptions are as follows: 
* **Number:** Any positive or negative value whole numbers, usually called integers and floating-point numbers, that can be used in mathematical operations. It is used in product prices, checkout totals, the number of likes on a post, the geometry value of Pi, and can be used as a random number.
* **String:** Any set of valid characters that cannot be, or are not intended to be, used in computational operations. They are used to comment on a discussion post which can be a company name, a street address, name of a place, an account number, a telephone number, or a postal number.
* **Boolean:** Any value representing true and false. It is used to check whether a form can be submitted, whether a password meets its required characters, whether an order balance qualifies for free shipping, and whether a button can be clicked.
* **Object:** An unordered collection of values, called properties, and code, called methods, that are intended to work together. It is used for real-world objects such as an order, stopwatch, clock, date, or microwave. They can be used for software objects such as a web page document, an HTML element on a web page, a CSS style rule, or an HTTP request.
* **Function:** A specialized object data type that represents a block of code. The code can use optional input data and optionally return data. They can be used for the conversion of data such as temperature, finding a value in a list, updating the style of an HTML element, sending data to a web server, revealing a message on the screen, or checking for valid data entry formats such as an email address.

Data is represented in programs using expressions. Expressions can be resolved to a value representing a specific data type.

Expressions can be broken down into smaller parts, as follows:
* Literal values
* Operators
* Variables
* Functions that return data
* Object properties
* Object methods that return data

#### Literal Values
Literal values are written into the programming code. Literal values are static. This means that they have the same value every time the line of code is executed, and they cannot be changed.

Here is a list of some of their types and their rules and an example of each valid and invalid case:
* **Number:** Numbers can appear in expressions. They cannot include formatting punctuation, such as currency symbols, comma separators, and spaces. Negative numbers are preceded with the minus symbol. Some valid examples include **1000000, 101, 9.876,** and **-0.1234.** Invalid examples include **1,000,000, $1000000,** and **1 000 000.**
* **String:** String data is encased in delimiters. The delimiters are either single or double quotes. Single quotes can appear within a double-quote delimited string, and double quotes can appear within a single-quote delimited string. Also, the escape character, \, is a delimiter that needs to appear as part of a string; for example, "ABC Company". Valid examples include **'ABC Company', "Earth's Moon", "She yelled \"duck\"!", 'She yelled "duck"!'**, and so on. Invalid examples include **ABC Company,** and **"She yelled "duck"!".**
* **Boolean:** There are two keywords: true and false. They are lowercase. **true** and **false** are valid examples, whereas invalid examples include **True, TRUE, FALSE,** and **False.**

Operators are used to performing arithmetic, combine text, make logical comparisons, and assign values to variables and properties. 

The operators we look at can be grouped as follows:
* Arithmetic
* String
* Grouping (bracket)
* Comparison/ Relational
* Logical
* typeof

> Note
 It's good practice to surround operators with a space. Exceptions are to not use spaces before or after the grouping operator ( ) and before the logical not ! operator.

 #### Exercise 3.01: Implementing Expressions and Operators
 1. Open the web developer console window using your web browser.
Type the items on the lines beginning with the **>** symbol. The console window will show a response on the lines beginning with the **<** symbol.
 2. Write the following code to add two literal whole numbers:
  > 200 + 200
 > \\output
 >  400
3. 
 > 100 - 10 + " Main Street"
 > \\Output. 
>  "90 Main Street"

When string is in expression JavaScript attempts to convert all other elements to a string.
4.  We can use the == operator to compare two strings with the same case:
>  "Albert Einstein" == "Albert Einstein"
> \\Output
> true 
5. Comparing two strings with a different case:
 > "Albert Einstein" == "ALBERT EINSTEIN"
> \\Output
> false 
6. If we want data type conversion to not take place before the comparison is made, we need to use the === operator, as shown here:
1. 100 === "100"
2. \\Output.  No data type conversion
3. = false

 ### Using Variables and Constants in Expressions
 Variables and constants are symbolic names that are assigned to values. The value of a variable can be changed after it is assigned. The value that's assigned to a constant cannot be changed. Variables and constants involve the following items:
 * Declaration keyword
 * Name
 * Assignment operator
 * Expressions
 * Data type

Variables and constants need to be declared before we can use them. For variables, there are two declaration keywords: var and let. For constants, the declaration keyword is const. Variables and constants require a name.

Variables do not need to be assigned a value when declared. A constant must be assigned a value when declared.

Have a look at the following examples of declaring a variable without assigning a value:
> var firstName
>
> var totalLikes
>
> var errorMessage
>
> var isSold

Variables that are not assigned a value still have a data type. That data type is named **undefined.** The **typeof** operator detects undefined data types.

Here are some examples of declaring a variable and assigning a value:
* var firstName = "Albert"
* var totalLikes = 50 
* var errorMessage = "Something terrible happened"
* var isSold = false 

### Exercise 3.02: Working with Variables Using the Web Browser Console
1. Declare a variable named firstName:
* var firstname
>  \\Value is expressed as undefined
* the result = undefined

2. Write the data type of the variable:
* typeof firstName
> check the output below
*  'undefined'
3. Assign the string value Albert to the firstName variable:
* firstName = "Albert"
* result will be **'Albert'**
4. To find out what data type our input is, use the **typeof** keyword, as shown here:
* typeof firstname
* result will be **'string'**
5. Declare a variable and assign it to a number expression:
*  var totalLikes = 50
>  Console may express value when declared but before assigned
* the result will be **undefined**
6. Write the value of totalLikes:
* totalLikes
* the result will be **50**
7. To ascertain the data type of totalLikes 
* typeof totalLikes
* the result will be **'number'**
8. Here is the code for changing the value held by **totalLikes**:
* totalLikes = totalLikes + 1
* the result will be **51**
9. Declare a variable and assign it to a Boolean expression:
* var isSold = false
> Console may express undefined data type when declared but before assigned.
* the result will be **undefined**
10. check the data type:
* typeof isSold
* The result will be **'boolean'**

#### Functions That Return Values
When we use a function, it is also called invoking the function. To use a function in an expression, you need to include the function name, followed by parentheses. If the function requires input, it is placed inside the parentheses as valid expressions. These are called arguments. If more than one argument is needed, they are  separated with commas.

Have a look at this example on expressing functions that do not require an argument:
* getTotal() 
* isLoggedIn()

This example shows us expressing a function that has one argument expressed as a number literal:
* getCelsiusFromFahrenheit(32)

This example shows us expressing a function that has multiple arguments using literal values:
 * getSearchResults("Pet Names", 25)
  
This example shows us expressing a function that has multiple arguments using variables:
* var amount = 100000
* var decimals = 2
* var decimalSeparator = "."
* var thousandsSeparator = ","
* formatCurrency(amount, decimals, decimalSeparator, thousandsSeparator)
> When you see a function in an expression, think of it as representing a value.

### Exercise 3.03: Using Functions in Expressions
In this exercise, we will use a predefined function and then use it in expressions. This exercise will show how you can invoke, check, and return the data type, and use functions in expressions. For the purpose of this exercise, we will use a function defined as **getDiceRoll**. Let's get started:
1. Open the **use-functions.html** document in your web browser.
2. Open the web developer, console window, using your web browser.
> The web page has a function named getDiceRoll. It returns the value of one rolled dice. It has one argument. The argument allows you to supply the number of dice to roll. Type the items on the lines beginning with the > symbol. The console window will show a response on the lines beginning with the <· symbol.
3. Express the data type. Note that a function name without parentheses is used:
* typeof getDiceRoll
> Note. Expressed as a function type. It also assures us that there is a function.
* the result will be **'function'**
4. Express the return value data type. Note that a function name with parentheses is used:
* typeof getDiceRoll()
* The result will be **'number'**
> Note: Function return value is a number. We do not see the actual value.
5. Invoke the function using the following code:
* getDiceRoll()
* Your value will be 1 to 6. Repeat a few times.
6. Invoke the function in a math expression:
* 100 * getDiceRoll()
* Your value will be 100 to 600 Repeat a few times.
7. Invoke the function in a comparison expression:
* getDiceRoll() == 4
* You may need to repeat a few times to get a true result.
8. Invoke and supply the argument for the number of dice to roll as 2:
* getDiceRoll(2) <!-- That is we are rolling two dice -->
* You will receive values from 2 to 12.

### The Object Data Type
There are JavaScript objects that have been ready-made for us to use and you, as a programmer, will create objects. In either case, JavaScript objects are composed of **properties** and **methods**:
**Property**: A value that has an assigned named. Together, they are often called a name/value pair.  Values can be any type, that is, data, a number, a string, a Boolean, or an object. Property values can be changed dynamically.
**Method**: A function that performs an action.

#### Ready-Made Objects
JavaScript has ready-made objects that we can use to help us begin to learn how to program. There are many useful objects built into JavaScript. Web browsers provide a collection of objects called the Document Object Model (DOM). 

Some examples of ready-made objects are as follows:
* **window** is an object in DOM. It has access to the web browser's open window. Often considered a top-level DOM object containing other web browser-created objects as its properties, it has methods for setting timer events and printing.
* **console** is an object in DOM. It provides the ability to output to the web browser console window. It is also a property of the window object.
* **document** is an object in DOM. It has access to a web page's HTML elements, styles, and content. It is also a property of the window object.
* **location** is an object in DOM. It has information about the current URL. It is a property of the window object.
* **Math** is a built-in object. It consists of math constants such as Pi, and functions such as rounding.
* **Date** is a built-in object. It provides calendar date and time operations.

### Exercise 3.04: Working with Ready-Made Objects
In this exercise, we will experiment with the properties and methods of ready-made objects that are available to JavaScript in the web browser. We will use the random, round, ceil, and floor methods to invoke a math object from a pre-defined object.
1. Open the objects-ready-made.html document in your web browser.
2. Open the web developer console window using your web browser.
3. Display the document object title property:
* document.title
* The result will be: **'Javascript Data and Expression Exercise | Packt Publishing'**
4. Now, display the document object **doctype** property:
* document.doctype
* The result will be: **<!doctype html>**
5. Display the document object lastModified property:
* document.lastModified
* The result will be: **'09/11/2024 13:49:25'**
> Your output may have a different time and date value.
6. Declare a variable and assign it to the **HTMLElement** object variable using the document object **getElementById** method:
* var pageHeadEle = document.getElementById('page-heading')
* The result will be: undefined
> Console may express undefined data type when declared but before assigned. 
7. Display the **pageHeadEleHTMLElement** object:
* pageHeadEle
* The result will be:
 <div id="page-heading" class="heading-section"><h1 class="center-text">JavaScript Data and Expression Practice</h1></div>

8. Write the **pageHeadEle object innerHTML** property:
* pageHeadEle.innerHTML
* The output is: **<h1 class="center-text">Javascript Data and Expression Exercises</h1>**
9. Now, let's look at the JavaScript built-in **Math** object. Write the Math object PI property:
* Math.PI
* The output will be: **3.141592653589793**
10. Invoke the **random** method for the Math object: 
* Math.random()
* the output is: **0.08285492755857815**
* Math.random()
* the output is: **0.14433372727085447**
> The **Math.random()** method returns a random number from the range **0** and **1**, both inclusive. It returns a different value with every call.
11. Use the Math object's round method:
* Math.round(10.5)
* output is: **11**
* Math.round(10.4)
* output is: **10**
> The **Math.round()** method returns the number after rounding it off to its nearest integer. 
12. Use the Math object's ceil method:
* Math.ceil(10.5)
* output is: **11**
* Math.ceil(10.4)
* output is: **11**
>The **Match.ceil()** method returns the next smallest integer value that is greater than, or equal to, the given argument.

The **Math.floor()** method returns the previous largest integer value that is less than, or equal to, the given argument.
*  Math.floor(10.8)
* output is: **10**
13. This is the expression we use to get a random dice value. The floor method argument is an expression, that is, **Math.random() * 6**. Its result is added to **1**:
* Math.floor(Math.random() * 6) + 1
* the out will be between 1 to 6. after multiple trials

### Self Made Objects
You often have to create objects when developing real-world applications. They help you organize a set of data and functions that work together. Think about what properties and methods you may use for a stopwatch object.

You can see that we named the properties and methods as follows:
* **elapsedTime** is a property with a data type number. It displays the seconds that have elapsed since timing started.
* **resultsHistory** is a property data type object. It displays a list of previous timings.
* **isTiming** is a property data type Boolean. It displays the state of its timing.
* **isPaused** is a property data type Boolean. It displays the state if paused. 
* **start** is a method data type function. It starts timing and sets **elapsedTime** to **0**.
* **pause** is a method data type function. It pauses the timing.
* **resume** is a method data type function. It resumes the timing.
* **stop** is a method data type function. It stops timing and adds the result to 
**resultsHistory**

###Object Dot Notation
To reference object properties and methods, you use dot notation. This is the object name, followed by a period, and then the name of the property or method. Let's use the **stopWatch** object as an example:
* stopWatch.elapsedTime
* stopWatch.start()
* stopWatch.start()
* stopWatch.stop()
> Methods require parentheses after the name. If the method requires data input, the data is placed inside the parentheses.

### The Array Object
Arrays are objects that represent a list of values. Each item in the list is called an element. An array literal is a comma-separated list of expressions enclosed in square brackets, like so:
>  ["Saab", "Ford", "BMW", "GM"]
Elements in arrays can be different data types. Often, all the elements are the same data type:
> ["Milk", false, 123, document, "Gold", -.9876] **check page 125 for more details**

**Check page 125 for array objects with useful properties and methods**

### Using the Console Object
The **console** object has a method called **log** that we can use to test expressions in a JavaScript program. It takes an unlimited number of expressions separated by commas. All the expressions we enter into the console window would work with the **console.log** method. It evaluates the expressions and returns their results in the console. Multiple expressions are separated by a space.

The syntax of **console.log**: console.log(expression 1[, expression 2][, expression n])

Here are some examples of the console.log method:
* console.log("Odd number count started!");
* console.log("Iteration:", i);
*  console.log("Number:", number);
*  console.log(oddsCount + " odd numbers found!");
*   console.log(document);
**Go to page 126 for Syntax**

Commenting in JavaScript page 128

### Conditional and Loop Flow
Statements in JavaScript are processed sequentially in the order they're loaded. That order can be changed with conditional and loop code statements. 

The different parts of a control statement are as follows:

* Code blocks: These are statements that are placed between an open and close curly bracket. 
* Conditional flow statements, such as **if...else, switch, try catch finally**
* Loop statements, such as **for, do...while, while, for...in, and for...of**
* Other control statements, such as **labeled, break,** and **continue**

**Conditional Statements** This use logic expressions to choose from among a set of statements to process.

**if** Statement: Code in an **if** statement is processed if the expression evaluates to true and is skipped if the expression evaluates to false. **Page 130 for syntax of the ***if*** statement**

### Exercise 3.05: Writing an if statement
 In this exercise, you will use the if statement to test for an even number between 1 and 6 and test the results in your web browser console window. Let's get started:
 1. Open the if-statement.html document in your web browser.
 2. Open the web developer console window using your web browser
 3. Open the if-statement.js document in your code editor, replace all of its content with the following code, and then save it:
* var diceValue = Math.floor(Math.random() * 6) + 1;
* console.log("Dice value:", diceValue);
* if(diceValue % 2 != 0){
* console.log("Is an odd number.");
* }
4. The **Math.random()** function randomly creates a whole number from 1 to 6 and displays it in the console. Here, the **if** statement states that if the remainder of the number, divided by two, is not zero, that is, **diceValue % 2 != 0**, then the **if** expression is true and the **console.log()** message is displayed in the console.
5. Reload the **if-statement.html** web page in your web browser with the console window open. Repeat until you see a version of the two examples:
>Example of output if the number is odd.
* Dice value: 3
*  Is an odd number.

> Example of output if the number is even.
* Dice value: 4

6. Edit the **if-statement.js** document using bolded lines and then save it:
> var diceValue = Math.floor(Math.random() * 10) + 1;
>
> console.log("Dice value:", diceValue);
>
> console.log("Is an odd number.");

***Because there is only one line of code in the if statement, the block brackets are not required.***

 Reload the if-statement.html web page in your web browser with the console window open. You should expect the same results.

7. Edit the **if-statement.js** document and add the highlighted line to console.log() and save it:
> var diceValue = Math.floor(Math.random() * 6) + 1;
>
> console.log("Dice value:", diceValue);
>
>  if(diceValue % 2 != 0)
>
> console.log("Is an odd number.");
>
> console.log('"You have to be odd to be number one", Dr. Seuss');

Reload the if-statement.html web page in your web browser with the console window open:
> Example of output if the number is odd.
>
> Dice value: 3
>
>  Is an odd number.
>
>  "You have to be odd to be number one", Dr. Seuss

> Example of output if the number is even.
>
> Dice value: 2
>
> "You have to be odd to be number one", Dr. Seuss

The Dr. Seuss quote is shown regardless of whether the number is even or odd.

####  if Statement and else Statement
You can combine an **if** statement with an **else** statement. If the expression evaluates to **true**, the code in the **if** statement is processed and the code in the **else** statement is skipped. If the expression is **false**, the code in the **if** statement is skipped and the code in the **else** statement is processed.

### Exercise 3.06: Writing an if...else Statement
In this exercise, a random number is being used for a coin toss. A random value equal to .5 or greater is heads and less than .5 is tails. We will assume that multiple statement lines are required for each case. Let's get started:

1. Open the if-else-statements.html document in your web browser.
2. Open the web developer console window using your web browser.
3. Open the **if-else-statements.js** document in your code editor, replace all of its content with the following code, and then save it:
>  var tossValue = Math.random();
>
> console.log("Random toss value:", tossValue);
>
> if(tossValue>= .5){
>
> console.log("Heads");
>
> }

The **tossValue** variable is a value from 0 to 1, not including 1. For now, just an **else** statement is used for a head toss.

4. Reload the if-else-statements.html web page in your web browser with the console window open. Repeat until you see a version of the two examples:
>  //Example of output if the number is .5 or greater.
>
>  Random toss value: 0.8210720135035767
>
> Heads

>  //Example of output if the number is less than .5.
>
> Random toss value: 0.4565522878478414
>
> //random()gives out a different value each time. The numbers that you obtain are likely to be different to the ones presented here.

5. Edit the if-else-statements.js document, add the following bolded code, and then save it:
> if(tossValue>= .5){
>
> console.log("Heads");
>
> }else{
>
> console.log("Tails");
>
> }

***Consider how an if statement may handle toggling a like icon on the screen.***

###  if Statements with Multiple else...if Statements
You can have one or more **else...if statements** in addition to the **if** statement. The **if** statement and each **else...if** statement has its own expression. If the code in the 
irst statement has an expression evaluated as **true**, it is processed and the code in all the other statements is skipped. If none of the expressions evaluate to **true**, all the code statements are skipped. The syntax is in ***page 136***

###  if Statement, Multiple else...if statements, and the else Statement
The syntax is:

>  if(boolean expression){ 
>
> //Statement
>
> //Statement
>
> //Statement
>
> }else if(boolean expression){
>
> //Statement
>
> //Statement
>
> //Statement
>
> }else if(boolean expression){
>
> //Statement
>
> //Statement
>
>  }else{
>
> //Statement
>
> }

###  Exercise 3.07: Writing an if Statement with Multiple if else Statements and the else Statement
 In this exercise, we will build a simple game that generates four random game numbers from 1 to 21 inclusive. One is the player's score, one is the target score, one is a lucky score, and the last is an unlucky score.The player gets a wallet of 20 times the player's score. There are five possible outcomes, with each assigning different wins or losses to the player's wallet:
 * The player's score matches the lucky score, and the lucky score and the unlucky score are different. The wallet is increased by the lucky value plus the player's score times **10**.
 * The player's score equals the unlucky score, and the lucky score and the unlucky score are different. The wallet is reduced to zero.
 * The player's score equals the target score. The wallet is increased by the difference between **21** and the target score times **10.**
 * The player's score beats the target score. The wallet is increased by the difference between the player's score and the target score times **10.**
 * The target score beats the player's score. The wallet is decreased by the difference between the target score and the player's score times **10.**

The steps for completion are as follows:

1. Open the **if-else-if-else-statements.html** document in your web browser.
2. Open the web developer **console window** using your web browser.
3. Open the **if-else-if-else-statements.js** document in your code editor, replace all of its content with the following code, and then save it:
> var target = Math.floor(Math.random() * 21) + 1;
>
> var player = Math.floor(Math.random() * 21) + 1;
>
> console.log("Target score:", target);
>
> console.log("Player score:", player);
>
> if (player >= target){
>
> console.log("Player wins: beats target by " + (player - target));
>
> }else{
>
> console.log("Player loses: misses target by " + (target - player));
>
>  }

We will start by matching the target or exceeding it using the **if** statement block, **if (player >= target).** The **else** statement block stating "Player loses: misses target by" covers being below the target.

4. Reload the **if-else-if-else-statements.html** web page in your web browser with the console window open. Repeat until you see a version for each of these three examples.

 An example of the player's score exceeding the target is as follows:
 
 >  Target score: 5
 > 
 > Player score: 13
 > 
 > Player wins: beats target by 8

 The following is an example of the player's score matching the target. In this case, the message is not supporting the logic:

 > Target score: 14
 >
 > Player score: 14
 >
 >  Player wins: beats target by 0

 An example of the target exceeding the player's score is as follows:

 >  Target score: 19
 >
 > Player score: 1
 >
 > Player loses: misses target by 18

 Now, we can add a code some handle the player matching the target.

5. Edit the **if-else-if-else-statements.js** document, add the following bolded code, 
and then remove the strikethrough code and save it:

> var target = Math.floor(Math.random() * 21) + 1;
>
>  var player = Math.floor(Math.random() * 21) + 1;
>
> console.log("Target score:", target);
>
> console.log("Player score:", player);
>
> if (player == target){
>
> console.log("Player wins: ties target " + target);
>
> }else if (player > target){
>
> console.log("Player wins: beats target by " + (player - target));
>
> }else{
>
> console.log("Player loses: misses target by " + (target - player));
> }

6. Reload the **if-else-if-else-statements.html** web page in your web browser with the console window open. Repeat this until you see a version for each of these three examples.

 An example of a player's score exceeding the target is as follows:
 >  Target score: 7
 > 
 > Player score: 14
 >
 > Player wins: beats target by 7

An example of a player matching the target. In this case, the message is not supporting the logic:
> Target score: 3
>
> Player score: 3
>
> Player wins: ties target 3

An example of the target exceeding the player's score is as follows:
> Target score: 10
>
> Player score: 5
>
>  Player loses: misses target by 5

7. Edit the if-else-if-else-statements.js document, update it using the following code, and then save it.

A variable for the lucky and unlucky number are added and are output to the console so that we can observe them:
> var target = Math.floor(Math.random() * 21) + 1;
>
> var player = Math.floor(Math.random() * 21) + 1;
>
> var lucky = Math.floor(Math.random() * 21) + 1;
>
> var unlucky = Math.floor(Math.random() * 21) + 1;
>
> console.log("Target score:", target);
>
> console.log("Player score:", player);
>
> console.log("Lucky score:", lucky);
>
> console.log("Unlucky score:", unlucky);
>
>  if (lucky != unlucky && player == lucky){
> 
>  console.log("Player wins: matches lucky score.");
> 
>  }else if (lucky != unlucky && player == unlucky){
> 
>  console.log("Player loses: matches unlucky score.");
> 
>   }else (player == target) {
>
> console.log("Player wins: ties target " + target);
> 
> }

Reload the **if-else-if-else-statements.html** web page in your web browser with the console window open. Repeat this until you see a version for each of these two examples.

>  Target score: 7
>
> Player score: 14
>
>  Lucky score: 16
>
> Unlucky score: 20
>
> Player wins: matches lucky score

The following is an example of a player matching the unlucky number, but not the lucky number:
>  Target score: 4
>
> Player score: 9
>
> Lucky score: 3
>
> Unlucky score: 9
>
> Player loses: matches unlucky score.

* Check page **144** to page **146** for the continuation of this exercise.

### The break Statement
The **break** statement is used within blocks for **loop** statements and the **switch** statements. When the **break** statement is encountered inside **loop** statement and **switch** statement blocks, program flow continues on the next line following the block. The syntax is as follows:

1. break
2. break label

The second syntax form is required when it's used within a labeled statement block. 

####  switch Statement (page 147)
The **switch** statement defines a block of code divided up by **case** statements and an optional **default** statement. The **case** statements are followed by a possible value for the **switch** statement expression and then a colon (:)

###  Exercise 3.08: Writing a switch Statement and Testing It
We are going to use the **switch** statement by simulating a game where the player can move their playing pieces using their keyboard. They can move left with the **A** key, right with the **S** key, up with the **W** key, and down with the **Z** key. To simulate a random selection of the keys, in either uppercase or lowercase, from the **keyNames** string, a variable will be used. Let's get started: 

1. Open the switch-statement.html document in your web browser. 
2. Open the web developer console window using your web browser.
3. Open the **switch-statement.js** document in your code editor, replace all of its content with the following code, and then save it:

> var keyNames = "WASDwasd";
>
>  var keyName = keyNames.charAt(Math.floor(Math.random() * keyNames.length));
>
> console.log("keyName:", keyName);

The **Math.floor(Math.random() * keys.length)** expression is selecting a number from **0** to **7** that is then used by **charAt** to select the character from the **keyNames**string variable.

4. Run a few tests by reloading the **switch-statement.html** web page in your web browser with the console window open. Here are some examples of the console output:

* keyName: D
* keyName: a

5. Edit the **switch-statement.js** document so that it includes the following lines and then save it. The **switch** statement expression converts the character into lowercase so that each case statement can check for one value. Here, we are checking whether the case value is equal to the switch term:

> switch (keyName.toLowerCase()){  
>
>  case "a":
>
> console.log("move left"); //This block will execute when break; // keyName is a
>
> case "d":
>
> console.log("move right");//This block will execute when break; // keyName is d
>
> case "w":
>
> console.log("move up");//This block will execute when break; // keyName is w
>
> case "s":
>
> console.log("move down");//This block will execute when break; // keyName is s
> 
> }

The **switch** statement uses one expression and then determines the lines of code to process based on matching the result with the **case** statements. It is important to note that without a **break** statement,all the code to the end of the **switch**statement is processed once one **case** statement matches the expression value.

6. Reload the **switch-statement.html** web page in your web browser with the console window open. (page 150)

Let's use the **IJKM** keys to perform the same tasks. We'll use the **I** key for up, the **J** 
key for left, the **K** key for right, and the **M** key for down.

Edit the **switch-statement.js document**, include the following lines and save it. 

> var keyNames = "WASDwasdIJKMijkm"; 

 Next, add the case statements for each; and it should be inputted after the **switch (keyName.toLowerCase()){**

> case "a":
> 
> case "j":
> 
> console.log("move left");
> 
>  break;
>
>  case "d":
>
> case "k":
>
> console.log("move right");
>
> break;
>
> case "w":
>
> case "i":
>
> console.log("move up");
>
>  break;
>
>  case "s":
>
> case "m":
>
> console.log("move down");
>
> break;
>
> }

When **case** statements are not followed by a **break**, the next case statement's code is also processed.

7. Reload the switch-statement.html web page in your web browser with the console window open. 
8. Edit the **switch-statement.js** document, include the following lines, and then save it. First, let's add a few test characters:

> var keyNames = "WASDwasdIJKMijkmRTXPrtxp";

Next, let's add the default statement; it will be added after the **break;**

> default:
>
> console.log("invalid key");
>
>  break;

9. Reload the **switch-statement.html** web page in your web browser with the console window open. Repeat this until you see a result indicating an invalid key.

###  Loop Statements
Loop code blocks are also called iterative blocks. They are designed to continue processing the code in their blocks until the **loop** statement expression becomes false. Iteration is a term that's used to indicate one time through the loop.

***Note: A loop that does not terminate is called an infinite loop. A web browser may display a dialog with the option to terminate long-running loops.***

### for Statement (page 153/116)
The **for** statement repeats the code until the repeat expression becomes **false**.

| **Operator** | **Description** | **Examples**  | **Results** |
|--------------|-----------------|---------------|-------------|
| ++           | Increment       | var i=1 i++   | i=1 i=2     |
| --           | Decrement       | var i=10 i--  | i=10 i=9    |
| +=           | Addition        | var i=1 i+=4  | i=1 i=5     |
| -=           | Subtraction     | var i=10 i-=4 | i=10 i=6    |
| *=           | Multiplication  | var i=2 i*=5  | i=2 i=10    |
| /=           | Division        | var i=9 i/=3  | i=9 i=3     |















