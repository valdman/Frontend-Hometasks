// your code goes here.
elements = document.querySelectorAll("div, p, h1");
console.log(elements);
console.log(elements.length);
for(var i = 0; i < elements.length; ++i){
    elements[i].classList.add("prettify");
}
