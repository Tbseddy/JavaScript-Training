function formatPrice(value, currencySymbol = '$') {
    // Convert the value to a number if it is a string or number.
    let numericValue = parseFloat(value);
  
    // Check for NaN (not a number) after conversion.
    if (isNaN(numericValue)) {
      throw new Error('Invalid number value provided');
    }
  
    // Format the number with two decimal places.
    let formattedValue = numericValue.toFixed(2);
  
    // Return the formatted price with the currency symbol prepended.
    return currencySymbol + formattedValue;
  }
  
  // Example usage:
  console.log(formatPrice(1234.5));        // Output: $1234.50
  console.log(formatPrice('987.65', '€')); // Output: €987.65
  console.log(formatPrice(42));            // Output: $42.00

  /* Explanation:
The function formatPrice takes two parameters:

Value: The numeric value to format (can be a number or a string).

currencySymbol: The currency symbol to prepend (defaults to $ if not provided).

parseFloat(value) is used to convert the value to a floating-point number.

isNaN() checks if the conversion failed and returns true if the value is not a number.

toFixed(2) ensures the number is formatted to two decimal places.

The result is returned as a string, with the currencySymbol prepended to the formatted value.

Edge Cases Handled:

If value is not a valid number or is NaN, an error is thrown.

The function can accept values in both string and number formats.

The function supports different currency symbols.

*/