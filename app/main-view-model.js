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
        _this._dateFormat = new intlModule.DateTimeFormat('en-US', { 'hour': 'numeric', 'minute': 'numeric', 'second': '' });
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
        console.log("onTap");
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLDhDQUFnRDtBQUVoRDtJQUFxQyxtQ0FBVTtJQWEzQztRQUFBLFlBRUksaUJBQU8sU0FVVjtRQVJHLDZCQUE2QjtRQUM3QixLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUVuQixLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7UUFFbEgsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztJQUN0QixDQUFDO0lBRUQsd0NBQWMsR0FBZDtRQUNHLElBQUksQ0FBQyxTQUFTLEVBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxFQUFFO1FBQ2IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxzQkFB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OlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0ICogYXMgaW50bE1vZHVsZSBmcm9tIFwibmF0aXZlc2NyaXB0LWludGxcIjtcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSBfY291bnRlcjE6IG51bWJlcjtcbiAgICBwcml2YXRlIF9jb3VudGVyMjogbnVtYmVyO1xuICAgIHByaXZhdGUgX2NvdW50ZXIzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfdGltZTogc3RyaW5nO1xuICAgIHByaXZhdGUgX2lkMTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2lkMjogbnVtYmVyO1xuICAgIHByaXZhdGUgX2lkMzogbnVtYmVyO1xuICAgIHByaXZhdGUgX2lkNDogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBfZGF0ZUZvcm1hdDogaW50bE1vZHVsZS5EYXRlVGltZUZvcm1hdDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlcy5cbiAgICAgICAgdGhpcy5fY291bnRlcjEgPSAwO1xuICAgICAgICB0aGlzLl9jb3VudGVyMiA9IDA7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIzID0gMDtcblxuICAgICAgICB0aGlzLl9kYXRlRm9ybWF0ID0gbmV3IGludGxNb2R1bGUuRGF0ZVRpbWVGb3JtYXQoJ2VuLVVTJywgeydob3VyJzogJ251bWVyaWMnLCAnbWludXRlJzogJ251bWVyaWMnLCAnc2Vjb25kJzogJyd9KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVRpbWUoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDb3VudGVyMygpIHtcbiAgICAgICB0aGlzLl9jb3VudGVyMyArKzsgXG4gICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShcImNvdW50ZXIzXCIsdGhpcy5fY291bnRlcjMpO1xuICAgIH1cblxuICAgIHVwZGF0ZVRpbWUoKXtcbiAgICAgIHRoaXMuX3RpbWUgPSB0aGlzLmRvRGF0ZUZvcm1hdChuZXcgRGF0ZSgpKTtcbiAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoXCJ0aW1lXCIsdGhpcy5fdGltZSk7XG4gICAgfVxuXG4gICAgZG9EYXRlRm9ybWF0KGR0KXtcbiAgICAgIGxldCBmbXREdCA9IHRoaXMuX2RhdGVGb3JtYXQuZm9ybWF0KGR0KTtcbiAgICAgIHJldHVybiBmbXREdDtcbiAgICB9XG5cbiAgICBnZXQgdGltZSgpe1xuICAgICAgcmV0dXJuIHRoaXMuX3RpbWU7XG4gICAgfVxuXG4gICAgZ2V0IGNvdW50ZXIxKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50ZXIxO1xuICAgIH1cbiAgICBcbiAgICBnZXQgY291bnRlcjMoKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5fY291bnRlcjM7XG4gICAgfVxuICAgIFxuICAgIHNldCBjb3VudGVyMSh2YWx1ZTogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5fY291bnRlcjEgPSB2YWx1ZTtcbiAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKFwiY291bnRlcjFcIix0aGlzLl9jb3VudGVyMSk7XG4gICB9XG4gICAgXG4gICAgZ2V0IGNvdW50ZXIyKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50ZXIyO1xuICAgIH1cbiAgICBcbiAgICBzZXQgY291bnRlcjIodmFsdWU6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIyID0gdmFsdWU7XG4gICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShcImNvdW50ZXIyXCIsdGhpcy5fY291bnRlcjIpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgb25UYXAoKSB7XG4gICAgICAgIGlmKHRoaXMuX2lkMSA9PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMuX2lkMSA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudGVyMSsrXG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faWQxKTtcbiAgICAgICAgICAgIHRoaXMuX2lkMSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5faWQyID09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5faWQyID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXIyKytcbiAgICAgICAgICAgIH0sIDIpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9pZDIpO1xuICAgICAgICAgICAgdGhpcy5faWQyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLl9pZDMgPT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLl9pZDMgPSBzZXRJbnRlcnZhbCgoKT0+dGhpcy51cGRhdGVDb3VudGVyMygpLDkpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9pZDMpO1xuICAgICAgICAgICAgdGhpcy5faWQzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAgaWYodGhpcy5faWQ0ID09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5faWQ0ID0gc2V0SW50ZXJ2YWwoKCk9PnRoaXMudXBkYXRlVGltZSgpLDEwMDApO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9pZDQpO1xuICAgICAgICAgICAgdGhpcy5faWQ0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uVGFwXCIpO1xuICAgIH1cbn0iXX0=