// Object

// Create Object
    var obj = {};
    obj.math = 92;
    obj.english = 97;
    obj.science = 85;
    console.log(obj);
    console.log(obj.english);


// raeturn Object
    for (var key in obj){
      console.log(key, obj[key]);
    }


// insert function in object
// object.keys : return key values from objects
// toFixed(number) : round up by 'number'
    var points = {
      'points' : {'math':91, 'science':98, 'english':86},
      'total' : function(){
        var total = 0;
        for (var key in this.points){
          total += this.points[key];
        }
        return total;
      },
      'avg': function(){
        return this.total() / Object.keys(this.points).length;
      }
    }

    console.log(points.total());
    console.log(points.avg());
    console.log(points.avg().toFixed(2));
