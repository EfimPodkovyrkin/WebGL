let canvas = document.getElementById("c");
let gl = canvas.getContext("webgl2");
console.log(gl);
if(!gl) {
    console.log("no webgl2");
}
