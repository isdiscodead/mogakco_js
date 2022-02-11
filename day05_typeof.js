window.onload = function () {
    console.log(typeof 3.14);   // number
    console.log(typeof "javascript");   // string
    console.log(typeof true);   // boolean

    var cat = {name:"ggongchi", age:3};
    console.log(typeof cat);    // object
    console.log(typeof null);   // object
    var dog = undefined;
    console.log(typeof dog);    // undefined
}
