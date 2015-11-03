function duckCount() {
    args = Array.prototype.slice.call(arguments);
    var ans = 0;
    for(var i = 0; i < args.length; i++){
        if( arguments[i] && arguments[i].hasOwnProperty('quack') ){
            ans++;
        }
    }
    return ans
}

var notDuck = Object.create({quack: true});
var duck = {quack: true};
var ducksArr = [{ quack: true }];

alert( duckCount(notDuck, duck, ducksArr, null) );