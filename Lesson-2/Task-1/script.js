function duckCount() {
    console.log(arguments);
    var ans = 0;
    for(var i = 0; i < arguments.length; i++){
        if( arguments[i].hasOwnProperty('quack') ){
            ans++;
        }
    }
    return ans
}

var notDuck = Object.create({quack: true});
var duck = {quack: true};
var ducksArr = [{ quack: true }];

alert( duckCount(notDuck, duck, ducksArr) );