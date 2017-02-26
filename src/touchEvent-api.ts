enum TouchEventsType{
    MOUSEDOWN = 0,
    MOUSEUP = 1,
    CLICK = 2,
    MOUSEMOVE = 3
}

class TouchEventService{
    private static instance;
    private touchEventList : TouchEvents[] = [];
    static getInstance() : TouchEventService{
        if(TouchEventService.instance == null){
            TouchEventService.instance = new TouchEventService();
        }
        return this.instance;
    }

    addTouchEvent(touchEvent : TouchEvents){
        this.touchEventList.push(touchEvent);
    }

    clearList(){
        this.touchEventList = [];
    }

    toDo(){
        for(var event of this.touchEventList){
            event.func();
        }
    }
}

class TouchEvents {
    type: TouchEventsType;
    func: Function;
    obj: any;
    capture = false;
    priority = 0;


    constructor(type: TouchEventsType, func: Function, obj: any, capture?: boolean, priority?: number) {
        this.type = type;
        this.func = func;
        this.obj = obj;
        this.capture = capture || false;
        this.priority = priority || 0;
    }
}