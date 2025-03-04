class Triangle{
    constructor(){
        this.type = 'triangle';
        this.position = [0.0,0.0,0.0];
        this.color = [1,1,1,1];
        this.size = 5.0;
    }
    render() {
        var xy = this.position;
        var rgba = this.color;
        var size = this.size;
        //gl.vertexAttrib3f(a_position, xy[0], xy[1], 0.0);
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        gl.uniform1f(u_size, 4.0);

        var d = this.size/200.0; 
        drawTriangle([xy[0], xy[1], xy[0]+d, xy[1], xy[0], xy[1]+d]); 
    }
}



function drawTriangle(verticies){
    var n = 3;

    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create buffer object');
        return -1;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticies), gl.DYNAMIC_DRAW);

    gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0,0);

    gl.enableVertexAttribArray(a_position);

    gl.drawArrays(gl.TRIANGLES, 0, n);
}



function drawTriangle3D(verticies){
    var n = 3;

    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create buffer object');
        return -1;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticies), gl.DYNAMIC_DRAW);

    gl.vertexAttribPointer(a_position, 3, gl.FLOAT, false, 0,0);

    gl.enableVertexAttribArray(a_position);

    gl.drawArrays(gl.TRIANGLES, 0, n);
}


function drawTriangle3DUV(verticies, uv){
    var n = 3;

    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
        console.log('Failed to create buffer object');
        return -1;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticies), gl.DYNAMIC_DRAW);

    gl.vertexAttribPointer(a_position, 3, gl.FLOAT, false, 0,0);

    gl.enableVertexAttribArray(a_position);

    var uvBuffer = gl.createBuffer();
    if (!uvBuffer) {
        console.log("Failed to create rthe buffer object");
        return -1;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uv), gl.DYNAMIC_DRAW);
    
    gl.vertexAttribPointer(a_UV, 2, gl.FLOAT, false, 0,0);

    gl.enableVertexAttribArray(a_UV);



    gl.drawArrays(gl.TRIANGLES, 0, n);
}

function drawTriangle3DUVNormal(vertices, uv,normals){
    var n = vertices.length/3; 
  
  
  // Create a buffer object
  var vertexBuffer = gl.createBuffer();
  if (!vertexBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }
  
  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.DYNAMIC_DRAW);
  
  //var a_position = gl.getAttribLocation(gl.program, 'a_position');
  // if (a_position < 0) {
  //  console.log('Failed to get the storage location of a_position');
   // return -1;
  // }
  // Assign the buffer object to a_position variable
  gl.vertexAttribPointer(a_position, 3, gl.FLOAT, false, 0, 0);
  
  // Enable the assignment to a_position variable
  gl.enableVertexAttribArray(a_position);
  
  
  // Create a buffer object
  var uvBuffer = gl.createBuffer();
  if (!uvBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }
  
  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uv), gl.DYNAMIC_DRAW);
  
  //var a_position = gl.getAttribLocation(gl.program, 'a_position');
  // if (a_position < 0) {
  //  console.log('Failed to get the storage location of a_position');
   // return -1;
  // }
  // Assign the buffer object to a_position variable
  gl.vertexAttribPointer(a_UV, 2, gl.FLOAT, false, 0, 0);
  
  // Enable the assignment to a_position variable
  gl.enableVertexAttribArray(a_UV);
  
  //gl.drawArrays(gl.TRIANGLES, 0, n);
  
  
  //normals 
  
  var normalBuffer = gl.createBuffer();
  if (!normalBuffer) {
    console.log('Failed to create the buffer object');
    return -1;
  }
  
  // Bind the buffer object to target
  gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
  // Write date into the buffer object
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.DYNAMIC_DRAW);
  
  //var a_position = gl.getAttribLocation(gl.program, 'a_position');
  // if (a_position < 0) {
  //  console.log('Failed to get the storage location of a_position');
   // return -1;
  // }
  // Assign the buffer object to a_position variable
  gl.vertexAttribPointer(a_Normal, 3, gl.FLOAT, false, 0, 0);
  
  // Enable the assignment to a_position variable
  gl.enableVertexAttribArray(a_Normal);
  
  gl.drawArrays(gl.TRIANGLES, 0, n);
  
  //vertexBuffer = null; 
  
  }