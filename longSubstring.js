
input = 'abccdefghijkklmnopqrsstuvwxyz'
var chars = input.split('');
var curr_char;
var str = "";
var longest_string = "";
var objChars = {};
for (var i = 0; i < chars.length; i++) {
  curr_char = chars[i]
  if (!objChars[chars[i]]) {
    str += curr_char;
    objChars[chars[i]] = { index: i }
  }
  else {
    if (longest_string.length <= str.length) {
      longest_string = str;
    }
    var prev_dupeIndex = objChars[curr_char].index;
    var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
    str = str_FromPrevDupe + curr_char;
    objChars = {};
  }
}
var max_length = longest_string.length > str.length ? longest_string : str
console.log(max_length, max_length.length);