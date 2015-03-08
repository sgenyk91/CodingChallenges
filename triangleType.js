function triangleType(a, b, c){
  var check = [];
  check.push(a);
  check.push(b);
  check.push(c);
  check.sort(function(x, y) {
    return x - y;
  });
  if (check[0] + check[1] <= check[2]) {
    return 0;
  }
  var angleRadA = Math.acos(((b * b) + (c * c) - (a * a)) / (2 * b * c));
  var angleRadC = Math.acos(((a * a) + (b * b) - (c * c)) / (2 * a * b));

  console.log(angleRadC, angleRadA);

  var angleDegA = radiansToDegrees(angleRadA);
  var angleDegC = radiansToDegrees(angleRadC);
  var angleDegB = 180 - angleDegA - angleDegC;

  console.log(angleDegA, angleDegB, angleDegC);
  console.log(angleDegA + angleDegB + angleDegC);

  if (Math.round(angleDegA * 100) / 100 === 90 || Math.round(angleDegB * 100) / 100 === 90 || Math.round(angleDegC * 100) / 100 === 90) {
    return 2;
  } else if (angleDegA < 90 && angleDegB < 90 && angleDegC < 90) {
    return 1;
  } else {
    return 3;
  }
}

function radiansToDegrees(rad) {
  return rad * 180 / Math.PI;
}