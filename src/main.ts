

window.onload = () => {
    var clickPoint = new math.Point(-1,-1);
    var isMouseDown = false;

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
    textField01.setSize(30);

    var image01 = new Bitmap("src/timg.jpg");



    stage.addChild(image01);
    stage.addChild(textField01);

    // stage.alpha = 0.8;
    // image01.alpha = 0.4;
    image01.x = 100;
    textField01.y = 50;
    // image01.scaleY = 2;
    // image01.rotation = 30;
    // textField01.alpha = 0.8;
    // textField01.scaleX = 3;

    window.onmousedown = (e) =>{
        let x = e.offsetX - 3;
        let y = e.offsetY - 3;
        clickPoint.x = x;
        clickPoint.y = y;
        let type = TouchEventsType.MOUSEDOWN;
        stage.hitTest(x,y,type);
        isMouseDown = true;
        console.log(type);
    }

    window.onmouseup = (e) =>{
        let x = e.offsetX - 3;
        let y = e.offsetY - 3;
        let type = TouchEventsType.MOUSEUP;
        if(clickPoint.x == x && clickPoint.y == y){
            type = TouchEventsType.CLICK;
        }
        stage.hitTest(x,y,type);
        console.log(type);
        clickPoint.x = -1;
        clickPoint.y = -1;
        isMouseDown = false;
    }

    window.onmousemove = (e) =>{
        if(isMouseDown){
            let x = e.offsetX - 3;
            let y = e.offsetY - 3;
            let type = TouchEventsType.MOUSEMOVE;
            console.log(type);
            stage.hitTest(x,y,type);
        }
    }


    setInterval(() => {
        context2D.save();
        context2D.clearRect(0,0,canvas.width,canvas.height);
        stage.draw(context2D);
        context2D.restore();
        // var rect = new Shape();
        // rect.graphics.beginFill("#FF0000",1);
        // rect.graphics.drawRect(0,300,100,100,context2D);
        // rect.graphics.endFill();
        // var circle = new Shape();
        // circle.graphics.beginFill("#00FF00",1);
        // circle.graphics.drawCircle(100,100,30,context2D);
        // circle.graphics.endFill();
        // var arc = new Shape();
        // arc.graphics.beginFill("#0000FF",1);
        // arc.graphics.drawArc(100,200,20,0,Math.PI,context2D);
        // arc.graphics.endFill();
    },100)

};





