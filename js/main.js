var copy_btn = document.getElementById("copy-btn");
var encrypt_btn = document.getElementById("encrypt-btn");
var decrypt_btn = document.getElementById("decrypt-btn");
var encrypt_text = document.getElementById("encrypt-txt");
var result_text = document.getElementById("result-txt");

encrypt_btn.addEventListener("click", function () {
  var txt = encrypt_text.value;
  var rs = encrypt(txt);
  displayText(rs);
});

decrypt_btn.addEventListener("click", function () {
  var txt = encrypt_text.value;
  var rs = decrypt(txt);
  displayText(rs);
});

copy_btn.addEventListener("click", function () {
  var text_to_copy = result_text.value;
  copyToClipboard(text_to_copy);
});

function copyToClipboard(text) {
  encrypt_text.value = text;
}

function displayText(txt) {
  result_text.value = txt;
}

function encrypt(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var char = text.charAt(i);
    switch (char) {
      case "a":
        char = "ai";
        result += char;
        break;
      case "e":
        char = "enter";
        result += char;
        break;
      case "i":
        char = "imes";
        result += char;
        break;
      case "o":
        char = "ober";
        result += char;
        break;

      case "u":
        char = "ufat";
        result += char;
        break;
      default:
        result += char;
    }
  }
  return result;
}

function decrypt(text) {
  var result = "";
  const array = text.split(" ");
  for (i = 0; i < array.length; i++) {
    var current = array[i];

    for (j = 0; j < 5; j++) {
      if (current.match(/ai/)) {
        current = current.replace(/ai/, "a");
      }
      if (current.match(/enter/)) {
        current = current.replace(/enter/, "e");
      }
      if (current.match(/imes/)) {
        current = current.replace(/imes/, "i");
      }
      if (current.match(/ober/)) {
        current = current.replace(/ober/, "o");
      }
      if (current.match(/ufat/)) {
        current = current.replace(/ufat/, "u");
      } else {
        console.log("not found");
      }
    }
    result += current + " ";
  }
  return result;
}
