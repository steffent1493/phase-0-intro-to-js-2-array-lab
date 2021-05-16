const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name){
    cats.pop()
}
function destructivelyRemoveFirstCat(name){
    cats.shift()
}
function appendCat(name){
    const newArray = [...cats]
    newArray.push("Broom")
    return newArray
    
}
function prependCat(name){
    const newArray = [...cats]
    newArray.unshift("Arnold")
    return newArray
}
function removeLastCat(name){
    const newArray = [...cats]
    newArray.pop()
    return newArray
}
function removeFirstCat(name){
    const newArray = [...cats]
    newArray.shift()
    return newArray
}