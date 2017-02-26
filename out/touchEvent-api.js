var TouchEventsType;
(function (TouchEventsType) {
    TouchEventsType[TouchEventsType["MOUSEDOWN"] = 0] = "MOUSEDOWN";
    TouchEventsType[TouchEventsType["MOUSEUP"] = 1] = "MOUSEUP";
    TouchEventsType[TouchEventsType["CLICK"] = 2] = "CLICK";
    TouchEventsType[TouchEventsType["MOUSEMOVE"] = 3] = "MOUSEMOVE";
})(TouchEventsType || (TouchEventsType = {}));
var TouchEventService = (function () {
    function TouchEventService() {
        this.touchEventList = [];
    }
    TouchEventService.getInstance = function () {
        if (TouchEventService.instance == null) {
            TouchEventService.instance = new TouchEventService();
        }
        return this.instance;
    };
    TouchEventService.prototype.addTouchEvent = function (touchEvent) {
        this.touchEventList.push(touchEvent);
    };
    TouchEventService.prototype.clearList = function () {
        this.touchEventList = [];
    };
    TouchEventService.prototype.toDo = function () {
        for (var _i = 0, _a = this.touchEventList; _i < _a.length; _i++) {
            var event = _a[_i];
            event.func();
        }
    };
    return TouchEventService;
}());
var TouchEvents = (function () {
    function TouchEvents(type, func, obj, capture, priority) {
        this.capture = false;
        this.priority = 0;
        this.type = type;
        this.func = func;
        this.obj = obj;
        this.capture = capture || false;
        this.priority = priority || 0;
    }
    return TouchEvents;
}());
//# sourceMappingURL=touchEvent-api.js.map