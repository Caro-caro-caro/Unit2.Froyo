const userInputString = prompt(
    "Order Froyo Flavors here!",
    "vanilla,vanilla,strawberry,vanilla,coffee,coffee"
  )

const stringArray = userInputString.split(",");
console.log(stringArray)

for (let i=0; i<stringArray.length;i++){
    console.log(stringArray[i])
}

const createSimpleObject = (stringArray) => {

   
const hashMap={}
for (let i=0; i<stringArray.length;i++){
    if(stringArray[i] in hashMap){
        hashMap[stringArray[i]]+=1
    }else{
        hashMap[stringArray[i]]=1
        console.log(hashMap)
    }

}
     return hashMap
}


console.log(createSimpleObject(stringArray))


