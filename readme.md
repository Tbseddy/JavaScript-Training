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





