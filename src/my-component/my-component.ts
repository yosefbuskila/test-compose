
export class MyComponent {
    constructor() { console.log("constructor"); }
    public determineActivationStrategy()
	{
		console.log("determineActivationStrategy" );
		return "replace";
	}
    myNum:number;
    activate(myNum) {
        console.log("activate", this);
        this.myNum = myNum;
    }


    canDeactivate() {
        console.log("canDeactivate");
        return true;
    }
    deactivate() {
        console.log("deactivate");
    }
    created() {
        console.log("is same instance as the previous:",window["lastInstance"] === this )
        window["lastInstance"]=this;
        console.log("created");
    }
    detached() {
        console.log("detached", this);
    }
}
