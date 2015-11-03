/**
 * Created by boris on 28.10.15.
 */
function Spy(target, method) {
    var originFn = target[method];
    var result  = {
        count : 0 ,
        past_args : []
    };
    target[method] = function(){
        result.count++;
        normal_arguments = Array.prototype.slice(arguments);
        result.past_args.push(arguments);
        originFn.apply(this, arguments);
    };
    return result;

}

var spy = Spy(window, 'alert');
alert("Это алёрт 1");
alert("Это алёрт 2");
alert("Это алёрт 3");
alert("Это алёрт 4");
console.log('Количество вызванных алертов:', spy.count);
console.log('Аргументы алёртов', spy.past_args);
