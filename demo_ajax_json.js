
"use strict";

const fs = require('fs');

const data = JSON.parse(fs.readFileSync("file.json"));
const nums = data.id.split('.');
++nums[2];
data.id = nums.join('.');

fs.writeFileSync("file.json", JSON.stringify(data, null, 4));


var rootRef = firebase.database().ref();

function getData() {
    var data = {
        "start": {
          "count": "5",
          "title": "start",
          "priorities": [{
            "txt": "Work"
          }, {
            "txt": "Time Sense"
          }, {
            "txt": "Dicipline"
          }, {
            "txt": "Confidence"
          }, {
            "txt": "CrossFunctional"
          }]
        }
      }
    alert(data);
}

