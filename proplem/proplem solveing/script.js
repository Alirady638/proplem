


//function f1( arr ) {
//   let result = []
//   for( let i in arr ) {
//       result[i] = Number(i) + arr[i]
//   }
//   return result
//}
//
//
//
//console.log( f1([0, 0, 0, 0, 0]) )
//
//console.log( f1([1, 2, 3, 4, 5]) )
//
//console.log( f1([5, 4, 3, 2, 1]) )










//function  addOddToN ( n ) {
   // let result = 0
   // for( let i = 0; i <= n; i++ ) {
       // if( i % 2 == 1 ) {
        //    result += i
       // }
    //}
   // return result
//}


//console.log( addOddToN(5) )

//console.log( addOddToN(13) )

//console.log( addOddToN(47) )






//function filterArray( arr ) {
   // let result = []
    //for( let one of arr ) {
       // if( typeof one === "number" ) {
     //       result.push( one )
   //     }
   // }
  //  return result
//}



//console.log( filterArray([1, 2, 3, "a", "b", 4]) )

//console.log( filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) )

//console.log( filterArray(["Nothing", "here"]) )






//function squaresSum( num ) {
//
//let result = 0
//for( let i = 1; i <= num; i++ ) {
//  result += ( i ** 2 )
//}
//return result
//}
//
//
//
//console.log( squaresSum(3) )
//
//console.log( squaresSum(12) )
//
//console.log( squaresSum(4) )
  
//}




//function f5(num) {
//   let result = ""
//   for (let i=1 ;  i <= 10; i++ ) {
//      result += (num * i) +1
//      if( i == 10 ) { break }
//      result += ","
//  }
//  return result
//}
//
//
//
//console.log( f5(7) )
//
//console.log( f5(1) )
//
//console.log( f5(3) )
//
//







 //function makeRug(m, n, s) {
//et result = []
 //  for( let i = 0; i < m; i++ ) {
 //     let newString = ""
 //      for( let o = 0; o < n; o++ ) {
 //          if( s ) {
 //             newString += s
 //           }
 //           else {
 //              newString += "#"
 //           }
 //        }
 //        result.push( newString )
 //     }
 //     return result
 //  }
 //  
 //  console.log( makeRug(3, 5) )
 //  
 //  console.log( makeRug(3, 5, '$') )
 //  
 //  console.log( makeRug(2, 2, 'A') )
   



// function forbiddenLetter( letter, arr ) {
//   let  result = true
//   for( let str of arr ) {
//        for( let lett of str ) {
//           if( lett === letter ) {
//              result = false
//           }
//        }
//      }
//      return result
//   }
//   
//   console.log( forbiddenLetter("r", ["rock", "paper", "scissors"]) )
//
//
//   console.log( forbiddenLetter("a", ["spoon", "fork", "knife"]) )
//
//
//   console.log( forbiddenLetter("m", []) )
