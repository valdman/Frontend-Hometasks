var sum = function(first){
    tmp = function(second){
        return(first + second)
    }
    return(tmp);
}

alert( sum(12)(13) )

