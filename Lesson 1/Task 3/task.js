function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    };
}

var users = [{
    name: "Вася",
    surname: 'Тестов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
},


];

users.sort(byField("surname"));

users.forEach(function(user){
    alert(user.name)});
