/*global confirm, console, prompt*/

// TASK 1

/*Declare three variables, a and b and c.

If a has value 3, b has value 5, and c doesn't have a value, alert the following expressions ( one after another ). Alert popup box has to show the following content for each expression (concatenate everything in one long expression using "\n" to make new lines): */

var a = 3;
var b = 5;
var c;
alert ("var a = 3;\nvar b = 5;\nvar c;\n---------\n\n" +
       "a + b = " + (a + b) + "\n" +
       "a - b = " + (a - b) + "\n" +
       "a * b = " + (a * b) + "\n" +
       "a / b = " + (a / b) + "\n" +
       "a % b = " + (a % b) + "\n" +
       "(a += b) = " + (a += b) + "\n" +
       "(a -= b) = " + (a -= b) + "\n" +
       "(a *= b) = " + (a *= b) + "\n" +
       "(a /= b) = " + (a /= b) + "\n" +
       "(a %= b) = " + (a %= b) + "\n" +
       "(a == b) = " + (a == b) + "\n" +
       "(a != b) = " + (a != b) + "\n" +
       "(a > b) = " + (a > b) + "\n" +
       "(a < b) = " + (a < b) + "\n" +
       "(!a && !c) = " + (!a && !c) + "\n" +
       "(!a || !c) = " + (!a || !c) + "\n"); 

// TASK 2

/* Declare the variable first_name and assign it with the value of your first name;
Declare the variable last_name and assign it with the value of your last name;
Declare the variable email and assign it with the value of your email;
Declare the variable output;
Create the expression concatenating variables first_name, last_name, email and string literals needed to complete the sentence reading: "My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";
Assign output with gotten expression;
Alert output. */

var first_name = "Sarah";
var last_name = "Zaman";
var email = "zama0029@algonquinlive.com";
var output = "My name is" + " " + first_name + " " + last_name + "." + " " + "You can contact me at" + " " + email + ".";
alert(output);

