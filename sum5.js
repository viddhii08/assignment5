function hasanyevenumber(numbers){
    let v = numbers.some((value)=>value%2==0
        
    )
    return v
}
let numbers =[1 , 2 , 3 ,4]
let v =hasanyevenumber (numbers)
console.log(v)
