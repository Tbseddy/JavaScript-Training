// Strings represent text

'hello'
alert('hello');

//Combining strings together is called concatenation
'some' + 'text'  //output will be 'sometext'
'some' + 'more' + 'text' 

typeof 2    // to check the type of vale 2 is. The output = 'number'

typeof 'hello'   // output = 'string'

'hello' + 3     // output = 'hello3'.     JavaSript automatically convert it to a string

'$' + 20.95 + 7.99     // Output = '$20.957.99'      Find the best way to do this below.

'$' + (20.95 + 7.99)   //  Output =  '$28.939999999999998' This math is inaccurate
// When calculating money, the best way is to always calculate in cents then you convert to dollars

'$' + (2095 + 799) / 100  // Output = '$28.94'

'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100  // Output = 'Items (2): $28.94'


alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);  


"hello"
"I'm learning JavaScript"

'I\'m learning JavaScript'
alert('some\ntext');

`hello`
`Items (${1 + 1}): $${(2095 + 799) / 100}` // (Template String) Interpolation method using `........`
`some
text`

/* 
What should we use to create a string?
1. Use '.....' by default
2. If we need interpolation, multi-line strings
    use `.....`
*/