// Instruction

// Please make sure you attempt to solve the question. Each one of you will be given 5 minutes to present your solution. 
// For those of you who can not code yet in any of the preferred language of the class (JavaScript, Java and Python) please feel free to present your logic in pseudo-codes. 
// If you have any questions regarding the coding assignment, please feel free to discuss in this email thread.

// Question

// let price_matrix = {
//   firstMile: '$4.37 ',
//   perMileExtra: '$1.53 ',
//   quarterMile: '$4.73 ',
//   halfMile: '$5.12 ',
//   threeQuarterMile: '$5.63 ',
//   oneMile: '$6.02 ',
//   minPrice: '$5.00 ',
//   maxPrice: '$15.00 '
// };

// Given above price matrix object, write a function computeCost that takes in covered distance in metres and compute the actual cost using the following instructions:

// 1. For covered distance less than or equal to one mile, use the price_matrix object values as actual cost where covered distance in miles corresponds to the value of corresponding object property. 
// For example if covered distance is a quarter mile, actual cost is price_matrix.quarterMile which is $4.73
// 2. For covered distance that is not exactly a quarter mile, half mile, three-quarter mile or one mile, you can approximate the value of the covered distance provided covered distance is still within the range specified in step 1 above. 
// For example, if covered distance is say 0.55 miles, can be approximated to 0.75 miles since this is greater than half mile (0.5 miles).

// 2. For covered distances greater than one mile, compute actual cost by adding the value price_matrix.perMileExtra to price_matrix.firstMile for each extra mile. 
// For example if covered distance is 4 miles, the actual cost will be 4.37 + 1.53 x 3

// 3. If computed cost is less than $5, return $5 as computed cost and if computed cost is greater than $15 return $15 as computed cost.

// Hints:
// 1. You can use 0.25, 0.50, 0.75 and 1.00 for corresponding quarter mile, half mile, three-quarter mile and one mile in your calculations.
// 2. You will need two functions: one to convert your covered distance from metres to miles and another function to round your covered distance in miles to two decimal places for easy comparisons.

// Answer as solved in class

let price_matrix = {
    firstMile: '$4.37 ',
    perMileExtra: '$1.53 ',
    quarterMile: '$4.73 ',
    halfMile: '$5.12 ',
    threeQuarterMile: '$5.63 ',
    oneMile: '$6.02 ',
    minPrice: '$5.00 ',
    maxPrice: '$15.00 '
  };
  
  4.37 + 1.53 * 15
  
  let getMiles = metres => metres * 0.000621371192;
  
  let round2DecimalPlace = (num) => +(Math.round(num + "e+2")  + "e-2");
  
  let roundMinMax = num => {
    console.log(num);
    if (num <= 5.00) {
      return 5.00
    } else if (num > 15.00) {
      return 15.00;
    }
    return num;
  }
  
  
  let computeCost = distanceMetres => {
    let cost = 0;
    // calculate cost
    // convert distance from metres to miles
    let convertToMiles = getMiles(distanceMetres);
    let distanceCovered = round2DecimalPlace(convertToMiles);
  
    if (distanceCovered > 0 && distanceCovered <= 0.25) return cost = roundMinMax(price_matrix.quarterMile.trim().replace('$', ""));
    if (distanceCovered > 0.25 && distanceCovered <= 0.50) return cost = roundMinMax(price_matrix.halfMile.trim().replace('$', ""));
    if (distanceCovered > 0.50 && distanceCovered <= 0.75) return cost = roundMinMax(price_matrix.threeQuarterMile.trim().replace('$', ""));
    if (distanceCovered > 0.75 && distanceCovered <= 1.00) return cost = roundMinMax(price_matrix.oneMile.trim().replace('$', ""));
  
    let index = 1, limit = Math.round(distanceCovered);
    cost = parseFloat(price_matrix.firstMile.trim().replace('$', ""));
  
    while (index < limit) {
       cost += parseFloat(price_matrix.perMileExtra.trim().replace('$', ""));
      index++;
    }
  
    return roundMinMax(cost);
  }
  
  computeCost(2500);