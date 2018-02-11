


// condition " if "

    if(true){
      console.log("hello world");
    }

    if(false){
      console.log("hello javascript");
    } else {
      console.log("hello data science");
    }

    if(false){
      console.log("hello javascript");
    } else if (true){
      console.log("hello html");
    } else {
      console.log("hello datascience");
    }

// datatypes that are considered False
    if(null || undefined || NaN || 0 || ""){
      console.log("hello false");
    }

// datatypes that are considered True
    if([] && {}){
      console.log("hello true");
    }




// function

    function add(a, b){
      return a + b;
    }
    var result = add(7, 9);
    console.log(result);

// we can add function as a variable.
    var add = function(a, b){
      return a + b;
    };

    var result = add(3, 6);
    console.log(result);
    console.log(typeof(add));




// loop

// while
    var a = 0;
    while (a<5){
      a++;
      console.log(a);
    }

// for
    for(var i = 0; i < 3; i++){
      console.log(i);
    }

// break
    var a = 0;
    while (a < 5){
      a++;
      if (a === 3){
        break;
      }
      console.log(a);
    }

// continue
    var a = 0;
    while (a < 5){
      a++;
      if(a === 3){
        continue;
      }
      console.log(a);
    }

// mutiplication table (vertical)
    for (var num1=2; num1<10; num1++){
      for (var num2=2; num2<10; num2++){
        console.log(num1 + "*" + num2 + "=" + num1*num2);
      }
      console.log();
    }

// mutiplication table (horizontal)
    for (var num2=2; num2<10; num2++){
      for (var num1=2; num1<10; num1++){
        process.stdout.write(num1 + "*" + num2 + "=" + num1*num2 + "\t");
      }
      console.log();
    }
