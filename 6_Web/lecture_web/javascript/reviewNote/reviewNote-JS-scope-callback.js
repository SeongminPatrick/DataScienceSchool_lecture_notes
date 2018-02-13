// Scope

var a = 'hello';
function func(){
  console.log(a);
}
func();

```
hello
```


// example 1
    var a = 'hello';
    function func(){
      var a = 'javascript';
      console.log('inner', a);
    }
// inner variable 'a'
    func();
// outer variable 'a'
    console.log('outer', a);

```
inner javascript
outer hello
```


// example 2
    var a = 'hello';
    function func(){
      a = 'javascript';
      console.log('inner', a);
    }
    func();
    console.log('outer', a);

```
inner javascript
outer javascript
```


// how to avoid using global variable
// anonymous variable : process all codes inside anonymous variable
(function(){
  var a = 'hello';
  console.log(a);
}());
console.log(a);
```
no result
```




// callback
// callback function is triggered by other function's parameter.
// it is an example of asynchronous programming

    function add (a, b, callback){
        var result = a + b;
        callback(result);
    }

    function disp(data){
        console.log(data + 10);
    }

    add(5, 8, disp);
