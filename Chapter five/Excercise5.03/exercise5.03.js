function odd_or_even(counter, last) {
    while (counter <= last) {
        if (counter % 2 == 0) { // is true if the remainder of ‘counter / 2’ is equal to zero
          console.log(counter, "is an even number");
        } else {
          console.log(counter, "is an odd number");
        }
        counter = counter + 1;
      }
    }

    odd_or_even(1, 5);
    