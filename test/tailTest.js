const tail = require("../tail");
const assertEqual = require("../assertEqual");

const words = [];
let w = tail(words); // no need to capture the return value since we are not checking it
assertEqual(w.length, 0); // original array should still have 3 elements!

const words1 = ["Yo Yo", "Lighthouse", "Labs"];
tail(words1); // no need to capture the return value since we are not checking it
assertEqual(words1.length, 3); // original array should still have 3 elements!
