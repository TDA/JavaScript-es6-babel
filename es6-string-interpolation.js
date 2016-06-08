/**
 * Created by schandramouli on 6/7/16.
 */

var name = 'sai';
var age = 22;

console.log(`${name} is ${age} years old :)`);

var multiline_string = `This is a multi-line string
which spans across lines
and still executes
with the newlines intact
kinda like pythons """, but
with <pre> kinda stuff
`;

console.log(multiline_string);

// Also you can beautiful tags with it, which act like functions
console.log(SaferHTML`${multiline_string}`);


function SaferHTML(templateData) {
  "use strict";
  var s = templateData[0];
  // ONLY the variables are in the templateData,
  // everything else (aka) normal strings are in
  // the arguments variable
  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}