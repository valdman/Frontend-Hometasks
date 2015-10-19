function makeBuffer() {
    var storage = ""
    function buffer( stringToWrite ){
        if( stringToWrite )
            storage += stringToWrite
        return( storage )
    }

    function clear(){
        storage = ""
        return( storage )
    }
    return( buffer )
}

var buffer = makeBuffer();

/* добавить значения к буферу */
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

/* получить текущее значение */
alert( buffer() ); // "Замыкания Использовать Нужно!"

buffer.clear();

alert( buffer() ); // ""