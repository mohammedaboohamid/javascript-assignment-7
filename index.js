

//random Number
/*

let isEven = (num)=>{
    if(num % 2 ===0){
        console.log(`${num} is even`);
        
    }else{
        console.log(`${num} is odd`);
        
    }
}
isEven(101)



*/




/*
let isEven = (num) => {
    num % 2 ===0 ? console.log(`even number`):console.log(` odd number`)
    

}
isEven(60)

*/




/*
let arr = ["HTML","CSS","JS","Read"] 
console.log(arr.length);
console.log(arr[2]);

let myChoice =arr[3]
console.log(myChoice);

console.log(arr.includes("JS"));

let guesList = [""]


*/



/*
let n = Math.random()
//console.log(n);
n=n*5
//console.log(n);

//console.log(Math.round(n));


console.log(Math.ceil(n));
console.log(Math.floor(n));
*/



/*
const name =prompt ("Enter your name")
const friend =prompt("friends name")

let friendShipScore = Math.random()*100
friendShipScore=Math.ceil(friendShipScore)
alert(`the depth of your friendship is ${friendShipScore}%`)
*/


//fill method

/*
let arr =[1,2,3,4,5]
console.log(arr.fill("h",1,3));
*/

//callback
//a function passed as a argument to  another funcion is called callback function



/*
let message =() =>{
    console.log("this message is shown after 3 seconds");
    
}
setTimeout(message,3000)


*/

/*
setTimeout(()=>{
    console.log("aboo");
    
}),2000
*/


//filter method() create a shadow copy of a portion of given array filtered down to just the elament that passes the test

/*
let arr=[1,2,3,4,5]
let result =arr.filter((item)=>{
    return item % 2===0
    
})
console.log(result);
*/



/*
let arr1 =["javascript","python","css"]
let result = arr1.filter((item)=>{
    return item.length < 6
})
console.log(result);

*/


//every() test with the all the elements in the array pass the tests implimented by the provided function it return a boolean value

/*
let arr =[2,,4,6]

let isEven=(num)=>{
    return num % 2===0
}
let outPut = arr.every (isEven)
console.log(outPut);
*/



//some()

/*
let arr =[1,2,3,4,5]

let isEven = (num)=>{
    return num % 2 ===0
}
let outPut = arr.some (isEven)
console.log(outPut);
*/


//map()
/*
let arr =[1,2,3,4,5]
arr.map((item)=>{
    console.log(item *2);
    
})

*/

//sort()
/*

let names =["ronaldo","messi","neymar","pepe"]

    console.log(names.sort());
    */


    //forEach()  exicute provide a function ones for each in the array  


    /*
    let arr = [1,2,3,4,5]
    let isEven =(num)=>{
        return num % 2 ===0
    }
    let result = arr.forEach((item)=>{
        console.log(isEven(item));
        
    })

    */

    //indexOf()
    /*
     let animals=["ant","bison","camel","bison"]

     console.log(animals.indexOf("bison"));
     
     console.log(animals.indexOf("camel"));
     console.log(animals.indexOf("elephant"));
*/
     //returns the first index that which a Element can be found in the array or -1 if it is not presant
     



     //reduce()  iterate and reduce an arrays value into one value
     
/*
     let arr =[100,10,20]
     let myFunction = (accumulator,currentValue)=>{
        return accumulator-currentValue
     }

      let result =arr.reduce(myFunction)
      console.log(result);
      */


      //q2 ans
        /*
      let arr = [1,2,3]
      function addAll(arr){
        let result = 0
        for (i of arr)
            result += i
        return result
      }
      console.log(addAll(arr));
      */

      /*
      let arr=[1,2,3,"4","5"]
      let result =arr.filter((string)=>{
          return string
          
      })
      console.log(result);
      
      */



      /*
      let array =[1,4,9,16,25]
      let squareRoot =(arr)=>{
       let result=[]
        for(i of arr){
         result.push(Math.sqrt(i))
        }
        return result
    }
      console.log(squareRoot(array));
    */