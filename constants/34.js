function average(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = sum + x[i];
    }
    var z = Math.round(sum / x.length); // var z = Math.floorsum / x.length);                                 
    console.log(z); //console.log(z+1);

}
var score = [90, 98, 89, 100, 100, 86, 94];
average(score);
var scores = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores);