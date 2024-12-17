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

| **Operator** | **Description** | **Examples** | **Results** |
|--------------|-----------------|--------------|-------------|
| **           | Exponentiation  | 2**3         | 8           |
| /            | Division        | 200/5        | 40          |
| /            | Division        | 12/5         | 2.4         |
| %            | Reminder        | 200/5        | 0           |
| %            | Reminder        | 12/5         | 2           |
| *            | Multiplication  | 12.5*10      | 125         |
| +            | Addition        | 100+100      | 200         |
| -            | Subtraction     | 500-200      | 300         |


| **Operator** | **Description**                              | **Examples** | **Results** |
|--------------|----------------------------------------------|--------------|-------------|
| ==           | Equality/Equal to                            | 1==1         | true        |
| ==           | Equality/Equal to                            | 1==2         | false       |
| ==           | Equality/Equal to                            | 1=='1'       | true        |
| ===          | Equality before any atomic data conversion   | 1===1        | true        |
| ===          | Equality before any atomic data conversion   | 1==='1'      | false       |
| !=           | Inequality                                   | 1!=1         | false       |
| !=           | Inequality                                   | 1!='2'       | true        |
| !=           | Inequality                                   | 1!=2         | true        |
| !==          | Inequality before any atomic data conversion | 1!=='2' or 2 | true        |
| >            | Greater than                                 | 105>100      | true        |
| <            | Less than                                    | 50<80        | true        |
| >=           | Greater than or  equals                      | 100>=90      | true        |
| <=           | Less than or equals                          | 100<=104     | true        |


> Note
 It's good practice to surround operators with a space. Exceptions are to not use spaces before or after the grouping operator ( ) and before the logical not ! operator.

 #### Exercise 3.01: Implementing Expressions and Operators
 1. Open the web developer console window using your web browser.
Type the items on the lines beginning with the **>** symbol. The console window will show a response on the lines beginning with the **<** symbol.
 1. Write the following code to add two literal whole numbers:
  > 200 + 200
 > \\output
 >  400
1. 
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

###  Exercise 3.09: Writing a for Loop and Testing It
This exercise demonstrates using the **for** statement to create an increasing counter and decreasing counter.

1. Open the **for-statement.js** document in your code editor, replace all of its content with the following code, and then save it:

> for(var i = 1; i<= 5; i++){
>
> console.log(i);
>
>  }

### do...while Statement
The **do...while** statement is a loop that executes code until the repeat expression value becomes false. The repeat expression is evaluated after all the statements have been processed, resulting in the guarantee that they are processed once. 

### Exercise 3.10: Writing a do...while Loop and Testing It
In this exercise, you will use the **do…while** loop to simulate iterating the roll of two dice until they have the same value. 

1. Open the **do-while-statements.js** document in your code editor, replace all of its content with the following code, and then save it:

1.  do{
2.  var die1 = Math.floor(Math.random() * 6) + 1;
3.  var die2 = Math.floor(Math.random() * 6) + 1;
4. console.log("Die 1:", die1, "Die 2:", die2);
5.  }while(die1 != die2);

The second and third lines each compute a random number from 1 to 6 and store it in a variable. Those variables are displayed on the fourth line. These lines are always executed once. The while condition is true if the values of the die1 and die2 variables are not equal. If the values are equal, the expression is false and the loop repeats. If the values are not equal, any statements that follow the do…while loop are processed.

2. Edit the do-while-statements.js document so that it includes the following bolded lines and then save it:

1. let iterations = 0;
2. do{
3. iterations++;
4. var die1 = Math.floor(Math.random() * 6) + 1;
5. var die2 = Math.floor(Math.random() * 6) + 1;
6. console.log("Die 1:", die1, "Die 2:", die2);
7. }
8. while(die1 != die2);
9. console.log("The matched value is: ", die1);
10. console.log("Number of iterations: ", iterations);

 The first line, **let iterations**, is declaring a variable named iterations and assigning it to **0**. Then in the **do…while loop**, the iterations variable, **iterations++**, is incremented by **1**. After the loop,the matched value and the iterations are displayed.

 ### while Statement
  The **while** statement is a loop that executes code if the repeat expression is **true/false**. The repeat expression is evaluated before any code is executed, so there is the possibility that no code is processed if it is **false** the first time round.

  ###  Exercise 3.11: Writing a while Loop and Testing It
  In this exercise, we will use the while loop to simulate how many dice rolls it takes to roll an even number. Let's get started:

  1. Open the while-statement.js document in your code editor, replace all of its content with the following code, and then save it:

* let iterations = 0;
* while (iterations <10){
* console.log("iterations:", iterations);
* iterations ++;
*  }

This is just the initial shell for a while loop that repeats 10 times. The while loop's repeat expression is true if the iterations variable is below the value of 10. The first time the expression is evaluated, the iterations variable is 0. Inside the while loop, the iterations variable is incremented by 1 on the first line and will increase from 0 to 9 on each iteration of the loop.

2. Edit the while-statement.js document using the following:

* let die;
*  while (iterations <10){
*   die = Math.floor(Math.random() * 6) + 1;
*   if (die % 2 == 0){
*    break;
*     }
*     iterations ++;
*      }
*      console.log("Number of iterations: ", iterations + 1);
*      console.log("Die value: ", die);

This adds an if block to test for an even number of the dice roll. If true, the break statement terminates the while loop and the line following it is processed. The two lines following the while loop display how many iterations occurred and the value of the dice roll for that iteration.

The while-loop use a Boolean expression to determine whether any iterations of the code it contains occurred. In this case, if the iterations variable was greater than 10, no iterations would have occurred.

### for...in Statement
The **for...in** statement allows us to iterate over an object data type. The variable in the **for** expression holds one of the names of the name-value pairs of the object, which are the names of the properties and methods of the object. The syntax is as follows:
*  for (variable in object){
*  Statement
*  Statement
*   }
*   for (variable in object)
*   Single Statement

### Exercise 3.12: Writing a for...in Loop and Testing It
This exercise applies the for...in loop to the ready-made location object and to a programmer-created object. You can access object names and values by using them. 

1. Open the for-in-statement.js document in your code editor, replace all of its content with the following code, and then save it:

* for (let name in location) {
*  console.log(name);
*   };

This iterates the web browser-created location object.

The following output shows the names of all the **location** object's properties and methods.

* replace
* href
* ancestorOrigins
* origin
* protocol
* host
* hostname
* port
* pathname
* search
* hash
* assign
* reload
* toString

2. Edit the for-in-statement.js document, replace it with the following code, and then save it:

* var stopWatch = {
* elapsedTime: 0,
*  resultsHistory: [],
*  isTiming: true,
*  isPaused: true,
*  start: function(){console.log("start");},
*  pause: function(){console.log("pause");},
*  resume: function(){console.log("resume");},
*  stop: function(){console.log("stop");}
*   };
*   for (const name in stopWatch) {
*    console.log(name, ":", stopWatch[name]);
*     };


###  continue Statement
The **continue** statement stops execution inside a loop or a labeled loop for the current iteration and starts the execution of the next loop iteration. The loop statements then determine whether another iteration should occur.

### Labeled Statement
The **Labeled** statement is used to create loop flows and conditional flows. It names either **block** statements or **loop** statements. 

When a loop statement is named, the statements are processed until a break statement or continue statement is encountered inside the block that references the label. 

When a break statement is encountered, the program flow continues on the line after the labeled statement block referenced by the break statement. If a continue statement is encountered, the program flow continues on the first line of the block referenced by the continue statement. A continue statement requires the labeled statement to be a loop. Both break statements and continue statements must appear within the labeled statement block that they reference. They cannot appear outside the labeled statement block that they reference. They can appear in nested labeled blocks and reference outer labeled blocks. Labeled statements are less commonly used because they are prone to creating confusing or difficult to follow program flow.

### Writing and Invoking Functions
Functions are the basic building blocks when it comes to writing JavaScript programs. A function is one or more statements that can optionally receive data input and provide data output. The statements in a function are not used until the function is invoked. Invoking a function is also known as calling the function.

#### Function Declaration
You can define a function as a statement. This is called a function definition or declaration. The syntax is as follows:
* function name(optional parameter list) {
*  //Statements
*  //Optional return statement
*  }

It starts a line of code with the function keyword. It is followed by a name. The name is how the function will appear in other code. The list of comma-separated parameters are names for the input values to a function. Parameters are essentially variables within the function. They are enclosed in parentheses. The block statement then contains the code. Once a function is declared, it can be invoked either on a line of code by itself or within an expression. In the case of its use in an expression, the function typically returns data.

When a JavaScript function is declared as a statement, it can be invoked by statements that appear before it. This is called **hoisting.**

* Invoking a function requires to append parentheses around the function's name

#### Function Expression
In this variation, you can define a function as part of an expression. There is no name for the function.However, because a function is a data type, it can be assigned to a variable. The variable can then be used to invoke the function. 

Here is an example of defining and invoking a function expression.

This example shows the function as part of an assignment expression. The right-hand side of the assignment is the function without a name. The left-hand side is the variable:

*  var getDiceValue = function(){
*  return Math.floor(Math.random() * 6) + 1;
*  }

 In this case, the variable can be used to invoke the function:

 var rollValue = getDiceValue() + getDiceValue();

 ### Arrow Function Expression
Arrow functions were introduced in ES6. They are defined similarly in an expression, such as when defining function expressions. They offer syntactically compact alternatives over defining a function expression. There is nothing different in how they are invoked. The => symbol is the telltale sign of an arrow function being defined. Also, the function keyword is not used. The concise variation, without a function body, can return an expression with or without a return statement. This differs from a function expression, which requires the return statement to return a value. The syntax is as follows:

*  (optional parameter list) => {
*  //Statements
*   //Optional return statement
*    }
*    (optional parameter list) => //Expression or return statement

Parameter parentheses are optional when a single parameter is named:

