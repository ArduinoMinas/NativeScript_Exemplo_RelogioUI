"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var intlModule = require("nativescript-intl");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        // Initialize default values.
        _this._counter1 = 0;
        _this._counter2 = 0;
        _this._counter3 = 0;
        _this._message = "";
        _this._dateFormat = new intlModule.DateTimeFormat('en-US', { 'hour': 'numeric', 'minute': 'numeric', 'second': 'numeric', 'hour12': 'true' });
        _this.updateTime();
        return _this;
    }
    HelloWorldModel.prototype.updateCounter3 = function () {
        this._counter3++;
        this.notifyPropertyChange("counter3", this._counter3);
    };
    HelloWorldModel.prototype.updateTime = function () {
        this._time = this.doDateFormat(new Date());
        this.notifyPropertyChange("time", this._time);
    };
    HelloWorldModel.prototype.doDateFormat = function (dt) {
        var fmtDt = this._dateFormat.format(dt);
        return fmtDt;
    };
    Object.defineProperty(HelloWorldModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelloWorldModel.prototype, "time", {
        get: function () {
            return this._time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelloWorldModel.prototype, "counter1", {
        get: function () {
            return this._counter1;
        },
        set: function (value) {
            this._counter1 = value;
            this.notifyPropertyChange("counter1", this._counter1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelloWorldModel.prototype, "counter3", {
        get: function () {
            return this._counter3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelloWorldModel.prototype, "counter2", {
        get: function () {
            return this._counter2;
        },
        set: function (value) {
            this._counter2 = value;
            this.notifyPropertyChange("counter2", this._counter2);
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldModel.prototype.onTap = function () {
        var _this = this;
        var countLocal = 0;
        if (this._id1 == null) {
            this._id1 = setInterval(function () {
                _this.counter1++;
            }, 1);
        }
        else {
            clearTimeout(this._id1);
            this._id1 = null;
        }
        if (this._id2 == null) {
            this._id2 = setInterval(function () {
                _this.counter2++;
            }, 2);
        }
        else {
            clearTimeout(this._id2);
            this._id2 = null;
        }
        if (this._id3 == null) {
            this._id3 = setInterval(function () { return _this.updateCounter3(); }, 9);
        }
        else {
            clearTimeout(this._id3);
            this._id3 = null;
        }
        if (this._id4 == null) {
            this._id4 = setInterval(function () { return _this.updateTime(); }, 1000);
        }
        else {
            clearTimeout(this._id4);
            this._id4 = null;
        }
        if (this._id5 == null) {
            this._id5 = setInterval(function () {
                countLocal++;
                _this._message = "Contador Local: ".concat(countLocal.toString());
                _this.notifyPropertyChange("message", _this._message);
            });
        }
        else {
            clearTimeout(this._id5);
            this._id5 = null;
        }
        console.log("onTap");
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLDhDQUFnRDtBQUVoRDtJQUFxQyxtQ0FBVTtJQWtCM0M7UUFBQSxZQUVJLGlCQUFPLFNBWVY7UUFWRyw2QkFBNkI7UUFDN0IsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFbkIsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFFbkIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFFM0ksS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztJQUN0QixDQUFDO0lBRUQsd0NBQWMsR0FBZDtRQUNHLElBQUksQ0FBQyxTQUFTLEVBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxFQUFFO1FBQ2IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFB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LENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUNwQixVQUFVLEVBQUcsQ0FBQztnQkFDZCxLQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDakUsS0FBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUF6SEQsQ0FBcUMsdUJBQVUsR0F5SDlDO0FBekhZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0ICogYXMgaW50bE1vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LWludGxcIjtcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSBfY291bnRlcjE6IG51bWJlcjtcbiAgICBwcml2YXRlIF9jb3VudGVyMjogbnVtYmVyO1xuICAgIHByaXZhdGUgX2NvdW50ZXIzOiBudW1iZXI7XG4gICAgXG4gICAgcHJpdmF0ZSBfbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfdGltZTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBfaWQxOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaWQyOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaWQzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaWQ0OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaWQ1OiBudW1iZXI7XG5cbiAgICBwcml2YXRlIF9kYXRlRm9ybWF0OiBpbnRsTW9kdWxlLkRhdGVUaW1lRm9ybWF0O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzLlxuICAgICAgICB0aGlzLl9jb3VudGVyMSA9IDA7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIyID0gMDtcbiAgICAgICAgdGhpcy5fY291bnRlcjMgPSAwO1xuXG4gICAgICAgIHRoaXMuX21lc3NhZ2UgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMuX2RhdGVGb3JtYXQgPSBuZXcgaW50bE1vZHVsZS5EYXRlVGltZUZvcm1hdCgnZW4tVVMnLCB7J2hvdXInOiAnbnVtZXJpYycsICdtaW51dGUnOiAnbnVtZXJpYycsICdzZWNvbmQnOiAnbnVtZXJpYycsICdob3VyMTInOiAndHJ1ZSd9KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDb3VudGVyMygpIHtcbiAgICAgICB0aGlzLl9jb3VudGVyMyArKzsgXG4gICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShcImNvdW50ZXIzXCIsdGhpcy5fY291bnRlcjMpO1xuICAgIH1cblxuICAgIHVwZGF0ZVRpbWUoKXtcbiAgICAgIHRoaXMuX3RpbWUgPSB0aGlzLmRvRGF0ZUZvcm1hdChuZXcgRGF0ZSgpKTtcbiAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoXCJ0aW1lXCIsdGhpcy5fdGltZSk7XG4gICAgfVxuXG4gICAgZG9EYXRlRm9ybWF0KGR0KXtcbiAgICAgIGxldCBmbXREdCA9IHRoaXMuX2RhdGVGb3JtYXQuZm9ybWF0KGR0KTtcbiAgICAgIHJldHVybiBmbXREdDtcbiAgICB9XG5cbiAgICBnZXQgbWVzc2FnZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgICB9XG5cbiAgICBnZXQgdGltZSgpe1xuICAgICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgZ2V0IGNvdW50ZXIxKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50ZXIxO1xuICAgIH1cbiAgICBcbiAgICBnZXQgY291bnRlcjMoKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5fY291bnRlcjM7XG4gICAgfVxuICAgIFxuICAgIHNldCBjb3VudGVyMSh2YWx1ZTogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5fY291bnRlcjEgPSB2YWx1ZTtcbiAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKFwiY291bnRlcjFcIix0aGlzLl9jb3VudGVyMSk7XG4gICB9XG4gICAgXG4gICAgZ2V0IGNvdW50ZXIyKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50ZXIyO1xuICAgIH1cbiAgICBcbiAgICBzZXQgY291bnRlcjIodmFsdWU6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIyID0gdmFsdWU7XG4gICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShcImNvdW50ZXIyXCIsdGhpcy5fY291bnRlcjIpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgb25UYXAoKSB7XG4gICAgICAgIGxldCBjb3VudExvY2FsOm51bWJlciA9IDAgO1xuICAgICAgICBpZih0aGlzLl9pZDEgPT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLl9pZDEgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnRlcjErK1xuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2lkMSk7XG4gICAgICAgICAgICB0aGlzLl9pZDEgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuX2lkMiA9PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMuX2lkMiA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudGVyMisrXG4gICAgICAgICAgICB9LCAyKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faWQyKTtcbiAgICAgICAgICAgIHRoaXMuX2lkMiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5faWQzID09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5faWQzID0gc2V0SW50ZXJ2YWwoKCk9PnRoaXMudXBkYXRlQ291bnRlcjMoKSw5KTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faWQzKTtcbiAgICAgICAgICAgIHRoaXMuX2lkMyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgIGlmKHRoaXMuX2lkNCA9PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMuX2lkNCA9IHNldEludGVydmFsKCgpPT50aGlzLnVwZGF0ZVRpbWUoKSwxMDAwKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faWQ0KTtcbiAgICAgICAgICAgIHRoaXMuX2lkNCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5faWQ1ID09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5faWQ1ID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgICAgICBjb3VudExvY2FsICsrO1xuICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UgPSBcIkNvbnRhZG9yIExvY2FsOiBcIi5jb25jYXQoY291bnRMb2NhbC50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKFwibWVzc2FnZVwiLCB0aGlzLl9tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2lkNSk7XG4gICAgICAgICAgICB0aGlzLl9pZDUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25UYXBcIik7XG4gICAgfVxufSJdfQ==