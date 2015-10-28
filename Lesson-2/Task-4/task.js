/**
 * Created by boris on 28.10.15.
 */
var slice = Function.prototype.call.bind(Array.prototype.slice);

def_arr = [0,1,2,3,4,5,6,7];
new_slice = slice(def_arr,2,5);

console.log( new_slice );