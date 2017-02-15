var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TestField = (function (_super) {
    __extends(TestField, _super);
    function TestField() {
        _super.apply(this, arguments);
        this.text = "";
        this.textColor = "#000000";
        this.x = 0;
        this.y = 10;
        this.size = 18;
        this.typeFace = "Arial";
        this.textType = "18px Arial";
    }
    TestField.prototype.draw = function (context2D) {
        context2D.fillStyle = this.textColor;
        context2D.font = this.textType;
        context2D.fillText(this.text, this.x, this.y + this.size);
        //console.log("233");
    };
    TestField.prototype.setText = function (text) {
        this.text = text;
    };
    TestField.prototype.setX = function (x) {
        this.x = x;
    };
    TestField.prototype.setY = function (y) {
        this.y = y;
    };
    TestField.prototype.setTextColor = function (color) {
        this.textColor = color;
    };
    TestField.prototype.setSize = function (size) {
        this.size = size;
        this.textType = this.size.toString() + "px " + this.typeFace;
        console.log(this.textType);
    };
    TestField.prototype.setTypeFace = function (typeFace) {
        this.typeFace = typeFace;
        this.textType = this.size.toString() + "px " + this.typeFace;
        console.log(this.textType);
    };
    return TestField;
}(DisplayObjectContainer));
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        _super.apply(this, arguments);
        this.imageID = "";
        this.x = 0;
        this.y = 0;
    }
    Bitmap.prototype.draw = function (context2D) {
        var image = new Image();
        image.src = this.imageID;
        context2D.drawImage(image, this.x, this.y);
        //console.log("2333");
    };
    Bitmap.prototype.setImage = function (text) {
        this.imageID = text;
    };
    Bitmap.prototype.setX = function (x) {
        this.x = x;
    };
    Bitmap.prototype.setY = function (y) {
        this.y = y;
    };
    return Bitmap;
}(DisplayObjectContainer));
//# sourceMappingURL=drawing-api.js.map