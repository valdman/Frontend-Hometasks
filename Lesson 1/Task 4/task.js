var filter = function(arr, criteria){
    ans = []
    var inBetween = function(a, b){
        for(i in arr){
            if(arr.hasOwnProperty(i)){
                if(i <= b && i >= a){
                    ans.push(i)
                }
            }
        }
    };
    var isOdd =function(){
        for(i in arr){
            if(arr.hasOwnProperty(i)){
                if(i % 2 == 1){
                    ans.push(i)
                }
            }
        }
    };
    return(criteria)
};

var arr = [1, 2, 3, 4, 5, 6, 7];

var answer = filter(arr, isBetween(3, 6));

for(i in answer){
    if(answer.hasOwnProperty(i)) {
        console.log(i);
    }
}