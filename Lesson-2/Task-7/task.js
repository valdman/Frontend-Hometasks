// your code goes here.
elements = document.body.querySelectorAll("div, h1, p");
console.log(elements);
console.log(elements.length);
for(var i = 0; i < elements.length; ++i){
    elements[i].classList.add("prettify");
}
