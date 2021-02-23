let numberString = '1,2,2.3'


console.log(add(numberString).toString())

function add(number) {
    if (number === "") {
        return 0
    }
    let array = []
    array = number.split(",")
    let result = 0 ;
    for (let i = array.length; i > 0; i--) {
        result = result + parseFloat(array[i - 1])
    }
    return result
}