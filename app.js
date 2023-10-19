// function to download file
function downloadfile() {
    var usertxt = document.getElementById("textarea1").value;
    var c = document.createElement("a");
    c.download = "yourfile" + ".txt";

    var txt = new Blob([usertxt], { type: "text/plain;charset=utf-8" });

    c.href = window.URL.createObjectURL(txt);
    c.click();
}

// function to clear text in the textarea
function cleartext() {
    document.getElementById("textarea1").value = "";
}

// function to open file
function openfile() {
    var reader = new FileReader();
    var file = document.getElementById('ifile').files[0];

    reader.onload = function(e) {
        document.getElementById('textarea1').value = e.target.result;
    }
    reader.readAsText(file);
}