class TouchEvents {
    type: number;
    func: Function;
    obj: any;
    capture = false;
    priority = 0;

    static MOUSEDOWN= 0;
    static MOUSEUP = 1;
    static CLICK = 2;

    constructor(type: number, func: Function, obj: any, capture?: boolean, priority?: number) {
        this.type = type;
        this.func = func;
        this.obj = obj;
        this.capture = capture || false;
        this.priority = priority || 0;
    }
}