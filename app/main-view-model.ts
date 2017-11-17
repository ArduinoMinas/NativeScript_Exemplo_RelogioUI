import {Observable} from 'data/observable';
import * as intlModule from "nativescript-intl";

export class HelloWorldModel extends Observable {

    private _counter1: number;
    private _counter2: number;
    private _counter3: number;
    private _time: string;
    private _id1: number;
    private _id2: number;
    private _id3: number;
    private _id4: number;

    private _dateFormat: intlModule.DateTimeFormat;

    constructor() {

        super();

        // Initialize default values.
        this._counter1 = 0;
        this._counter2 = 0;
        this._counter3 = 0;

        this._dateFormat = new intlModule.DateTimeFormat('en-US', {'hour': 'numeric', 'minute': 'numeric', 'second': ''});

        this.updateTime();
    }

    updateCounter3() {
       this._counter3 ++; 
       this.notifyPropertyChange("counter3",this._counter3);
    }

    updateTime(){
      this._time = this.doDateFormat(new Date());
      this.notifyPropertyChange("time",this._time);
    }

    doDateFormat(dt){
      let fmtDt = this._dateFormat.format(dt);
      return fmtDt;
    }

    get time(){
      return this._time;
    }

    get counter1(): number{
        return this._counter1;
    }
    
    get counter3(): number{
        return this._counter3;
    }
    
    set counter1(value: number){
        this._counter1 = value;
       this.notifyPropertyChange("counter1",this._counter1);
   }
    
    get counter2(): number{
        return this._counter2;
    }
    
    set counter2(value: number){
        this._counter2 = value;
       this.notifyPropertyChange("counter2",this._counter2);
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
            }, 2);
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
            this._id4 = setInterval(()=>this.updateTime(),1000);
        }else{
            clearTimeout(this._id4);
            this._id4 = null;
        }
        console.log("onTap");
    }
}