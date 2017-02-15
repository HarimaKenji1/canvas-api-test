

window.onload = () => {
    var canvas = document.getElementById("test") as HTMLCanvasElement;
    var context2D = canvas.getContext("2d");
    // context2D.fillStyle = "#FF0000";
    // context2D.rect(0,0,100,100);
    // context2D.fill();
    // context2D.stroke();
    //var image = new Image();
    //image.src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487731042&di=12ec67a86c85dfebde95dc3104ce8974&imgtype=jpg&er=1&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F280f1ffb730da4a954c2a5d1d928e1497148ac9e.jpg";
    // image.src = "src/timg.jpg";
    // context2D.drawImage(image,0,0);
    // image.onload = () =>{
    // context2D.clearRect(0,0,canvas.width,canvas.height);
    // context2D.drawImage(image,0,0);
    // }

    var stage = new DisplayObjectContainer();
    var textField01 = new TestField();
    textField01.setText("Hello world");
    textField01.setTextColor("#00FF00");
    textField01.setX(0);
    textField01.setSize(30);

    var image01 = new Bitmap();
    image01.setImage("src/timg.jpg");

    


    //stage.addChild(image01);
    //stage.addChild(textField01);

    var shape = new Shape();
    shape.graphics.beginFill("#FF0000",1);
    shape.graphics.drawRect(0,0,100,100,context2D);
    shape.graphics.endFill();

    shape.graphics.drawCircle(50,50,20,context2D);

    setInterval(() => {
        context2D.clearRect(0,0,canvas.width,canvas.height);
        stage.draw(context2D);
    },100)
};

class DisplayObjectContainer implements Drawable{
    childArray : Drawable[] = [];

    addChild(child : Drawable){
        this.childArray.push(child);
    }

    draw(context2D : CanvasRenderingContext2D){
        for(let drawble of this.childArray){
            drawble.draw(context2D);
        }
    }
}



