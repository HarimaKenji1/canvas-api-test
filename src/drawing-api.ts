interface Drawable{
    draw(context2D : CanvasRenderingContext2D);
}

class TestField extends DisplayObjectContainer implements Drawable{

    text = "";
    textColor = "#000000";
    x = 0;
    y = 10;
    size = 18;
    typeFace = "Arial";
    textType = "18px Arial";

    draw(context2D : CanvasRenderingContext2D){
        context2D.fillStyle = this.textColor;
        context2D.font = this.textType;
        context2D.fillText(this.text,this.x,this.y + this.size);
        //console.log("233");
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

class Bitmap extends DisplayObjectContainer implements Drawable{

    imageID = "";
    x = 0;
    y = 0;

    draw(context2D : CanvasRenderingContext2D){
        var image = new Image();
        image.src = this.imageID;
        context2D.drawImage(image,this.x,this.y);
        //console.log("2333");
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