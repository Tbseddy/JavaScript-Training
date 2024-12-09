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

  