* parameter => {
*  //Statements
*  //Optional return statement
*  }
*  parameter => //Expression or return statement

Parentheses are required if there is no parameter:

* () => {
* //Statements
*  //Optional return statement
*   }
*   () =>//Expression or return statement

**JavaScript arrow functions cannot be invoked by statements that appear before it.**

### Reacting to User Input Events and Updating the DOM
JavaScript is used to interact with the DOM. This entails responding to DOM-generated events such as a user clicking a button. It also entails updating content and HTML elements, such as displaying a notification message.

### The DOM HTML Element Object
The HTML elements are represented as objects. Since they are objects, there are methods and properties we can use for them. These properties and methods are 
inherited from a hierarchy of DOM objects that are provided by the web browser, starting with an object called Node. For example, the ol element shares methods and properties from the following hierarchy of DOM objects:

> Node⇒Element⇒HTMLElement⇒HTMLOListElement

The following are a few of the properties and methods that are inherited from a hierarchy of DOM elements above it:

* **innerHTML:** With the source element, this is the HTML and content contained in an element.
* **innerText:** With the source HTMLElement, this is the rendered text of an element.
* **addEventListener(…):** With the source element event target, this is used to register a function to respond to events such as a user clicking on the element.
* **appendChild(…):** With the source node, this adds a node to a parent node; for example, to add an li element to the end of an ol element, or to add a p element to the end of a div element.

### Getting Access to Elements in the DOM
 The following are **document** objects that contain methods that we can use to get one or more **HTMLElement** objects from the DOM:

 * **getElementById(element-id):** The element ID is the ID attribute of the element. Returned as an HTMLElement object.
 * **getElementsByTagName(element-name):** The element name is the static name of HTML elements such as body, div, p, footer, ol, and ul. This returns a NodeList object. A NodeList object is similar to an array of objects.
 * **getElementsByClassName(css-class-name):** The css class name is the class attribute of the elements. This returns a NodeList object. A NodeList object is similar to an array of objects.
 * **querySelector(selectors):** The selectors are like the selectors that are used in CSS. This returns an HTMLElement object for the first element that's matched.
 * **querySelectorAll(selectors):** The selectors are like the selectors that are used in CSS. This returns a NodeList object. A NodeList object is similar to an array of objects for each element that's matched.
 * **createElement(tag name):** This creates an HTMLElement object for the HTML tag name that's supplied.
 * **createTextNode(data):** This creates a Text object that can be placed inside an HTML element, for example, inside an h1 or a p element. The data argument is a string.

The following is an example of the **document** object's **getElementById** method being used to access a DOM element. This creates an object from an element DOM that has the id attribute of **user-id:**

> let userIdEle = getElementById("user-id");

This is an example of the document object's getElementByTagName method being used to access DOM elements. This creates a collection of objects representing all the div elements in the document. Further steps are needed to access each element, such as a loop:

>  let divEles = getElementByTagName("div");

This is an example of the document object's getElementByClassName method being used to access DOM elements. This creates a collection of objects representing all the elements that use the notice class in the document. Further steps are needed to access each element, such as a loop:

> let noticeEles = getElementByClassName("notice");

### Creating Elements and Content in the DOM
You may want JavaScript to add HTML elements and content to a web page. This is done by updating the DOM. The document object has two methods that are useful for this:

* **createElement(tag name):** Creates an HTMLElement object for the HTML tag name that's supplied.
* **createTextNode(data):** Creates a text object that can be placed inside an HTML element, for example, inside an h1 or a p element. The data argument is a string.

The following is an example of the document object's createElement method being used to create an li element:

>  let liEle = document.createElement("li");

The following is an example of the document object's createTextNode method being used to create a Milk Moon element:

>  let elementTextNode = document.createTextNode("Milk Moon");

Putting this all together, we can append elements and text nodes to the DOM. Consider the following HTML list of names for the November full moons:

 * <ul>
*  <li>Flower Moon</li>
*  <li>Planting Moon</li>
*  /ul>

Suppose we want to append another li element to the Milk Moon. To do that, we use the document object's createElement method to create an li element:

> let liEle = document.createElement("li");

The createElement method returns an HTMLElement object. It provides the appendChild method, which we can use in this instance. For the appendChild method argument, the document object's createTextNode method can supply the required text node:

> liEle.appendChild(document.createTextNode("Milk Moon"));

 The resulting DOM is as follows:

*  <ul>
* <li>Flower Moon</li>
* <li>Planting Moon</li>
* <li>Milk Moon</li>
* </ul>

Let's take this a bit further and assume that we have a list of full moon names in an array:

* let mayMoons = [
* "Flower Moon",
* "Planting Moon",
* "Milk Moon"
* ];

Now, we want to use the array to populate a ul element that has the id attribute of full-moons: 

* <ul id ="full-moons">
* <li>Grass Moon</li>
* <li>Egg Moon</li>
* <li>Pink Moon</li>
* </ul>

First, you may want to remove the existing li elements from the ul element. You can do that by using the document.getElementById method and the innerHTML property of the element:

* let moonsEle = document.getElementById("full-moons");
* moonsEle.innerHTML = "";

 Next, we can loop through the array, appending li elements to the moon names:

*  for (let i= 0; i<= mayMoons.length - 1; i++){
* let liEle = document.createElement("li");
* liEle.appendChild(document.createTextNode(mayMoons.length[i]));
* listEle.appendChild(liEle);
* }

The resulting DOM is as follows:

* <ul id ="full-moons">
* li>Flower Moon</li>
* <li>Planting Moon</li>
* <li>Milk Moon</li>
* </ul>

### DOM Events
Events are messages that you can provide to code so that it can handle it; for example, the user clicking a button on an HTML page. The document model objects use the addEventListener method to add your code so that it is processed when the event occurs. The syntax is as follows:

> target.addEventListener(event-type, listener)

The event type parameter is a predefined name for the event. For example, click is the name for a mouse click event. The listener is an object that has the ability to "listen" to events. Functions are objects that can "listen" to events. Functions that are used as event listeners have one parameter, which is an Event object.

For example, the **addEventListener** method for a click event that uses a function literal 
can be written as follows:

* helpButtonEle.addEventListener("click", function(e)){
* console.log("Something was clicked");
* }

### Exercise 3.17: Working with DOM Manipulation and Events
This exercise will accept an input value from a web page that aims to guess a number from 1 to 10. A button is used to check the input value against a random number that's generated from 1 to 10. Depending on whether there's a match, the display property of the other elements on the web page is toggled to hide or show the element. Also, the number that's generated is displayed on the page. Let's get started:

1. Open the number-guess.html document in your web browser. 
2. Edit the number-guess.js document, update it using the bolded text, and then save it.

At the top of the file, all the elements we need to access in the HTML have been assigned to a variable: 

* let resultsMsgEle = document.getElementById('results-msg');
* let matchedMsgEle = document.getElementById('match-msg');
* let noMatchMsgEle = document.getElementById('no-match-msg');
* let numberToGuessEle = document.getElementById('number-to-guess');
* let guessInputEle = document.getElementById('number-guessed');
* let testButtonEle = document.getElementById('test-button');

Next, add the DOM interface to get the value property from the input element's guessInputEle object. In case the user did not enter an integer, the parseInt JavaScript built-in function will flag that as not a number.Then, the if statement expression is true only if the number is between 1 and 10 inclusive:

* function testMatch(e){
* let numberGuessed = parseInt(guessInputEle.value);
* if(!isNaN(numberGuessed) &&numberGuessed> 0 &&numberGuessed<= 10){
* }
* }

In the if statement block, the first step is to get a random integer from 1 to 10. Then, we use an if...else statement block if the input number matches the generated number. For now, we can test this with outputs to the console window:

* if(!isNaN(numberGuessed) &&numberGuessed> 0 &&numberGuessed<= 10){
*  let numberToGuess = Math.floor(Math.random() * 10 + 1);
*  if (numberGuessed == numberToGuess){
*   console.log("MATCHED!");
*  }else{
*   console.log("NOT MATCHED!");
*  }
*  console.log("Number guessed:", numberGuessed);
*  console.log("Number to match:", numberToGuess);
* }

3. Reload the number-guess.html web page in your web browser with the console window open, enter an integer from 1 to 10, and click the Test Your Guess button a few times.

Here are two test results:

* NOT MATCHED!
* Number guessed: 1
* Number to match: 9
* MATCHED!
* Number guessed: 1
* Number to match: 1

There are two general categories of bugs: syntax and logic:

* Syntax: A syntax bug is a malformed JavaScript code.
* Logic: A logic error occurs when code that is syntactically correct does not perform as intended.

### Logic Bugs
A logic error occurs when code that is syntactically correct does not perform as intended. Logic errors often occur due to data and expressions not using or computing the correct values. When a JavaScript program encounters a logic bug, it stops executing the remaining code statements. There is often no error message to pursue. This makes logic errors more challenging to resolve and you want to use debugging 
tools to aid in their resolution.

### Debugging
Fixing bugs is called debugging. Debugging requires tools, skills, and techniques. It usually involves correcting the source code. 

Using the **console.log** method and showing the values in the console window is one tool we can use. This allows you to view values at certain points in the program to see whether they are the expected values. One of the drawbacks of this approach is that this requires you to put the **console.log** method in your source code, which ultimately needs to be removed as a best practice. Another issue is that arguments to the **console.log** methods are potentially bugs themselves. 

The other alternative is to use a debugger. The top desktop web browsers have a JavaScript debugger.

### Debuggers
To help resolve logical errors, you usually need a debugger. A debugger is a tool that lets you pause a program, follow each step, and examine the data values at those steps. Most desktop web browsers have a debugger built into its web developer view. Here is an example of the debugger for the Chrome web browser's developer tools

> Activity 3.01
>
> To shuffle a to do list

## Chapter Four:  JavaScript Libraries and Frameworks

