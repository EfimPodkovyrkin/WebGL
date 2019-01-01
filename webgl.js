let canvas = document.getElementById("c");
let gl = canvas.getContext("webgl2");
if(!gl) {
    console.log("no webgl2");
}
let vertex = document.getElementById("vertex").innerHTML;
let fragment = document.getElementById("fragment").innerHTML;

function createShader(gl, type, source) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success)
        return shader;
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}
function createProgram(gl, vertex, fragment) {
    let programm = gl.createProgram();
    gl.attachShader(programm, vertex);
    gl.attachShader(programm, fragment);
    gl.linkProgram(programm);
    let success = gl.getProgramParameter(programm, gl.LINK_STATUS);
    if (success)
        return programm;
    console.log(gl.getProgramInfoLog(programm));
    gl.deleteProgram(programm);
}

//init
let vertexShader = createShader(gl, gl.VERTEX_SHADER, vertex);
let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragment);
let program = createProgram(gl, vertexShader, fragmentShader);

let positionAttributeLocation = gl.getAttribLocation(program, "a_position");
let positionBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

let positions = [
    -1.0, -1.0,
    0.5, 0.0,
    0.0, 0.7,
    1.0, 1.0,
    0.5, 0.0,
    0.0, 0.7
];
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

let vao = gl.createVertexArray();
gl.bindVertexArray(vao);
gl.enableVertexAttribArray(positionAttributeLocation);

let size = 2;
let type = gl.FLOAT;
let normalize = false;
let stride = 0;
let offset = 0;
gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);

// webglUtils.resizeCanvasToDisplaySize(gl.canvas);

gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.useProgram(program);

gl.bindVertexArray(vao);
let primitiveType = gl.TRIANGLES;
offset = 0;
count = 6;
gl.drawArrays(primitiveType, offset, count);