"use strict";

var _templateObject = _taggedTemplateLiteral(["", ""], ["", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Created by schandramouli on 6/7/16.
 */

var name = 'sai';
var age = 22;

console.log(name + " is " + age + " years old :)");

var multiline_string = "This is a multi-line string\nwhich spans across lines\nand still executes\nwith the newlines intact\nkinda like pythons \"\"\", but\nwith <pre> kinda stuff\n";

console.log(multiline_string);

// Also you can beautiful tags with it, which act like functions
console.log(SaferHTML(_templateObject, multiline_string));

function SaferHTML(templateData) {
  "use strict";

  var s = templateData[0];
  // ONLY the variables are in the templateData,
  // everything else (aka) normal strings are in
  // the arguments variable
  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}

//# sourceMappingURL=es6-string-interpolation-compiled.js.map