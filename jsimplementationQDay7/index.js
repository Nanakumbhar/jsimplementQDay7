// DAY 7
//Q .1  Given an array of 0's and 1's find out number of 0's

let arr1=[0,1,0,1,0];
let count1 =0
 for(let i=0; i<=arr1.length;i++){
    if(arr1[i]===0){
        count1++
    }
 }
 console.log(count1)

//Q .2  Given an array find out total no. of odd and even nos.

let arr =[1,2,3,4,5,6,7,8,9];
let odd = 0;
let even=0;
for(let i=1 ; i <= arr.length; i++){
    if (arr[i] % 2 == 0){
         even++
    }
    else{
             odd++
    }
}
console.log(even,odd)

//Q.3  Given a string find out number of vowels 

let string = "abcdfiiioooooooughijk"
let count=0;
let vowels= "aeiou"
for(character of string){
    
        if(vowels.includes(character)){
            count++
        }
    }
console.log(count)




//Q .4  Write a code to create two objects with 2 properties each, one will be string and other will be an array.
//  Create a function to check if all the elements of the arrays in both the objects are same

let obj1={
    Name:"kumbhar",
    age1:[22,25]
}

let obj2={
    Name:"kumbhar",
    age2:[22,25]


}

function test(){

    for(let i=0; i < obj2.age2.length; i++){
    if(obj1.age1[i]=== obj2.age2[i]){

    console.log('objects are same')}
    else{
        console.log('objects are different')
    }
}}
test()