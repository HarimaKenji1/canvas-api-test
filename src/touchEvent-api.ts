enum TouchEventsType{
    MOUSEDOWN = 0,
    MOUSEUP = 1,
    CLICK = 2,
    MOUSEMOVE = 3
}

class TouchEventService{
    private static instance;
    private performerList : DisplayObject[] = [];
    static currentType : TouchEventsType;
    static stageX = -1;
    static stageY = -1;
    static getInstance() : TouchEventService{
        if(TouchEventService.instance == null){
            TouchEventService.instance = new TouchEventService();
        }
        return this.instance;
    }

    addPerformer(performer : DisplayObject){
        this.performerList.push(performer);
    }

    clearList(){
        this.performerList = [];
    }

    toDo(){
        //console.log(this.performerList);
        for(var i = 0;i <= this.performerList.length - 1;i++){      //捕获
            for(var listner of this.performerList[i].listeners){
                if(listner.type == TouchEventService.currentType){
                    if(listner.capture){
                        listner.func();
                        continue;
                    }
                }
            }
        }

        for(var i = this.performerList.length - 1;i >= 0;i--){      //冒泡
            for(var listner of this.performerList[i].listeners){
                if(listner.type == TouchEventService.currentType){
                    if(!listner.capture){
                        
                        //console.log("2");
                        listner.func();
                        continue;
                    }
                }
            }
        }
        this.clearList();
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