// Basic Syntax

// Return, Print
console.log("a" ,"b");

// identifiers
// constant : SNAKE_CASE (upper case)
    var TOTAL_COUNT = 26;
// variable : camel_Case
    var firstName = "Wonyoung"
    var lastName = "Seo"
    console.log(firstName, lastName, ":", TOTAL_COUNT, " years old");

// variable declaration and operation
    var a = 1;
    var b = 2;
    var result = a + b;
    console.log(result);

// operator
// +, -, *, /, %, ++, --
    var i = 2;
    i++;
    console.log(i);
    i--;
    console.log(i);
    console.log(5/3);

// operators follow priority
    var c, d;
    c = 3;
    d = 4;
    var resutl = c - d * 5;
    console.log(result);

// data type
    var a = 1,
        b = 1.9,
        c = "data",
        d = [1, 2, 3],
        e = {"a":1, "b":2},
        f = true,
        g = false;
    console.log(
      typeof(a),
      typeof(b),
      typeof(c),
      typeof(d),
      typeof(e),
      typeof(f),
      typeof(g)
    );

// null, undefined, NaN
    console.log(null); // no value
    console.log(undefined); // indicates no value has been assigned
    console.log(NaN); // indicates no such data type exists
    var a = null,
        b,
        c = 0/0;
    console.log(a, b, c);

// comparison operators
// == compares value
    console.log(1==1);
    console.log(1=='1');
// === compares value and data type
// === is more recommended
    console.log(1===1);
    console.log(1==='1');

// ! compares value
    console.log(1!=1);
    console.log(1!='1');
// compares data type
    console.log(1!==1);
    console.log(1!=='1');

    console.log(1>2);
    console.log(1<2);
    console.log(1>=1);
    console.log(1<=2);

// NaN is not considered for comparison operations
// if either one side is NaN, result returns false
    console.log(NaN===NaN);

// assignment operator
    var a = 1;
    a += 2;
    console.log(a);
    a -= 1;
    console.log(a);
    a *= 6;
    console.log(a);
    a /= 2;
    console.log(a);
    a %= 5;
    console.log(a);

// logic operator
// && : returns true, if all true  (and)
    console.log(true && true);
    console.log(true && false);
    console.log(false && false);

// || : returns false, if one is false (or)
    console.log(true || true);
    console.log(true || false);
    console.log(false || false);
    
