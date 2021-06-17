canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent="empty";
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.fill();
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {  
    color = document.getElementById("color").value;
    console.log(color);
    Radius=document.getElementById("Radius").value;
    rect(mouse_x, mouse_y);
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e) {
    current_pos_of_mouse_x=e.clientX-canvas.offSetLeft;
    current_pos_of_mouse_y=e.clientY-canvas.offSetTop;
    if (mouseEvent=="mouseDown") {
        console.log("Current positions of X and Y positions=");
        console.log("x="+current_pos_of_mouse_x+"Y="+current_pos_of_mouse_y);
        ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(current_pos_of_mouse_x, mouse_y, Radius,0, 2*Math.PI);
ctx.fill();
ctx.stroke();
    }
}

canvas.addEventListener("mouseup", mymouseup);

function mymouseup() {
mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave", mymouseleave);

function mymouseleave() {
mouseEvent="mouseleave";
}

function clear_canvas() {
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
}