function reverse(str) {
    str = String(str).trim();
    var result = "", index = str.length - 1, chr, isStart = true;
    while (index >= 0) {
      chr = str[index];
      if (isStart && chr != " ") {
        chr = chr.toUpperCase();
        isStart = false;
      } else {
        chr = chr.toLowerCase();
      }
      if (chr == ".") {
        isStart = true;
        if (index == str.length - 1) {
          index--;
          continue;
        } else {
          result = result.substr(0, result.length-1) + ". ";
          index--;
          continue;
        }
      }
      result = result + chr;
       index--;
    }
    return result + ".";
  }

  /* 
  Explanation of How It Works:
  * The function iterates from the end of the input string to the start, reversing the order of characters.
  * The first non-space character encountered at the start of a new sentence is converted to uppercase, while the rest are converted to lowercase.
  * If a period is encountered, it signals the end of a sentence. The period is adjusted so that it is correctly placed at the end of the reversed string, followed by a space.
  
  */