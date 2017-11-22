let isValid = false;
let imageDownloadable = false;
let file;
let drawMethod = "drawMethod1";
let json;

$(document).ready(function()
{
  
});

// check if a correct file type is selected
$("#fileinput").change(function()
{
  if (this.value.substr(this.value.length - 3) != ".py" && this.value.substr(this.value.length - 4) != ".ppc") {
    isValid = false;
    alert("Not a .py file!");
  } else {
    //isValid = true;
    file = this.value;
    fileName = file.split('.')[0];
    fileName = fileName.split("C:\\fakepath\\")[1];
    file = this.files[0];

    if (this.value.substr(this.value.length - 3) == ".py")
    {
      // parser.js
      //json = parse();
      var reader = new FileReader();
      reader.onload = function (progressEvent) {
        var lines = this.result.split("\n");
        lines = clean(lines);
        json = parserFunction(lines);
        isValid = true;
      }
    }
    else
    {
      var reader = new FileReader();
      reader.onload = function (progressEvent) {
        // Entire file
        json = JSON.parse(this.result);
        isValid = true;
      }
    }
  };
  reader.readAsText(file);
});