As developers, we often rely on external software that lets us dedicate ourselves to the source code that's the most relevant to our product or business. This software does this by simplifying specific tasks and abstracting away complexity for us. Those pieces of external software are what we refer to as **frameworks** or **libraries.**

The following are some of the tasks that modern JavaScript frameworks can support us with:

* Performance rendering of complex or dynamic single-page applications (SPAs)
* Managing ongoing dataflow between the controllers and views of client-side applications
* Creating sophisticated animations
* Creating with fast and straightforward server APIs

###  Framework versus Library
Library describes an external collection of functions that perform a given task. These functions are made accessible to us as users of the library via APIs. One useful library is **lodash**, which can, for example, remove all duplicated values from an array:

* const duplicatedArray = [1,2,1,2,3];
* const uniqueArray = lodash.uniq(duplicatedArray)
* Out will be => [1,2,3]

Frameworks, on the other hand, are a particular form of library. They are reusable code frames that build the foundation of a JavaScript application. In contrast to libraries, which extend your code with functionality, a framework can stand alone and is enhanced with your source code to create an app as you like.

A popular framework is Vue.js

Another synonym you'll encounter in the JavaScript world to describe external source code is "package." One of those packages you may encounter in JS resources is Vanilla.js. We'll have a look at it in the next section.

### Vanilla.js
This specific framework follows the informal convention of including the JavaScript file extension with the name **nameOfFramework.js.** However, vanilla.js is not a framework; it's not even a library. People referring to vanilla.js are talking about plain JavaScript without any external code or tooling. The name is a running gag within the JavaScript community because some developers and non-developers think we need to use a framework for everything we build. We will discuss why this isn't the case later.

### Popular JavaScript Frameworks
We have just looked at lodash.js, a library that helps developers handle data structures; (to be used, for example, making arrays unique) and Vue.js, a framework for building modular and dynamic user interfaces. These are just two examples of quite popular and widely used JS frameworks/libraries. In addition to those, there is a vast and evergrowing number of external packages you can choose from. Each one of them is useful for solving one specialized set of problems.

A few modern and often used alternatives that support creating browser applications are, for instance, React.js, Vue.js, and Angular.js. Other libraries that help you store and manage data in your app are MobX, VueX, and Redux.

Then, there are frameworks such as Express.js or Hapi that let you create simple, easy-to-maintain, and performant REST APIs for Node.js.

Some packages make building command-line interfaces (CLIs) or desktop applications easy.

Most build and productivity tools for the JavaScript ecosystem are provided to the community as a library, too. Webpack, Parcel, and Gulp are a few of these tools.

Not all of the available libraries are equally popular or useful. Their popularity depends on a few key facts:

* Whether they fix a problem that bothers many developers
* How well their API is defined and structured
* The quality of their documentation
* The level of performance optimization
Keep these in mind when crafting a package that you want to become well known.

### Everlasting jQuery
One evergreen library that has been around for over a decade is jQuery. It touches almost every web app in one way or another and belongs in the toolkit of everybody who builds browser applications:

**jQuery** provides, but is not limited to providing, the following features:
* DOM manipulations
* Event handling
* Animated effects and transitions

### Where to Find and How to Use External Code
There are a few different approaches when it comes to including libraries in your program. Depending on those approaches, we get packages from different places.One is to copy the library's source code and to handle it as we wish. This approach is the most secure in the sense that we have all the control of the software and can customize it to fit our needs. However, by doing so, we give up compatibility and automated updates and patches. Most open-source projects host their code on GitHub or any other version control platform. Therefore, it's rather easy to access and fork the package's code. As soon as we download the source code, we can do whatever we want to get it working with our software. Possible solutions could be hosting it on our cloud distribution network (CDN) and accessing it from there or bundling it with our source code

Another approach is downloading the package from a CDN from the client at runtime. The most popular CDN to exclusively host JavaScript libraries is cdnjs.com. It hosts thousands of libraries you can include in your markup without you having to worry about where to store it or how to upgrade it

The following is an example of how you'd include Vue.js with your markup:

* <html>
* <script src="https://cdn.com/vue.js"></script>
* <script type="text/javascript">
* console.log("Vue was loaded: ", !!Vue)
* // => Vue was loaded: true
* </script>
* </html>

> Note
> If you include packages by loading them from the browser during runtime, you have to be aware of the order of the script tags. They're loaded from top to bottom. Therefore, if you switched the two script tags in the preceding example, console.log would print that there is no Vue.js loaded, even though, eventually, it will be.

The previous approach gained lots of popularity and is now by far the most common due to the development of the JavaScript ecosystem in recent years. It involves the Node.js Package Manager (npm). npm is a tool that, as its name suggests, takes care of JavaScript packages within the Node.js ecosystem. npm itself consists of three parts:

* The website npmjs.com, for hosting all the documentation and package searches
* The CLI that gets installed with Node.js
* The registry, which is where all of the modules are stored and made installable:

Using npm requires a Node.js version to be installed on your machine and any tool to bundle all your JavaScript together to make it executable in the browser.

* // in your terminal
* $ npm install <package>

All of the aforementioned methods to include libraries and frameworks with your source code are valid and have their preferred use cases. However, it's likely that you are going to use the latter the most as new projects are set up within the Node.js ecosystem, which is where modules and npm come from, naturally. Nonetheless, knowing how to use external resources without npm can come in handy when you want something much more comfortable and quicker than an entire project setup. Therefore, let's perform an exercise in which we will load a third-party library into our code

### Exercise 4.01: Using a Third-Party Library in Your Code
As we've already discovered, using external software, namely libraries and frameworks, is an extremely useful skill as it can save a lot of resources and help you build highly functional apps. In this exercise, we are going to find and utilize a library ourselves. We'll use the lodash library to create an array of unique values. Let's get started:

1. Create a new HTML file:
2. Find the CDN URL for the latest lodash version. To do so, navigate to cdnjs.com and search for lodash, and then copy the URL highlighted in the figure: (https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js)
3. To look at the lodash documentation, navigate to lodash.com. There, you can use the search bar to find the "uniq" function
4. Load the CDN URL in a script tag's src attribute. To do so, paste the URL you previously copied in step 2
5. Create another script tag and write JS code using lodash to make an array, [1,5,5,2,6,7,2,1], that contains unique values:
6. Open your HTML, including the JavaScript, in a browser and verify that you created an array with unique values inside the browser's development tools console:

**In this exercise, we used the lodash library to create an array that contains sole unique values.**

### jQuery versus Vanilla.js
Earlier, in the Everlasting jQuery section of this chapter, we had a look at jQuery and how it has an exceptional standing in the JavaScript community. To demonstrate why libraries and frameworks, but mainly jQuery, became popular, we will compare it to Vanilla.js (plain JS). 

### Manipulating the DOM
If we wanted to fade out and then remove one element in plain JavaScript, we would write verbose and less comprehensive code:

**Using Vanilla,js**
* const styles = document.querySelector('#example').style;
* styles.opacity = 1;(function fade() {
* styles.opacity -= .1;
* styles.opacity< 0
* ? styles.display = "none"
* : setTimeout(fade, 40)
* })();

**Using jQuery**
* $('#example').fadeOut();

### Making XHR Requests
A fundamental functionality of modern web pages and applications is requesting additional resources or data from remote servers. Every browser provides interfaces to execute these so-called XHR requests. Those interfaces can be used from JavaScript. As we can see in the following code examples, jQuery, compared to vanilla.js, lets us write  clean and self-explanatory code:

**Using Vanilla.js**
* const request = new XMLHttpRequest();
* request.open("POST", "/example/api", true);
* request.onreadystatechange = function() {
* if (request.readyState != 4 || request.status != 200) return;
* console.log("Successful XHR!");
* };
* request.send("example=payload");

In comparison to the preceding snippet, the code for making calls to a server is much clear and readable in jQuery. It is more readable in the sense that it is very clear and understandable regarding what exactly the function needs as parameters and what it is going to do. Let's have a look at a POST Ajax request to the /example/api URL with a specified payload data and also a function that gets triggered when the request is successful:

**Using jQuery**
* $.ajax({
* type: "POST",
* url: "/example/api",
* data: "example=payload",
* success: function() {
* console.log("Successful XHR!");
* }
* });

> Note
> jQuery assigns itself to the $ variable. Hence, in the code examples,$.
> functionName could be replaced with jquery.functionName.

> Note
> The dev tools in all modern major browsers have adapted to $, but only as a 
> wrapper for document.querySelector.

### Exercise 4.02: Handling Click Events with jQuery
In this exercise, we will identify how jQuery can help us react to events that get propagated when the target (in our case, a button) gets clicked. Let's get started:

