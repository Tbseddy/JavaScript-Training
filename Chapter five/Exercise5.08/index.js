function curry(prim, fun) {
    if (typeof fun != "function") return;
    var ret = function() {
        return fun(prim);
        };
        return ret;
}

var fun = function(val) { return val + 50 };
var curry1 = curry(99, fun);
var curry1 = curry(99, fun);
var curry2 = curry("Bob", fun);
console.log( curry2() );