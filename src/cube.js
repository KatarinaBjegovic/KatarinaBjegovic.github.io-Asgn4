class Cube{
    constructor(){
        this.type = 'cube';
        //this.position = [0.0,0.0,0.0];
        this.color = [1,1,1,1];
        //this.size = 5.0;
        //this.segments = 10;
        this.textureNum = -2;
        this.matrix = new Matrix4()
        this.normalMatrix = new Matrix4();
        this.shiny = 0;  
    }
    render() {
        //var xy = this.position;
        var rgba = this.color;
        gl.uniform1i(u_whichTexture, this.textureNum);
        gl.uniform1i(u_shiny, this.shiny);
        // Pass the color of a point to u_FragColor variable 
        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
        // front of cube
        drawTriangle3DUVNormal([0,0,0, 1,0,0, 1,1,0], [0,0, 1,0, 1,1], [0,0,1, 0,0,1, 0,0,1]);
        drawTriangle3DUVNormal([0,0,0, 1,1,0, 0,1,0], [0,0, 1,1, 0,1], [0,0,1, 0,0,1, 0,0,1]);

        // Top face

        drawTriangle3DUVNormal([0,1,0, 1,1,0, 1,1,1], [0,0, 1,0, 1,1], [0,1,0, 0,1,0, 0,1,0]);    // First triangle
        drawTriangle3DUVNormal([0,1,0, 1,1,1, 0,1,1], [0,0, 1,1, 0,1], [0,1,0, 0,1,0, 0,1,0]);    // Second triangle

        // Back face
        drawTriangle3DUVNormal([0,0,1, 1,0,1, 1,1,1], [1,0, 0,0, 0,1], [0,0,1, 0,0,1, 0,0,1]); 
        drawTriangle3DUVNormal([0,0,1, 1,1,1, 0,1,1], [1,0, 0,1, 1,1], [0,0,1, 0,0,1, 0,0,1]);

        // Bottom face

        drawTriangle3DUVNormal([0,0,0, 1,0,1, 1,0,0], [0,1, 1,0, 1,1], [0,-1, 0,   0,-1,0, 0,-1,0]);
        drawTriangle3DUVNormal([0,0,0, 0,0,1, 1,0,1], [0,1, 0,0, 1,0], [0,-1, 0,   0,-1,0, 0,-1,0]);

        // Right face

        drawTriangle3DUVNormal([1,0,0, 1,1,0, 1,1,1], [0,0, 0,1, 1,1], [1,0,0, 1,0,0, 1,0,0]);
        drawTriangle3DUVNormal([1,0,0, 1,1,1, 1,0,1], [0,0, 1,1, 1,0], [1,0,0, 1,0,0, 1,0,0]);

        // Left face

        drawTriangle3DUVNormal([0,0,0, 0,1,0, 0,1,1], [1,0, 1,1, 0,1], [-1,0,0, -1,0,0, -1,0,0]);
        drawTriangle3DUVNormal([0,0,0, 0,1,1, 0,0,1], [1,0, 0,1, 0,0], [-1,0,0, -1,0,0, -1,0,0]);
    }    
}



// verticies in single buffer if i wanted to worry abotu performance
