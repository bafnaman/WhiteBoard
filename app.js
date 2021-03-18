const paintCanvas = document.querySelector(".js-paint");
const context = paintCanvas.getContext("2d");
context.lineCap = "";

//PICKS THE COLOR FROM THE COLOR PICKER
const colorPicker = document.querySelector(".js-color-picker");
colorPicker.addEventListener("change", event=>{
    context.strokeStyle = event.target.value;
})

//change the range size and display the px value in label
const lineWidthRange = document.querySelector(".js-line-range");
const lineWidthLabel = document.querySelector(".js-range-value");

lineWidthRange.addEventListener("input", event=>{
    const width = event.target.value;
    lineWidthLabel.innerHTML = width;
    context.lineWidth = width;
})

//drawing the canvas area
let x = 0, y = 0;

let isMouseDown = false;

const startDrawing=(event)=>{
    isMouseDown = true;
    [x,y] = [event.offsetX,event.offsetY]
}

const stopDrawing=()=>{
    isMouseDown = false;
}

const drawLine=(event)=>{
    if(isMouseDown){
        const newX=event.offsetX;
        const newY=event.offsetY;
        context.beginPath();
        context.moveTo(x,y);
        context.lineTo(newX,newY);
        context.stroke();
        x=newX;
        y=newY;
    }
}

paintCanvas.addEventListener("mousedown", startDrawing);
paintCanvas.addEventListener("mousemove", drawLine);
paintCanvas.addEventListener("mouseup", stopDrawing);
paintCanvas.addEventListener("mouseout", stopDrawing);
