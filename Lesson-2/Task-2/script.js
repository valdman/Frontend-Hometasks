function User(title, name) {
    this.title = title;
    this.name = name;
    console.info('NEW USER: ' + this);
}

function BetterUser(){

}

BetterUser.prototype = Object.create(User.prototype, {
    constructor : BetterUser
});

BetterUser.prototype.toString = function(){
    return '[BetterUser:' + this.displayname
};
