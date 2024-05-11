function getevennumbers(numbers){
let v = numbers.filter((numbers)=>{
    return numbers%2==0
})
return v

}
let numbers =[1 , 2 , 3 , 4 , 5 , 6]
let v=getevennumbers(numbers)
console.log(v)