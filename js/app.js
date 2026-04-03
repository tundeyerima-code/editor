let editor = CodeMirror.fromTextArea(
document.getElementById("editor"),
{
lineNumbers:true,
mode:"htmlmixed",
theme:"default"
});

editor.setValue(`<!DOCTYPE html>
<html>
<head>
<style>
body{font-family:Arial;}
</style>
</head>
<body>

<h1>Hello Developer 🚀</h1>

</body>
</html>`);

function runCode(){
let code = editor.getValue();
document.getElementById("preview").srcdoc = code;
}

function toggleTheme(){
document.body.classList.toggle("light");
}
