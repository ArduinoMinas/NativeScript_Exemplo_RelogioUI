"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        var _this = _super.call(this) || this;
        // Initialize default values.
        _this._counter1 = 0;
        _this._counter2 = 0;
        _this._counter3 = 0;
        return _this;
    }
    HelloWorldModel.prototype.updateCounter3 = function () {
        this._counter3++;
        this.notifyPropertyChange("counter3", this._counter3);
    };
    HelloWorldModel.prototype.updateTime = function () {
        this.notifyPropertyChange("time", this.time);
    };
    Object.defineProperty(HelloWorldModel.prototype, "time", {
        get: function () {
            return new Date();
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
            this.notifyPropertyChange("counter1", value);
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
            this.notifyPropertyChange("counter2", value);
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
            }, 3);
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
            this._id4 = setInterval(function () { return _this.updateTime(); }, 1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBRTNDO0lBQXFDLG1DQUFVO0lBVTNDO1FBQUEsWUFDSSxpQkFBTyxTQU1WO1FBSkcsNkJBQTZCO1FBQzdCLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLEtBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDOztJQUN2QixDQUFDO0lBRUQsd0NBQWMsR0FBZDtRQUNHLElBQUksQ0FBQyxTQUFTLEVBQUcsQ0FBQztRQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxzQkFBSSxpQ0FBSTthQUFSO1lBQ0ksTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSxxQ0FBUTthQUFaO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQU1ELFVBQWEsS0FBYTtZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7OztPQVRDO0lBRUQsc0JBQUkscUNBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBT0Qsc0JBQUkscUNBQVE7YUFBWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFhLEtBQWE7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFVBQVUsRUFBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxDQUFDOzs7T0FMQTtJQU9NLCtCQUFLLEdBQVo7UUFBQSxpQkErQkM7UUE5QkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUNwQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDbkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1YsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO2dCQUNwQixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7WUFDbkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1YsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO1FBQ0QsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxFQUFFLEVBQXJCLENBQXFCLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO1FBQ0EsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLGNBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV6QixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBckZELENBQXFDLHVCQUFVLEdBcUY5QztBQXJGWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgcHJpdmF0ZSBfY291bnRlcjE6IG51bWJlcjtcbiAgICBwcml2YXRlIF9jb3VudGVyMjogbnVtYmVyO1xuICAgIHByaXZhdGUgX2NvdW50ZXIzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaWQxOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaWQyOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaWQzOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfaWQ0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIGRlZmF1bHQgdmFsdWVzLlxuICAgICAgICB0aGlzLl9jb3VudGVyMSA9IDA7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIyID0gMDtcbiAgICAgICAgdGhpcy5fY291bnRlcjMgPSAwO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvdW50ZXIzKCkge1xuICAgICAgIHRoaXMuX2NvdW50ZXIzICsrOyBcbiAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKFwiY291bnRlcjNcIix0aGlzLl9jb3VudGVyMyk7XG4gICAgfVxuXG4gICAgdXBkYXRlVGltZSgpe1xuICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKFwidGltZVwiLHRoaXMudGltZSk7XG4gICAgfVxuXG4gICAgZ2V0IHRpbWUoKTogRGF0ZXtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCk7XG4gICAgfVxuICAgIGdldCBjb3VudGVyMSgpOiBudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3VudGVyMTtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGNvdW50ZXIzKCk6IG51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvdW50ZXIzO1xuICAgIH1cbiAgICBcbiAgICBzZXQgY291bnRlcjEodmFsdWU6IG51bWJlcil7XG4gICAgICAgIHRoaXMuX2NvdW50ZXIxID0gdmFsdWU7XG4gICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoXCJjb3VudGVyMVwiLHZhbHVlKTtcbiAgIH1cbiAgICBcbiAgICBnZXQgY291bnRlcjIoKTogbnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5fY291bnRlcjI7XG4gICAgfVxuICAgIFxuICAgIHNldCBjb3VudGVyMih2YWx1ZTogbnVtYmVyKXtcbiAgICAgICAgdGhpcy5fY291bnRlcjIgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZShcImNvdW50ZXIyXCIsdmFsdWUpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgb25UYXAoKSB7XG4gICAgICAgIGlmKHRoaXMuX2lkMSA9PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMuX2lkMSA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudGVyMSsrXG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5faWQxKTtcbiAgICAgICAgICAgIHRoaXMuX2lkMSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5faWQyID09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5faWQyID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXIyKytcbiAgICAgICAgICAgIH0sIDMpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9pZDIpO1xuICAgICAgICAgICAgdGhpcy5faWQyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLl9pZDMgPT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLl9pZDMgPSBzZXRJbnRlcnZhbCgoKT0+dGhpcy51cGRhdGVDb3VudGVyMygpLDkpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9pZDMpO1xuICAgICAgICAgICAgdGhpcy5faWQzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAgaWYodGhpcy5faWQ0ID09IG51bGwpe1xuICAgICAgICAgICAgdGhpcy5faWQ0ID0gc2V0SW50ZXJ2YWwoKCk9PnRoaXMudXBkYXRlVGltZSgpLDEpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9pZDQpO1xuICAgICAgICAgICAgdGhpcy5faWQ0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uVGFwXCIpO1xuXG4gICAgfVxufSJdfQ==