1. Create a new HTML file including a button tag with the ID exampleButton. This button will be our target:
2. Find the latest jQuery CDN URL on cdnjs.com
3. Read the jQuery documentation for .on()(https://api.jquery.com/on/) erytion
4. Load in the CDN URL (https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js)
5. Create a script tag containing code that logs a Hello World message to the console when you click the button
6. Make sure you place the script tag after the button tag.
7. Open the HTML in your browser and open the dev tool console.
8. Press the Click me. button and verify that it prints Hello World to the console

### UI Animation Using jQuery
In addition to the use cases for jQuery that we have seen in the code examples in the Manipulating the DOM and Making XHR Requests sections and in Exercise 4.02: Handling Click Events with jQuery, there is another important functionality that jQuery provides us with: animating the user interface (UI).

### Exercise 4.04: Animating a "Peek-a-boo" on Button Click
In this exercise, you will build on the knowledge you have gained regarding how to handle events using jQuery. The relevant part, however, will be animating an element on the page. Whenever the **"Peek…"** button is clicked, the **…a-boo** headline will show up. Let's get started:

1. Create a new HTML file that includes a button tag with the ID Peek..., a headline with the ID …a-boo, and a display: none style attribute:
2. Load the latest jQuery CDN URL, from cdnjs.com (see Exercise 2, Handling Click Events with jQuery, step 2), inside a script tag:
3. Create a script tag containing the code to select the peek button and add an onClick event listener:
4. Inside the new script tag, write additional code to select the aboo headline and use the jQuery.fadeToggle function to animate the headline so that it's fading in and fading out:
5. Open the HTML page in your browser and click the peek button.
6. You should see the aboo headline fading in and fading out whenever you click the peek button:

In this exercise, you used jQuery to execute yet another type of task in the browser. Animations in UIs can be as simple as our fading example, but they can also be very complex when building games or creating 3D animations.

### Frameworks versus Core JavaScript
To provide an actual use case that spells out the negative impact a library or framework may have on our application, in the following two exercises, we will create a list and render it to the screen. The first one will make use of an external library, whereas the second one will be written in raw JavaScript.

### Exercise 4.05: Rendering a List of To-Dos Using React
In this exercise, we're going to display a few list tags as bullet points of an imaginary todo list. To do so, we'll be using a massively popular library called react.js and its complementary react-dom.js. Let's get started:
1. Create a new empty HTML file with a head and a div tag with the root ID inside the HTML body
2. Go to cdnjs.com and  get the latest react.js ("https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/cjs/react.production.min.js") and react-dom.js ("https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/cjs/react-dom.production.min.js") CDN URLs and load the URLs into a script tag inside the HTML head:
3. Use react.js and react-dom to create three list items and render them to the root
div-element:
4. Open the HTML page inside your browser and make sure that your todo list items are displayed correctly.
5. Open the network tab of your browser's dev tools and have a glance at how many kilobytes of JavaScript was loaded:

### Exercise 4.07: Creating a Library Yourself ***(I need explnation)***
Our library won't be capable of much at first, but you may want to put some effort into it and extend it as you wish.
**HeadlineCreator.js** is our library's name. It's a good name because it already hints at what it does; that is, it creates headlines. Technically speaking, our library will do the following:

* Be accessible on the global window object of the current browser tab, just as we've seen with jQuery before: window.headlineCreator.
* Provide a single method called createHeadline.
* Allow us (through the createHeadline method) to create a headline with the given text and append it to a given parent element.
* Take care of error handling for us, for instance, if we forgot to define some text to be displayed or passed an invalid selector for the parent element
* To verify that our library is working and having an example of its usage, we will create, additional to creating the library itself, an HTML page including script tags using our HeadlineCreator.js library.

1. Create an empty HTML file with a head tag, a body tag, and a div tag with an ID of root inside it:
2. Load a local JS file with the name **headlineCreator.js** inside a **script** tag:
3. Create the headlineCreator.js file inside of the same directory you created the empty HTML file in.
4. Inside the JavaScript file, create an IIFE and assign it to the headlineCreator variable:

> Note: 
>
> IIFE stands for "immediately invoked function expression." This sounds more complicated than it is. IIFEs are functions that are executed at the very same moment they are defined. One use case for them in frameworks or libraries is to prevent name collisions with variables that are used in the source code. This includes the library. For example, using a create function within your library can cause weird side effects since this is a very common and ambiguous name. Hence, the library could be a different function than it was supposed to be.

5. Within the IIFE, create another function and name it **createHeadline**. This function takes two parameters, **text** and **parentElementSelector**:
6. Inside the IIFE headlineCreator, add a return statement. This return statement will return an object with a single key named createHeadline that has the value of the same name (just like the function name we created in the previous step):
7. Extend the new function with a DOM query to look for an element with the parentElementSelector that is passed as an argument to the createHeadline function.
8. Assign the result of the DOM query to a variable called parentElement:
9. Next, create an h1 tag element and set the innerText attribute of this element to the text parameter that is passed to the function:
10. Lastly, append the created headline to the node that we stored in parentElement:
11. Refresh your HTML page and inside the dev tools console, call the window.headlineCreator.createHeadline function with any parameter you'd like. Then, view the result:

## Chapter Five: Beyond the Fundamentals
All programming languages have a type system. Types literally dictate the type of data stored in a variable 
or function parameter. Types are typically separated into two categories: **primitive** and **complex** types.

In JavaScript, all primitive data types are immutable. This means that the value cannot be changed in memory.

Complex data types work differently. They are also known as reference types. Reference types include the Object type and all of its derivatives, such as Array, Date, and Function. All reference types are passed by reference, hence the name. Therefore, if an object is modified through one reference, all the other references that share the same object will see it as updated too, since all of the references point to the same data in memory.

A complex type is simply a type that has more functionality than a primitive. For instance, a Date value provides additional means of representation, while objects can contain many nested values, such as primitives and other complex types.

There are multiple ways to create variables, including assignment to the global scope or through the use of either the var, let, or const keywords.

Assigning a variable without the use of var, let, or const will place the variable into the global scope. 

Preceding variable assignment with the **var** keyword places the variable into function scope.

The let keyword has a narrower scope. While **var** is considered to be functionally 
scoped, the **let** keyword is block scoped. This means that variables that are created with var exist throughout a function's scope level, while let-declared variables are created and used at the block level, such as in if conditional blocks or for loops.

The **const** keyword works with the same scoping and hoisting rules as the **let** keyword. The difference with const is that it is assumed the variable will not change throughout its lifetime. Using const allows the JavaScript engine to make certain optimizations at compile time since it expects the data to remain constant at runtime.

> Note
>
> Declaring a variable with var or let, but without assigning a value, will result in the variable containing undefined.

By preceding a variable with the **typeof** keyword, the returned value is the type of the variable represented as a string.

Fixed types are types that have no variation of value. In JavaScript, the available fixed types include **null**, **undefined**, and **Booleans** (**true** and **false**). These values are static and cannot change.
If a variable contains one of these values, it is then strictly equal to the value itself. Fixed types are more of a representation of a situation than actual data. For instance, **true** is a fixed representation of truthfulness and **false** is a fixed representation of falsehood.

null, in mathematical terms, denotes a value that is not present. In JavaScript, null is a static value that's used to mean no value.

**null** is a useful value for dereferencing variables or for returning a value from a function when no value can be returned. For instance, a function may return an object from an array if the item is present but may return **null** if it is not.

**undefined** is similar to **null** in many ways and, due to this, the two values are often misused. undefined is the value contained in any variable that is declared first, but not assigned a value. It is also the value that's been returned from a function that does not explicitly return a value using the return keyword and it is the value that's returned from a statement (an action with no resulting value).

Boolean operators are operators that, when combined into an expression, return a Boolean value. Boolean operators fit into two categories; namely, comparison operators and logical operators.

Comparison operators are often used as the condition parameters of if conditionals and while loop statements. If or while the condition expression returns true, the body block of the expression will execute.

Logical operators are often used to concatenate Boolean expressions together.

The following table lists each of the logical operators and what they do:
| **SYMBOL** 	| **NAME** 	| **DESCRIPTION**                                                            	|
|------------	|----------	|----------------------------------------------------------------------------	|
| &&         	| AND      	| Returns **true** if the expression<br>either side of the operator is true. 	|
| ||           | OR       	| Returns **true** if one or both operators return <br>true.                 	|
| |            | NOT      	| Negates a Boolean value or expression                                      	|

### Exercise 5.03: Odds and Evens
In this exercise, we will process a series of numbers and output messages describing whether a number is either odd or even.

The **!** or **NOT** operator is rather unique. It is considered a "unary" operator because it only accepts one value to the right of it. By using the NOT operator, you essentially 
negate the value that precedes it.

> var falseValue = !true;

In the preceding example, the falseValue variable will contain a value of false.

A very useful feature of the NOT operator is the "double NOT." This is when two NOT operators are combined to double negate an expression; a true expression is negated to 
false, then back to true, while a false expression is negated to true, then back to false. When working with truthy or falsey expressions, using the double NOT operator alters 
the resulting value of these expressions to actual Boolean values. Here's an example:
* if (!!1 === true) {
* console.log("this code will execute");
* }

### Boolean Operator Precedence
All operators have an order of execution known as "precedence." This precedence is also apparent in mathematics and is a means to ensure that expressions are executed in a predictable manner.

### Exercise 5.04 Free Home Delivery Eligibility Validation
In this exercise, we will create a function that will determine whether the customers of a grocery store are eligible for free home delivery. The store only delivers to customers who are located within 5 miles of the store. To make this exercise more interesting, the store recently decided to provide free delivery for customers located within 10 miles of the store, but only if those customers have an active membership for their loyalty program. Moreover, if customers are within 1 mile of the store, they aren't eligible for free home delivery, regardless of their membership status. Let's get sta*rted:

1. Define your function signature. The function should accept the distance of the customer's house from the store and their membership status:
> function isEligible(distance, membershipstatus) {

Based on the store's criteria, the function will return true if the customer is eligible for free delivery and false if they are not. Functions that describe something in a Boolean fashion are often labeled **is**, such as **isValid**, **isEnabled**, or **isGoingToReturnABoolean**.

2. There are two ways to build the body of this function; either break the problem up into small chunks and test the parameters bit by bit or create a single conditional that detects all the appropriate outcomes. We'll work with the latter in order to appropriately demonstrate the content of this chapter thus far. The following if statement is a negative check, it checks whether a customer is not eligible for free home delivery:
* if (distance < 1 || membershipstatus === "active" && distance > 10 ||
* membershipstatus === "inactive" && distance > 5 ) {

This is the crux of the exercise. The Boolean operators are executed in the following order, but only those that are necessary to determine the overall result. First and 
always is the relative check for houses within 1 mile of the store. If the house is within 1 mile of the store, the overall result is true, and the rest of the expression 
is not evaluated at all. Only if the distance is 1 mile or more is the overall result not determined yet and the following goes ahead. Only if the membership status is 
active does the check for a distance greater than 10 miles come. Otherwise, if the membership status is inactive, there comes the check for a distance of greater than 
5 miles. Then, those results are with the less-than-1-mile check. Due to operator precedence, no grouping using parentheses was required.

3. If the conditional evaluates as truthy, then we want to report that the person is not eligible for free delivery:
> return false;

4. Since the function will simply halt here, if the conditional block is executed, simply return true for anything that slips past:
* }
* return true;
* }

With the function complete, try different parameter variations to test it:
* console.log( isEligible(.5, "active") );   the result will be **false**.
* console.log( isEligible(7, "inactive") );   the result will be **false**.
* console.log( isEligible(7, "active") );     the result will be **true**.


### The Ternary Operator
So far, we have looked at unary and binary operators, but another operator is also supported in JavaScript. Known simply as the ternary operator, it performs a similar 
role to if...else, but in a much more compact fashion. The ternary operator consists of a question mark (?) and a colon (:), which are used to denote a conditional expression 
?, a true expression with if false expression. For example:

> var action = (score < 40) ? "Fail" : "Pass";

This, of course, is the same as the following:
* var action;
* if (score < 40) {
* action = "Fail";
* } else {
* action = "Pass";
* }

As ternary operators are expressions, they can be nested. Each question mark segment of the operator expects a colon segment to follow, much like nesting groups of brackets. 
Therefore, it is possible, and acceptable, to do the following:

> var status = (score < 40) ? "Fail" : (score > 90) ? "Outstanding Score" : "Pass";

This is equivalent to the following:
* var status;
* if (score < 40) {
* status = "Fail";
* } else if (score > 90) {
* status = "Outstanding Score";
* } else {
* status = "Pass";
* }

**Ternary** operators are very useful for keeping your code succinct. Sometimes, utilizing a complete **if...else** statement detracts from the purpose of the code and makes it 
harder to understand. Feel free to use the ternary operator where you see fit.

### Working with Numbers
All numbers in JavaScript are 64-bit floating-point values. Unlike other languages, there is no internal differentiation between floating-point values and integers. 
Applying integer-specific functions to a number will still result in a floating-point value. 

### Arithmetic Limitations
Floating-point values can pose something of a problem in JavaScript. Due to their binary encoding, which is how the number is represented in bits within the JavaScript 
engine, simply adding two floats together may not produce the result you are expecting. Consider the following:

> 0.1 + 0.2;        // outputs 0.30000000000000004

If accuracy is necessary for your application, there are a number of tricks that provide the correct output. With regards to the preceding example, simply converting the 
values into decimals before the addition will yield better accuracy. You can then convert the resulting value back into a floating-point number afterward, like so:

> ((0.1 * 10) + (0.2 * 10)) / 10;             // outputs 0.3

The same is also true for multiplication and division:

> 0.0032 * 13;     // outputs 0.041600000000000005

However, if you convert into an integer first, then the result is more accurate:

> 0.0032 * 1000 * 13 / 1000;    // outputs 0.0416

This limitation is not restricted to JavaScript. In fact, any language that works with 64-bit IEEE 754 floating-point numbers will have the same limitations. 

### The Number Object
As we mentioned previously, numbers in JavaScript are primitives. As such, they have no properties or methods. Contrary to this, however, the JavaScript engine maintains 
an awareness of where numerical literals and variables are used within your application and provides syntactic support for methods via the number object. 

> 5.123.toPrecision(3);  // returns "5.12"

### Number Functions
Both the Number function and constructor will accept any value type. If the value type cannot be converted into a number, then NaN (not a number) is returned:
* console.log( Number(true) );     // 1
* console.log( Number(false) );    // 0
* console.log( Number("5") );     // 5
* console.log( Number([]) );      // 0
* console.log( Number([1, 2, 3]) );   // NaN

When working with JavaScript, it is advised not to use the **Number** constructor at all so that your code is more readable.

Aside from the Number function and constructor, the global Number object also provides a variety of functions to help us identify or parse numeric values:

**Number functions and their descriptions**

| **Function**                  	| **Description**                                                                                                                                                                                                  	|
|-------------------------------	|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Number.isNAN(<value>)         	| Returns true if the passed value is NAN. Only use this to<br>compare a value with NAN. This is because NAN is special in <br>that it is not equal to any number, not even itself: NAN==NAN<br>evaluate to false. 	|
| Number.isFinite(<value>)      	| Returns true if the passed value is a representation of a finite<br>value (not finite)                                                                                                                           	|
| Number.isInteger(<value>)     	| Returns true if the passed value is an Integer. This will also <br>occur if a Float is passed with a Zero mantissa but will return <br>False if the mantissa is greater than Zero.                               	|
| Number.isSafeInteger(<value>) 	| Returns true is the passed Integer is between <br>9,007,199,254,740,991 and -9,007,199,254,740,991 inclusive.                                                                                                    	|
| Number.parseFloat(<value>)    	| Convert a passed value into a Float, if possible, or NAN if <br>it is unable to                                                                                                                                  	|
| Number.parseint(<value>)      	| Convert a passed value into an Integer, if possible, or NAN if<br>it is unable to.                                                                                                                               	|

Each of these functions is static and so must be preceded with the global Number object (which acts as a class in many languages), except when using parseFloat or parseInt. 
These functions are also global and therefore can be invoked without the preceding Number, like so:

> console.log( Number.parseFloat("1.235e+2") );     // outputs 123.5
>
> console.log( parseFloat("1.235e+2") );       // outputs 123.5 again

### Number Methods
Since the JavaScript parser semantically identifies numeric values, it is possible to invoke instance methods of the Number object against them, just like we can with 
actual objects. The majority of these methods are used to format numeric values as string representations, which is very useful for presentation in web pages:

**Number methods and their descriptions**
| **Method**                      	| **Description**                                         	|
|---------------------------------	|---------------------------------------------------------	|
| toExponential()                 	| Format the number as a string with exponential notation 	|
| toFixed(<places>)               	| Format the number as a string with fixed-point notation 	|
| toLocalString(<fractionDigits>) 	| Format the number as a string with language sensitivity 	|
| toString0                       	| Returns a direct string representation of the number.   	|

Using a combination of the Number functions and methods, it is possible to convert to and from numeric values as necessary, though some precision may be lost:

* console.log( 123.456.toLocaleString() ); // outputs "123.456" 
* console.log( 123.456.toFixed(1) ); // outputs "123.5" 
* console.log( 123.456.toExponential(3) ); // outputs "1.235e+2"

However, calling those functions on integer literals (rather than floats) fails:

> console.log( 123.toString() ); // => Uncaught SyntaxError: Invalid or unexpected token

When JavaScript sees the first dot right after one or more digits, it assumes you want to write a float literal. There are some workarounds to this:

> console.log( 123.0.toString() ); // Append .0. It will still be represented as an integer (as far as it fits in the integer range)
>
> console.log( (123).toExponential(2) ); // Wrap within parentheses (..)

**Number properties and their descriptions**

| **Property**      	| **Description**                                                                                       	|
|-------------------	|-------------------------------------------------------------------------------------------------------	|
| EPSILON           	| The smallest value possible between two numbers that <br>are representable by JavaScript.             	|
| MAX SAFE INTEGER  	| This is the largest possible integer that can be used in calculations                                 	|
| MAX VALUE         	| The largest number possible that can be represented as a double-precision floating-point number.  	|
| MINI SAFE INTEGER 	| This is the smallest possible integer that can be used in calculations.                               	|
| MIN_VALUE         	| The smallest number possible that can be represented as a double-precision floating-point number. 	|

Both MAX_SAFE_INTEGER and MIN_SAFE_INTEGER are interesting values. Consider the following code:

> Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2;

Surprisingly, the result of the preceding expression is true. This is simply because the numbers exceed safety boundaries and are therefore no longer accurately represented. 
The precision that's used in both sides of the preceding expression results in the same value and thus are considered equal.

### Exercise 5.05: Currency Formatter
In this exercise, we will create a function that can take a numeric value parameter as a number or string and format it into a price value with two-decimal precision. In order to prepend a currency symbol, the function will accept it as a parameter. Let's get started:
1. Define your function signature. This function will accept two parameters. The first of these will be the decimal value and the second will be the currency symbol:
* function formatPrice(value, currency) {
2. When executing, the first task that the function performs should be to validate the quality of the passed parameter values. The value parameter must be able to be converted into a numeric value, while the currency parameter should be a character string. If the currency is falsey, such as when no parameter has been passed, then we can default its value to the dollar symbol:
* value = Number(value);
* currency = currency || "$";
3. When responding to errors, there are many ways we can notify the caller that something went wrong. In this instance, we'll simply return null. This way, the caller will know that anything other than a string response means that something wasn't quite right:
* if (Number.isNaN(value) || typeof currency != "string") {
* return null;
* }
4. Now that we know the parameters are usable, combine them into the correct format and return the value:
* return currency + value.toFixed(2);
* }
5. If you go ahead and execute this function, you will see the appropriate responses:

* console.log( formatPrice(1.99, 32) );    // => null
* console.log( formatPrice(5, "£") );     // => £5.00
* console.log( formatPrice(9.9) );       // => $9.90
* console.log( formatPrice("Ted") );     // => null

### Working with Strings
Like **numbers, strings** are simple immutable data types that are managed within the JavaScript runtime as a list of binary values, which are representable as characters. Since they are immutable, they cannot be altered. If you modify a string, using one of the various methods provided, you are actually creating a new string with the changes applied.

The literal representation of strings is a list of characters surrounded by quotes. These quotes can be double quotes, single quotes (apostrophes), or backticks:

* console.log( "I am a string" );
* console.log( 'I am also a string' );
* console.log( `I am a special string` );

Strings can be thought of as a long list of single characters, much like arrays, which will be discussed later. As such, it is possible to query individual, or groups of, characters:

> ["H", "e", "l", "l", "o", ",", " ", "W", "o", "r", "l", "d", "!"]
>

The preceding code is not a literal representation, but simply an analogy of how strings may be perceived. Since strings are lists, it is possible to retrieve characters from them using the character index. This is performed by enclosing the index with square bracket symbols. The index of a character string starts at 0 (zero):

> "Hello, World!"[7];    // => "W"
>

Since strings are immutable, you cannot assign a replacement character to an index, like so:

* var msg = "Hello, World!";
* console.log( msg[7] = "Z" ); // => "Z
* msg; // => "Hello, World!"

It is not possible to modify a string. Instead, you can only create a new one based on the original. You can either reconstruct it using operators or use one of the many string functions provided by the String object, which will be described shortly.

### Special Characters
Since strings are contained in quotes, placing the same quotes within the string can be problematic. Simply typing the quote in the string is the same as terminating that string. This will then mean that any proceeding characters may be seen as malformed JavaScript code or, possibly worse, executable JavaScript code.

One way to avoid terminating the string is to use a different quote to the type used to contain the string. For instance, if the string is contained in double quotes, then single quotes can be used freely. Likewise, containing the string in single quotes will allow double quotes to be used freely:

* console.log( "I can contain 'single' quotes" );
* console.log( 'I can contain "double" quotes' );

The JavaScript language provides a means to escape characters included within strings so that they are treated differently. This is performed by preceding the character to escape with a backslash (\) character. In the case of quotes, escaping ensures that the quote character is not seen as the string termination character:

> "It's useful to be able to \"escape\" quotes"

The escape character can be used with several other characters for varying effects. It is even used to escape the escape character, for times when a backslash must exist within a string

**escape characters and description page 268**

### Concatenation
Concatenating is a means of combining elements, end to end, to form a new element. With regards to strings, this is simply combining strings together to form a larger string. String concatenation is performed using the plus (+) symbol. This is known as method overloading:

* "This string " + "and " + "this string " + "are concatenated";   // => "This string and this string are concatenated"

When concatenating strings, it is important to pay attention to the presence of space characters. No additional characters are added at the point of concatenation. Therefore, if you require spaces between combined strings, you must add these yourself. Since strings are immutable, concatenating strings creates a new string, which you can assign to a variable or pass as a parameter to a function. The original strings remain unaffected.

### Template Literals
Template literals are a more recent addition to the JavaScript language. Surrounding strings with backtick quotes (`) alter the translation of the literal by the JavaScript engine and afford some additional new features.

The first interesting feature, and the one that's the most commonly used, is the ability to interpolate expressions within a string. This is performed by embedding blocks within the string preceded with the dollar ($) character. Combining strings in this fashion provides the benefit of making string literals easier to read, but can also greatly simplify more complex string concatenation requirements:

* var str = `2 + 2 = ${2 + 2}`;
* console.log( str ); // => "2 + 2 = 4"
* var name = "Jonny";
* welcomeStr = `Hello, ${name}!`;
* console.log( welcomeStr ); // => "Hello, Jonny!"

Another useful feature of template literals is the ability to use physical line breaks. By applying line breaks to the JavaScript code, those same breaks appear within the resolved string:

* var str = `This is line one
* and this is line two`;
* console.log( str );
* // => "This is line one
* // => and this is line two"

Finally, a template expression can contain inner template literals within it too, thereby providing a nested template literal implementation. You'll see them in the next example. This caters to more complex expressions within the string itself, such as conditionals or loops.

The result of template literals is a feature within JavaScript that lends itself very nicely to processing pages, and other string data content, in a manner that is more manageable. Where JavaScript developers once looked toward third-party libraries to perform such feats, such libraries are no longer required

### Exercise 5.06: Email Templates
In this exercise, you will create a function that accepts the components of an email sending service and combines them into an email body template. To make things more interesting, only adults are eligible to post comments on the website. Accordingly, the message text will change. Let's get started:

1. Function declaration

* function sendEmail(name, age, comments) {

This line defines a function named **sendEmail** that takes three parameters: **name, age, and comments.**

2. Conversion and Validation:

>  var age = Number(age);
> 
> if (Number.isNaN(age) || typeof name != "string" || typeof comments != "string") {
> 
> return null;
> 
> }

* The age parameter is converted to a number using Number(age).
* The if statement checks three conditions:
   * Number.isNaN(age) checks if age is NaN (Not a Number). If age cannot be converted to a number, this condition is true.
   * typeof name != "string" checks if name is not a string.
   * typeof comments != "string" checks if comments is not a string.
 * If any of these conditions are true, the function returns null, indicating an invalid input.

3. Constructing the Email Body:

> var body = `A user has posted a comment from the website:
>
> name: ${name} 
>
> age: ${age}
>
> status: ${(age < 18) ? `${name} is not a valid user` : `${name} is a valid user`}
>
> comments: ${comments}`;

* A template literal is used to create the **body** of the email. It allows for multi-line strings and embedding expressions with **${}.**
* The status part uses a ternary operator:
   * If age < 18, the status is set to **${name} is not a valid user.**
   * Otherwise, it sets the status to **${name} is a valid user.**
 * The name, age, and comments variables are interpolated directly into the string.

4. Returning the Constructed Body:

> return body;
>

* The constructed body string is returned from the function.

***Example Use cases
1. Valid input:

> console.log(sendEmail("Alice", 25, "This is my comment."));
>
Output:
> A user has posted a comment from the website:
>
> name: Alice
>
> age: 25
>
> status: Alice is a valid user
>
> comments: This is my comment.
>

2. Invalid output (age is NAN):

> console.log(sendEmail("Bob", "not a number", "Hello!"));
>

Output:

> null
>

### String Methods
The String object does not have any static functions, but it does support strings with numerous available methods – far more than those available in the Number object. 
Working with and manipulating strings is a common requirement in JavaScript; not just for displaying text, but for working with data in general. It is often necessary to 
clip, sort, modify, add, and remove segments of strings using varying criteria. As such, JavaScript provides just about every method you could think of to make these tasks 
simple.

The following table lists the most commonly used methods that are provided by the String object:

| **Method**               	| **Description**                                                                                                   	| **Example**                                        	|
|--------------------------	|-------------------------------------------------------------------------------------------------------------------	|----------------------------------------------------	|
| charAt(index)            	| Returns the character at the specified index.                                                                     	| 'hello'.charAt(1) returns 'e'                      	|
| charCodeAt(index)        	| Returns the Unicode of the character at the specified index.                                                      	| 'hello'.charCodeAt(1) returns 101                  	|
| concat()                 	| Combines two or more strings and returns a new concatenated string.                                               	| 'Hello'.concat(' ', 'World') returns 'Hello World' 	|
| endsWith(search)         	| Checks if the string ends with the specified substring.                                                           	| 'Hello'.endsWith('o') returns true                 	|
| indexOf(search)          	| Returns the first index at which a specified substring is found.                                                  	| 'Hello World'.indexOf('o') returns 4               	|
| lastIndexOf(search)      	| Returns the last index at which a specified substring is found.                                                   	| 'Hello World'.lastIndexOf('o') returns 7           	|
| split(separator)         	| Splits the string into an array of substrings based on a separator.                                               	| 'a,b,c'.split(',') returns ['a', 'b', 'c']         	|
| substring(start, end)    	| Similar to slice(), extracts characters between indices.                                                          	| 'Hello World'.substring(0, 5) returns 'Hello'      	|
| trim()                   	| Removes whitespace from both ends of the string.                                                                  	| ' Hello '.trim() returns 'Hello'                   	|
| toLocaleLowerCase()      	| Converts the string to lowercase according to locale-specific rules.                                              	| 'Hello'.toLocaleLowerCase() returns 'hello'        	|
| toLocaleUpperCase()      	| Converts the string to uppercase according to locale-specific rules.                                              	| 'Hello'.toLocaleUpperCase() returns 'HELLO'        	|
| substr(<start>, <count>) 	| Returns a substring from the string, starting at the index and <br>encompassing the count characters that follow. 	|                                                    	|
|                          	|                                                                                                                   	|                                                    	|

### Exercise 5.07: Sentence Reversal
In this exercise, you will create a function that accepts a string of any size, trims any whitespace characters, reverses its content, and then capitalizes the first character of 
the string or of those following a period character. The result should look like a normal sentence from a reversed dimension. The purpose of the exercise is to understand 
data transformation. Transforming data is ubiquitous in software development. The JavaScript runtime transforms data when it reads your code and converts it into a 
running application. Being able to transform data in a simple manner will prove to be a valuable skill. Let's get started:

1. Function Definition

> function reverse(str) {
>

The function reverse takes a single parameter str.

1. Convert to String and Trim

> str = String(str).trim();
>

* The input str is converted to a string (if it isn't already) and any leading or trailing whitespace is removed using trim().

3. Initialize Variables

> var result = "", index = str.length - 1, chr, isStart = true;
>

* result: An empty string to store the final reversed string.
* index: Initialized to the last index of the string (str.length - 1) to start reversing from the end.
* chr: A placeholder variable to store each character as it is processed.
* isStart: A boolean variable to indicate whether the current character is at the start of a sentence or not.

4. While Loop to Traverse the String:

> while (index >= 0) {
>

* This loop continues as long as index is not less than 0, effectively iterating through the string from the end to the beginning.

5. Capitalize First Character

> if (isStart && chr != " ") {
> 
> isStart = false;
> 
> } else {
> 
> chr = chr.toLowerCase();
> 
> }
> 

* If isStart is true (indicating the beginning of a new word or sentence) and the character is not a space the character is converted to uppercase, and isStart is set to false to indicate that the next characters will be part of the sentence.
* If it's not the start of a sentence or chr is a space, the character is converted to lowercase.

6. Handling Periods (.):

> if (chr == ".") {
> 
> if (index == str.length - 1) {
> 
> index--;
> 
> continue;
> 
> } else {
> 
> result = result.substr(0, result.length - 1) + ". ";
> 
> index--;
> 
> continue;
> 
> }
>
 
 * If chr is a period:
   * isStart is set to true to indicate that the next non-space character should start a new sentence and be uppercase.
   * If index is at the last character of the original string (str.length - 1), it just decrements index and continues to the next iteration.
   * If index is not at the last character, the last character added to result (likely the period itself) is replaced with ". " (a period followed by a space), and index is decremented to move to the previous character.
  
  7. Appending Characters to the Result:

> result = result + chr;
> 
> index--;
>

* The current character chr is added to result.
* index is decremented to move to the previous character.

8. Returning the Final Result:

> return result + ".";
>

* The function returns the final reversed string with a period at the end.

Explanation of How It Works:
  * The function iterates from the end of the input string to the start, reversing the order of characters.
  * The first non-space character encountered at the start of a new sentence is converted to uppercase, while the rest are converted to lowercase.
  * If a period is encountered, it signals the end of a sentence. The period is adjusted so that it is correctly placed at the end of the reversed string, followed by a space.
  
### The toString Method
Every primitive type in JavaScript can be converted into a string using the String function. When working with more complex types, however, this is not always the case. For instance, with a typical object, converting it into a string will produce a set result, regardless of the object's content:

> var obj = {name: "Bob"};
>
> String(obj);
>
> the out is: "[object Object]"

The reason for this is that the JavaScript engine doesn't understand how you wish the data to be parsed. It could simply be that you require the output to form a table of keys and values, or you may simply want a list of the values themselves and to discard the keys. The possibilities are endless.

toString is a method that exists on all data types but is required to be overridden on some of the complex types, providing that you have your own parsing logic. When calling the String function and passing it a value, you are in fact invoking the toString method on that value

> console.log( [1, 2, 3].toString() );
>
> // => "[1, 2, 3]"

### Numbers with Strings
Numbers and strings are both primitive data types and both overload the + (addition) operator. However, there is much more of a relationship between the two that can prove useful or catch you out if you are not careful.
Interestingly, numbers and strings in JavaScript can often be interchangeable, thanks to an intelligent context-based system. Depending on the circumstances, JavaScript will attempt to deduce the resulting type of an expression based on the available parameters.

You have already seen that strings can be concatenated using the + operator, but 
numbers can also be concatenated into strings:

> "I am " + 21 + " years old";
>
> // => "I am 21 years old"

When the JavaScript parser identifies a numeric value and a string value passed as expressions to the + operator, it will convert the number into a string so that the result is a simple string concatenation. This is otherwise known as context-based casting.

When the string expression is also a representation of a numerical value and is used with other numerical associated operators, such as / or *, the reverse action will occur. At such times, JavaScript's context-based casting will instead convert the string number into an actual number. Here's an example:

> "42.7" * 2;
> // => 85.4
>

JavaScript will always convert the non-string value into a string when we use the + operator in order to produce an expected result. It would be too confusing if the + operator worked differently based on the content of the string expression. Numbers can also be mathematically calculated when both expressions are a string, but again, this will only occur if you're not utilizing the + operator:

> console.log( "10" * "10" );
>
> // => 100
>
> console.log( "10" + "10" );
>
> // => "1010"

### Working with Functions
JavaScript functions are blocks of code with signatures naming the variables that were passed to them when invoked. As with any block, functions have 
their own stacks that encapsulate and protect data declared within them.

In JavaScript, functions are considered first-class types. This means that, much like any other type, they can be assigned to variables, passed as parameters to other functions, 
and returned from functions. They are also able to call themselves, which is known as recursive and is the quality that helps make JavaScript a functional language.

**Forms of function in JavaScript:**
* Anonymous functions
* Named functions
* Arrow functions
* Generator functions

The differences between them are mostly slight syntactical changes that affect how they are used.

### Anonymous Functions
Since functions in JavaScript are first class, they exist as a transferable resource, much like primitives and objects. Until now, functions have been declared and assigned, which 
means they have a callable name. However, a function is also an expression with two states: its declared format and its invocation. 

A function can exist without providing a name in the signature, whereby it has the 
following format:

> function (...parameters) {
>  ...body
> }

In JavaScript, it is possible to code a function without providing a name at declaration time. Creating functions in this way allows them to be created in place, such as in a call 
to another function:

> otherFunction( function(a, b) { /* do something */ } );
>

In JavaScript, functions are first-class objects, meaning they can be assigned to variables, passed as parameters to other functions, and returned from functions. When an anonymous function (a function without a name) is assigned to a variable, the variable name effectively becomes the function's name.

**Assigning a Function to a Variable:**
An anonymous function can be assigned to a variable, and the variable can then be used to call the function. This is useful for creating reusable pieces of code that can be passed around and invoked when needed.

**Example**
Here, we define an anonymous function and assign it to a variable greet:

> const greet = function(name) {
> 
>    return `Hello, ${name}!`;
> 
> };
> 
> // Calling the function using the variable name
> 
> console.log(greet("Alice")); // Outputs: Hello, Alice!

In this example, greet acts as the name for the anonymous function, and we can call it using greet.

**Functions as Parameters:**
Functions can be passed as arguments to other functions, enabling powerful patterns like callbacks and higher-order functions.

**Example**
We can also pass functions as arguments to other functions. Here’s an example using a higher-order function:

> // Higher-order function that takes a function as a parameter
> 
> function processUserInput(callback) {
> 
>    const name = "Bob";
> 
>    callback(name);
> 
> }
>
> // Passing the greet function as a callback
> 
> processUserInput(greet); // Outputs: Hello, Bob!

In this case, greet is passed as the callback parameter to the processUserInput function, which then calls the greet function with the name parameter.

### callbacks
A callback in JavaScript is a function that is passed as an argument to another function and is executed after the completion of that function. Callbacks are used to handle asynchronous operations or to customize a function's behavior.

An important use case for anonymous functions has often been asynchronous execution callbacks. When calling code that does not immediately return a value, but 
also does not stop the execution of code that immediately proceeds it, that code is considered asynchronous

Applications that contain asynchronous code need a means to alert the rest of the application once the asynchronous code has finished running and a value must be 
returned. In JavaScript, callbacks have long been used for this purpose:

> function doSomethingAsync(data, callback) {
>
> async_task(data).then( // do async request
>
> function(result) { // then on return
>
> callback(result); // execute callback, passing result data!
>
> }
> );
>
> //.. continue with other code ..
>
> }

The issue with callbacks is that should numerous asynchronous calls need to occur sequentially, the resulting code file has a tendency to indent catastrophically. This issue 
is sometimes fondly known as the pyramid of doom or callback hell:

> asyncOne(data, function(res1) {
>
> asyncTwo(res1, function(res2) {
>
> asyncThree(res2, function(res3) {
>
> //... ad infinitum ...
>
> });
>
> });
>
> });
>

As you can see, each new request indents a further two characters. It is not uncommon for an application to possess callback chains of several tens of requests, thereby 
reaching the far side of the screen while coding. Developers can choose not to indent, as indentation is not a requirement, but not doing so results in harder-to-read code. To 
resolve this, generator functions were introduced. You will learn more about generator functions later in this chapter

### Exercise 5.08: Functional Parameters
In this exercise, you will create a function that accepts two parameters: a primitive data type and a function. This function will then combine those parameters and return 
a function as a result. The returned function will work identically to the function that was passed as a parameter, with the exception that it will always receive the original 
primitive parameter as its argument. Let's get started:

1. Start off by creating the function signature. You know that it will accept two parameters and, since it will act as a kind of currying process (a term used in 
functional programming), that's the name that will be used here:

> function curry(prim, fun) {
>

There is nothing special here. The **curry** function is just like any named function. In this circumstance, it's not important what value the first parameter contains. 
Even if it contained null, that would still be valid in this instance, so you can accept whatever comes through. 

2. Now, check if the second parameter is a function. Otherwise, when it is invoked, an error may occur if it is some other value type:

> if (typeof fun != "function") return;
>

3. Now for the fun part. The intention is to always populate the parameter list of the passed-in function with the first parameter of this function, however many times it 
is called. To do this, use a local function definition:

> var ret = function() {
>
> return fun(prim);
>
> };

As you can see, the result here is a function that, whenever it is called, will simply call the fun function. The prim parameter will always remain the same here, so the 
invocation will always produce the same result.

4. Now, return the new function:

> return ret;
>
> }

5. Let's give this a spin. Try calling the function while trying different values as parameters:

> var fun = function(val) { return val + 50 };
>
> var curry1 = curry(99, fun);
>
> console.log( curry1() );        // => 149
>
> console.log( curry1() );        // => 149
>
> // calling curry1 will produce the same output however many times it is called, because it is a fixed, pure function.
>
> var curry2 = curry("Bob", fun);
>
> console.log( curry2() );         // => "Bob50"

### Arrow Functions
Arrow functions, sometimes called **fat arrow** functions, are a simplified syntax for function declaration:

> var myFun = (param) => param + 1;

As shown in the preceding example, arrow functions don't need to provide a block of code and can instead be replaced with an expression. If an expression is used, then no return keyword is required since expressions already return a value. However, the return keyword is required if a block is used, since blocks are not expressions:

> var myFun = (param) => {
>
> return param + 1;
>
> };

As well as functioning without a block, arrow functions can also be declared without the parentheses surrounding the parameter list:

> var myFun = param => param + 1;

However, the preceding code only works if the parameters are a list of one. This is because a list of two or more parameters forms a rather ambiguous statement. For instance, consider the following:

> var myFun = a, b, c => a + b + c;

When reading the preceding declaration, the compiler will not know which of the following declaration strings you are trying to achieve:

1. var myFun = a, b = undefined, (c) => { return a + b + c };
2. var myFun = a, (b, c) => { return a + b + c };
3. var myFun = (a, b, c) => { return a + b + c };

The first two examples will give an error since they attempt to define an arrow function in a var statement, but without being assigned to a variable.


### Arrow Function Caveats
While arrow functions appear much cleaner and more flexible than regular function declarations, there are disadvantages to their use. The first disadvantage is that arrow 
functions cannot be used as an object constructor and it's ill-advised to use them as object methods.

The purpose of arrow functions is simply to enable a cleaner syntax when working with anonymous functions. Arrow functions were the first syntactical weapon against 
callback hell, which we described previously. As such, arrow functions should be used wisely.

### Generator Functions
Generators are a recent and rather complex addition to the JavaScript language. They are incredibly useful functions once you begin to understand them, though that may 
take some effort. Generators do not facilitate any means that cannot be carried out in some other fashion within the JavaScript language. As such, this section will merely 
touch upon the subject of generator functions in order to alert you to their usefulness.

Generators provide additional power to sequence iteration. Here's an example:

> for (let i = 0; i < 3; i++) {
> 
> callback(i);
>
> };

The preceding code is an iterator. The loop iterates three times, from 0 to 2. Each time the iteration occurs, the callback function is called, and the iteration result is passed to 
it.

Now, the problem with loops is that they are a closed stack. For any custom code to execute within the loop, the loop needs to have knowledge of what to do with the 
iterated data. This is a restriction that generators aim to overcome.

Generator functions are declared much like named and anonymous functions, but with a slight difference; an asterisk must be placed after the **function** keyword:

> var myFun = function*(params) { /*body*/ };
>

**The arrow function format cannot be used for generator functions.**

When creating the function body, the same rules for named and anonymous functions apply. However, there are some differences. Take a look at the following example, based 
on the preceding loop:

> var myFun = function*() {
> 
> for (let i = 0; i < 3; i++) {
>
> yield i;
>
> }
>
> };

In particular, note the **yield** keyword. **yield** is a keyword that's been borrowed from multithreaded languages such as C++. Its usage in those languages is similar to its usage 
here. Essentially, by calling **yield**, you are asking the runtime engine to pass control back to the caller. 

In JavaScript, "passing back of control" includes sending a value to the caller. In the preceding example, a value will be sent each time the function yields, 
which will be three times in total.

To use the function, you must create an instance of the generator by invoking the function:

> var myGen = myFun();

Once you have a generator instance, you can acquire a value:

> var firstValue = myGen.next().value;
>
> console.log( firstValue );  // firstValue will equal 0

You can call the next function many times, until the stream is exhausted. Once exhausted, the returned value will be undefined:

* console.log(myGen.next().value);    // Output is 1
* console.log(myGen.next().value);    // Output is 2
* console.log(myGen.next().value);    // Output is undefined

The return value of the next() function is an object with two fields:

> {value: <value>, done: <boolean>}

A generator function in JavaScript is a special type of function that can pause its execution and resume later. It allows you to iterate through values lazily (on demand) using an iterator.

A generator function is defined using the function* syntax, and the yield keyword is used to pause and resume the execution.

### Syntax

> function* generatorFunction() {
> 
>    yield 'First';
> 
>    yield 'Second';
> 
>   yield 'Third';
> 
> }
> 
> const generator = generatorFunction();

* console.log(generator.next()); // { value: 'First', done: false }
* console.log(generator.next()); // { value: 'Second', done: false }
* console.log(generator.next()); // { value: 'Third', done: false }
* console.log(generator.next()); // { value: undefined, done: true }

### Key Features of Generator Functions
1. function* Declaration:
   * Generators are declared with the function* keyword.
   * Example: function* generatorName() { ... }
2. yield Keyword:
   * yield pauses the function's execution and returns a value to the caller.
   * The function resumes execution when next() is called again.
3. Iterator Object:
   * Calling a generator function does not execute its body but instead returns an iterator object.
   * You can use the .next() method to control its execution.
4. done and value:
   * next() returns an object { value, done }.
   * value: the yielded value.
   * done: false if the generator can produce more values, true otherwise.
5. return:
   * You can use return inside a generator to end the execution and provide a final value.

### Example: Generating Numbers

* function* numberGenerator() {
*    let num = 0;
*    while (num < 3) {
*        yield num++;
*    }
* }

* const gen = numberGenerator();

* console.log(gen.next()); // { value: 0, done: false }
* console.log(gen.next()); // { value: 1, done: false }
* console.log(gen.next()); // { value: 2, done: false }
* console.log(gen.next()); // { value: undefined, done: true }

### Example: Infinite Generator

Generators can create infinite sequences, as they pause execution:

* function* infiniteCounter() {
*    let i = 0;
*    while (true) {
*        yield i++;
*    }
* }

* const counter = infiniteCounter();

* console.log(counter.next().value); // 0
* console.log(counter.next().value); // 1
* console.log(counter.next().value); // 2
* // Keep calling `next()` for more values

### The this Keyword

The **this** keyword in JavaScript refers to the object it belongs to and its value depends on how a function is called. It gives context to the execution of a function and helps access properties or methods on the current object.

### General Rules for this

The value of this is determined by the execution context in which a function is called. The main contexts are:

1. Global Context (default behavior)
2. Object Method
3. Function (Standalone)
4. Arrow Function
5. Event Handlers
6. call, apply, and bind Methods
7. Constructor Functions and Classes

1. **this** in the Global Context
In the global scope:
  * Browser: this refers to the window object.
  * Node.js: this refers to the global object.

> console.log(this);     // In browser: Window object

2. **this** in Object Methods
When this is used inside a method, it refers to the object that called the method.

* const user = {
*    name: "Alice",
*    greet() {
*        console.log(`Hello, ${this.name}`);
*    }
* };

* user.greet();          // Output: Hello, Alice

Here, **this** refers to the **user** object because it called the **greet** method.

3. **this** in Regular Functions

In a regular function (not part of an object), this depends on how the function is called:
* If not in strict mode, **this** refers to the global object (window in browsers).
* If strict mode ('use strict'), this is undefined.

> function showThis() {
> 
>    console.log(this);
> 
> }
>
> showThis(); // In browser: Window object (non-strict mode)

In strict mode:

> "use strict";
> 
> function showThis() {
> 
>    console.log(this);
> 
> }
>
> showThis(); // Output: undefined

4. **this** in Arrow Functions

Arrow functions do not bind their own this. Instead, they inherit this from their surrounding (lexical) scope.

* const user = {
*    name: "Alice",
*    greet: function() {
*        const arrowFunc = () => {
*            console.log(this.name);
*        };
*        arrowFunc();
*    }
* };

* user.greet();      // Output: Alice

Here, the arrow function inside greet inherits this from the surrounding method, where this refers to the user object.

5. **this** with Event Handlers

In DOM event handlers, **this** refers to the element that triggered the event.

> document.getElementById("myButton").addEventListener("click", function() {
> 
>    console.log(this); // Refers to the button element
> 
> });

Arrow functions in event listeners do not have their own this. Instead, they inherit it from their surrounding scope.

6. **this** with call, apply, and bind

You can explicitly set the value of **this** using call(), apply(), or bind().
* call invokes the function immediately, passing this and arguments.
* apply does the same but takes arguments as an array.

> function greet(age) {
> 
>     console.log(`Hello, ${this.name}. You are ${age} years old.`);
> 
> }
> 
> const person = { name: "Bob" };
> 
> greet.call(person, 25);           // Output: Hello, Bob. You are 25 years old.
> 
> greet.apply(person, [25]);        // Output: Hello, Bob. You are 25 years old.

* The value of this depends on how a function is called, not where it's defined.
* Arrow functions do not have their own this; they inherit from the lexical scope.
* Use call, apply, or bind to explicitly set the value of this.
* In classes and constructor functions, this refers to the newly created object instance.

Understanding this is crucial for mastering JavaScript, especially when working with objects, events, or functional programming patterns.

### The arguments Keyword 

The arguments keyword in JavaScript is an array-like object that is available inside all regular functions. It provides access to the arguments passed to the function, regardless of the number of parameters defined.

### Key Features of arguments
1. Available in Regular Functions: The arguments object is only available in non-arrow functions.
2. Array-like Object:
  * It has a length property and indexed elements.
  * However, it does not have array methods like map(), filter(), etc.
3. Dynamic Access: You can access arguments passed to a function even if they are not explicitly declared as parameters.

**Syntax**

> function example() {
> 
>    console.log(arguments);
> 
>    console.log(arguments[0]); // First argument
> 
>    console.log(arguments.length); // Number of arguments
> 
> }


> example(1, 2, 3);

// [Arguments] { '0': 1, '1': 2, '2': 3 }
// 1
// 3

### Usage Examples

1. Accessing All Arguments

You can access arguments using their index:

* function sum() {
*   let total = 0;
*    for (let i = 0; i < arguments.length; i++) {
*        total += arguments[i];
*    }
*    return total;
* }

* console.log(sum(1, 2, 3, 4)); // Output: 10

2. Using arguments.length

The arguments.length property gives the number of arguments passed to the function.

* function checkArguments() {
*   console.log(`Number of arguments: ${arguments.length}`);
* }

* checkArguments(1, 2, 3); // Output: Number of arguments: 3
* checkArguments(5);       // Output: Number of arguments: 1

3. arguments in Strict Mode

In strict mode ('use strict'), arguments behaves differently:

It does not sync changes between the arguments object and the named parameters.

* "use strict";
* function test(a, b) {
*    a = 100;
*    console.log(arguments[0]); // Still 10, not 100
* }

* test(10, 20);

4. The Rest Parameter (...)

The rest parameter (...) is the modern alternative to arguments. It provides a clean way to gather all arguments into an array.

* function sum(...nums) {
*    return nums.reduce((total, num) => total + num, 0);
* }

* console.log(sum(1, 2, 3, 4)); // Output: 10

### Advantages of the Rest Parameter over arguments:
1. It provides a true array (with access to array methods).
2. It works in arrow functions.
3. It is more readable and modern.

### Call and Apply