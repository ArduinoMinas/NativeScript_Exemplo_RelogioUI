import {Observable} from 'data/observable';

export class HelloWorldModel extends Observable {

    private _counter1: number;
    private _counter2: number;
    private _counter3: number;
    private _id1: number;
    private _id2: number;
    private _id3: number;
    private _id4: number;

    constructor() {
        super();

        // Initialize default values.
        this._counter1 = 0;
        this._counter2 = 0;
        this._counter3 = 0;
    }

    updateCounter3() {
       this._counter3 ++; 
       this.notifyPropertyChange("counter3",this._counter3);
    }

    updateTime(){
        this.notifyPropertyChange("time",this.time);
    }

    get time(): Date{
        return new Date();
    }
    get counter1(): number{
        return this._counter1;
    }
    
    get counter3(): number{
        return this._counter3;
    }
    
    set counter1(value: number){
        this._counter1 = value;
        this.notifyPropertyChange("counter1",value);
   }
    
    get counter2(): number{
        return this._counter2;
    }
    
    set counter2(value: number){
        this._counter2 = value;
        this.notifyPropertyChange("counter2",value);
    }
    
    public onTap() {
        if(this._id1 == null){
            this._id1 = setInterval(()=>{
                this.counter1++
            }, 1);
        }else{
            clearTimeout(this._id1);
            this._id1 = null;
        }
        if(this._id2 == null){
            this._id2 = setInterval(()=>{
                this.counter2++
            }, 3);
        }else{
            clearTimeout(this._id2);
            this._id2 = null;
        }
        if(this._id3 == null){
            this._id3 = setInterval(()=>this.updateCounter3(),9);
        }else{
            clearTimeout(this._id3);
            this._id3 = null;
        }
         if(this._id4 == null){
            this._id4 = setInterval(()=>this.updateTime(),1);
        }else{
            clearTimeout(this._id4);
            this._id4 = null;
        }
        console.log("onTap");

    }
}