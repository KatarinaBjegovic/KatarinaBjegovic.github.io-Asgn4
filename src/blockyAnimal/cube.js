class Cube{
    constructor(){
        this.type = 'cube';
        //this.position = [0.0,0.0,0.0];
        this.color = [0.5,0.5,0.5];
        //this.size = 5.0;
        //this.segments = 10;
        this.matrix = new Matrix4()
        this.textureNum = 0;
    }
    render() {
        //var xy = this.position;
        var rgba = this.color;
        //var size = this.size;
        //gl.vertexAttrib3f(a_position, xy[0], xy[1], 0.0);
        // gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);
        // //gl.uniform1f(u_size, size);

        gl.uniform1i(u_whichTexture, this.textureNum);

        gl.uniform4f(u_FragColor, rgba[0], rgba[1], rgba[2], rgba[3]);

        gl.uniformMatrix4fv(u_ModelMatrix, false, this.matrix.elements);
        // front of cube
        drawTriangle3DUVNormal(
                [0,0,0,  1,1,0,  1,0,0],
                [0,0,  1,1,  1,0],
                [0,0,-1, 0,0,-1, 0,0,-1]
        );

        drawTriangle3DUVNormal(
                [0,0,0,  0,1,0,  1,1,0],
                [0,0, 0,1, 1,1],
                [0,0,-1, 0,0,-1, 0,0,-1] 
        );
        
        gl.uniform4f(u_FragColor, rgba[0]*0.9, rgba[1]*0.9, rgba[2]*0.9, rgba[3]);
        //top of cube

        drawTriangle3DUVNormal(
                [0,1,0,  0,1,1,  1,1,1],
                [0,0,  0,1,  1,1] ,
                [0,1,0,  0,1,0,  0,1,0] 
        );

        drawTriangle3DUVNormal(
                [0,1,0,  1,1,1,  1,1,0],
                [0,0,  1,1,  1,0],
                [0,1,0,  0,1,0,  0,1,0] 
        );


        gl.uniform4f(u_FragColor, rgba[0]*0.8, rgba[1]*0.8, rgba[2]*0.9, rgba[3]);
        //right of cube 
        drawTriangle3DUVNormal(
                [1,1,0,  1,1,1,  1,0,0],
                [0,0,  0,1,  1,1] ,
                [1,0,0,  1,0,0,  1,0,0]
        );

        drawTriangle3DUVNormal(
                [1,0,0,  1,1,1,  1,0,1],
                [0,0,  1,1,  1,0],
                [1,0,0,  1,0,0,  1,0,0] 
        );

        gl.uniform4f(u_FragColor, rgba[0]*0.7, rgba[1]*0.7, rgba[2]*0.7, rgba[3]);
        //left of cube 
        drawTriangle3DUVNormal(
                [0,1,0,  0,1,1,  0,0,0],
                [0,0,  0,1,  1,1] ,
                [-1,0,0,  -1,0,0,  -1,0,0] 
        );

        drawTriangle3DUVNormal(
                [0,0,0,  0,1,1,  0,0,1],
                [0,0,  1,1,  1,0],
                [-1,0,0,  -1,0,0,  -1,0,0] 
        );

        gl.uniform4f(u_FragColor, rgba[0]*0.6, rgba[1]*0.6, rgba[2]*0.6, rgba[3]);

        //bottom of cube 
        drawTriangle3DUVNormal(
                [0,0,0,  0,0,1,  1,0,1],
                [0,0,  0,1,  1,1] ,
                [0,-1,0,  0,-1,0,  0,-1,0] 
        );

        drawTriangle3DUVNormal(
                [0,0,0,  1,0,1,  1,0,0],
                [0,0,  1,1,  1,0],
                [0,-1,0,  0,-1,0,  0,-1,0]
        );

        gl.uniform4f(u_FragColor, rgba[0]*0.5, rgba[1]*0.5, rgba[2]*0.5, rgba[3]);
        gl.uniform1i(u_whichTexture, this.textureNum);
        //back of cube 
        drawTriangle3DUVNormal(
                [0,0,1,  1,1,1,  1,0,1],
                [0,0,  0,1,  1,1] ,
                [0,0,1,  0,0,1,  0,0,1] // ?
        );

        drawTriangle3DUVNormal(
                [0,0,1,  0,1,1,  1,1,1],
                [0,0,  1,1,  1,0],
                [0,0,1,  0,0,1,  0,0,1] //??
        );

    }
}
