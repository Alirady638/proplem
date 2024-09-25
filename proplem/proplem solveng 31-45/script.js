



//----------31

//function a1(n) {
//
//    let x = n * 10
//
//    if (x > 100) {
//        return x
//    }
//    
//    else{
//        return 100
//    }
//
//}
//console.log(a1(15));
//
//console.log(a1(23.5));
//
//console.log(a1(3));






//32--------



//function a2(hamps , j) {
//    let result =true
//    for (const hamp of hamps) {
//        if (hamp > j) {
//            return false
//        }
//        else{
//            return result  
//        }
//    }
//}
//
//
//
//console.log( a2([1, 2, 3, 4, 5], 5)  )
//
//console.log( a2([5, 5, 3, 4, 5], 3)  )
//
//console.log( a2([5, 4, 5, 6], 10)  )
//
//console.log( a2([1, 2, 1], 1) )








//-------33
//function a3(arry) {
//    
//    for (let index in arry) {
//    if ( arry[index] % 2 == 0) {
//
//       arry[index] = arry[index] - 1
//    }
//    else{
//        arry[index] = arry[index] + 1
//    }
//    }
//    return arry
//}
//
//
//
//
//console.log( a3([1, 2, 3, 4, 5]) )
//
//console.log( a3([3, 3, 4, 3]) )
//
//console.log( a3([2, 2, 0, 8, 10]) )








//---------34
//function a4(n) {
//    let arr=[1 , 0]
//    return arr[n]
//}
//
//
//console.log( a4(1) )
//
//console.log( a4(0) )









//-----------35

//function capetalize( str ) {
//    let first = str[0].toUpperCase()
//    let last = str.slice( 1 )
//    return first + last
//}
//
//
//
//
//function a5(name , num) {
//    if (num==0) {
//        return "bye" +capetalize(name)
//    }
//    else{
//          return 'hello' + capetalize(name)
//    }
//}
//
//
//
//console.log( a5("alon", 1) )
//
//console.log( a5("Tomi", 0) )
//
//console.log( a5("jose", 0) )















//----------36

//function a6(arr) {
//
//        if (arr.length == 0) {
//            return "no one online"
//        }
//          else if (arr.length == 1) {
//          return  arr[0] + "online"
//           } 
//           if (arr.length == 2) {
//         return   arr[0] + "online" + "and" + arr[1] + "online"
//           }
//           else{
//             return   arr[0] +"online" + "and"+ arr[1] + "online" +"and"+ (arr.length - 2  ) + "more online"
//        }
//    }
//
//
//
//
//console.log( a6([]) )
//
//console.log( a6(["paRIE_to"]) )
//
//console.log( a6(["s234f", "mailbox2"]) )
//
//console.log( a6(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]) )











//-----------37
//function a7(arr) {
//    if (arr[0] == arr[1] == arr[2] == arr[3]) {
//        return true
//    }
//    else{
//        return false
//    }
//}
//
//
//
//
//
//console.log( a7(["@", "@", "@", "@"]) )
//
//console.log( a7(["abc", "abc", "abc", "abc"]) )
//
//console.log( a7(["SS", "SS", "SS", "SS"]) )
//
//console.log( a7(["&&", "&", "&&&", "&&&&"]) )
//
//console.log( a7(["SS", "SS", "SS", "Ss"]) )





//--------اعاده رقم 37

//function testJackpot( arr ) {
//    let start = arr[0]
//    let check = true
//    for( let one of arr ) {
//        if( one !== start ) {
//            check = false
//        }
//    }
//    return check
//}
//
//
//
//console.log( testJackpot(["@", "@", "@", "@"]) )
//
//console.log( testJackpot(["abc", "abc", "abc", "abc"]) )
//
//console.log( testJackpot(["SS", "SS", "SS", "SS"]) )
//
//console.log( testJackpot(["&&", "&", "&&&", "&&&&"]) )
//
//console.log( testJackpot(["SS", "SS", "SS", "Ss"]) )








//----------38 

//function a8(string) {
//    let result =""
//    for (let l of string) {
//        if (l=="a") {
//            result += 4
//        }
//        else if (l=="e") {
//            result += 3
//        }
//        else if (l=="i") {
//            result += 1
//        }
//        else if (l=="o") {
//            result += 0
//        }
//        else if (l=="s") {
//            result += 5
//        }
//        else{
//            result += l
//        }
//       
//    }
//     return result
//}
//
//
//console.log( a8("javascript is cool") )
//
//console.log( a8("programming is fun") )
//
//console.log( a8("become a coder") )
//















//--------39
//function a9( year ) {
//return Math.ceil( year / 100 ) + "th century"
//}
//
//console.log( a9(1756) ) 
//console.log( a9(2005) ) 
//console.log( a9(1001) )
//console.log( a9(1000) ) 
//console.log( a9(1555) ) 
//










//----------40
//function a10(arrs) {
//    let result = 0
//    for (let arr of arrs) {
//        for (let item of arr) {
//            if (item % 2 ==0) {
//                result += item
//            }
//        }
//    }
//        
//    return result
//}
//
//
//
//console.log( a10([
//    [1, 0, 2],
//    [5, 5, 7],
//    [9, 4, 3]
//  ]) )
//  
//console.log(  a10([
//    [1, 1],
//    [1, 1]
//  ]))
//  
//console.log(  a10([
//    [42, 9],
//    [16, 8]
//  ]))
//
//console.log(  a10([
//    [],
//    [],
//    []
//  ]));














//------------41
//function isVowel( letter ) {
//    return Boolean(["a", "e", "i", "o", "u"].includes( letter ))
//}
//
//function a11( str ) {
//    let result = ""
//    for( let lett of str ) {
//        if( isVowel( lett ) ) {
//            result += lett
//        }
//    }
//    for( let lett of str ) {
//        if( !isVowel( lett ) ) {
//            result += lett
//        }
//    }
//    return result
//}
//
//
//
//console.log( a11("abcde") ) 
//
//console.log( a11("Hello!") ) 
//
//console.log( a11("What's the time?") )







//-----------42
//function a12( rna ) {
//    let result = ""
//    for( let i = rna.length - 1; i >= 0; i-- ) {
//        if( rna[i] === "A" ) {
//            result += "U"
//        }
//        else if( rna[i] === "U" ) {
//            result += "A"
//        }
//        else if( rna[i] === "C" ) {
//            result += "G"
//        }
//        else if( rna[i] === "G" ) {
//            result += "C"
//        }
//    }
//    return result
//}
//
//
//
//console.log( a12("GUGU") ) 
//
//console.log( a12("UCUCG") ) 
//
//console.log( a12("CAGGU") )












//----------43
//function getCase( str ) {
//    let special = ["11", "12", "13"]
//    if( special.includes( str ) ) {
//        return "-TH"
//    }
//    else {
//        if( str[ str.length - 1 ] === "1" ) {
//            return "-ST"
//        }
//        else if( str[ str.length - 1 ] === "2" ) {
//            return "-ND"
//        }
//        else if( str[ str.length - 1 ] === "3" ) {
//            return "-RD"
//        }
//        else {
//            return "-TH"
//        }
//    }
//}
//
//
//function returnEndOfNumber( num ) {
//    let str = String( num )
//    return num + getCase( str.slice( -2 ) )
//}
//
//
//console.log( returnEndOfNumber(553) ) 
//
//console.log( returnEndOfNumber(34) ) 
//
//console.log( returnEndOfNumber(1231) )
//
//console.log( returnEndOfNumber(22) ) 
//
//console.log( returnEndOfNumber(412) ) 