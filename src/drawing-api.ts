interface Drawable{
    render(context2D : CanvasRenderingContext2D);
}

class DisplayObject implements Drawable{
    parent : DisplayObjectContainer;
    alpha = 1;
    globalAlpha = 1;
    scalX = 1;
    scalY = 1;

    draw(context2D : CanvasRenderingContext2D){
        if(this.parent){
            this.globalAlpha = this.parent.globalAlpha * this.alpha;
        }
        else{
            this.globalAlpha = this.alpha;
        }
        context2D.globalAlpha = this.globalAlpha;
        //console.log("Alpha:" + context2D.globalAlpha);
        this.render(context2D);
    }
    render(context2D : CanvasRenderingContext2D){}
}

class TestField extends DisplayObject{

    text = "";
    textColor = "#000000";
    x = 0;
    y = 8;
    size = 18;
    typeFace = "Arial";
    textType = "18px Arial";

    constructor(){
        super();
    }
    


    render(context2D : CanvasRenderingContext2D){
        context2D.fillStyle = this.textColor;
        context2D.font = this.textType;
        context2D.fillText(this.text,this.x,this.y + this.size);
        console.log("textAlpha:" + context2D.globalAlpha);
    }

    setText(text){
        this.text = text;
    }

    setX(x){
        this.x = x;
    }

    setY(y){
        this.y = y;
    }

    setTextColor(color){
        this.textColor = color;
    }

    setSize(size){
        this.size = size;
        this.textType = this.size.toString() + "px " + this.typeFace;
        console.log(this.textType);
    }

    setTypeFace(typeFace){
        this.typeFace = typeFace;
        this.textType = this.size.toString() + "px " + this.typeFace;
        console.log(this.textType);
    }
}

class Bitmap extends DisplayObject{

    imageID = "";
    x = 0;
    y = 0;
    imageCache;

    constructor(){
        super();
    }

    render(context2D : CanvasRenderingContext2D){
        var image = new Image();
        image.src = this.imageID;
        this.imageCache = image;
        if(this.imageCache){
            context2D.drawImage(this.imageCache,this.x,this.y);
        }
        else{
            image.onload = () =>{
                context2D.drawImage(image,this.x,this.y);
            }
        }
        console.log("imageAlpha:" + context2D.globalAlpha);
    }

    setImage(text){
        this.imageID = text;
    }

    setX(x){
        this.x = x;
    }

    setY(y){
        this.y = y;
    }

    

}

class Shape extends DisplayObjectContainer{

    graphics : Graphics = new Graphics();

}

class Graphics extends DisplayObjectContainer{

    fillColor = "#000000";
    alpha = 1;
    globalAlpha = 1;
    strokeColor = "#000000";
    lineWidth = 1;
    lineColor = "#000000";
    

    beginFill(color,alpha){
        this.fillColor = color;
        this.alpha = alpha;
    }

    endFill(){
        this.fillColor = "#000000";
        this.alpha = 1;
    }

    
    drawRect(x1,y1,x2,y2,context2D : CanvasRenderingContext2D){
        context2D.globalAlpha = this.alpha;
        context2D.fillStyle = this.fillColor;
        context2D.fillRect(x1,y1,x2,y2);
        context2D.fill();
    }

    drawCircle(x,y,rad,context2D : CanvasRenderingContext2D){
        context2D.fillStyle = this.fillColor;
        context2D.globalAlpha = this.alpha;
        context2D.beginPath();
        context2D.arc(x,y,rad,0,Math.PI*2,true);
        context2D.closePath();
        context2D.fill();
    }

    drawArc(x,y,rad,beginAngle,endAngle,context2D : CanvasRenderingContext2D){
        context2D.strokeStyle = this.strokeColor;
        context2D.globalAlpha = this.alpha;
        context2D.beginPath();
        context2D.arc(x,y,rad,beginAngle,endAngle,true);
        context2D.closePath();
        context2D.stroke();
    }
    
}