let result: number = 1; // First, define the default number  for number list which showing
const input: number = 15; // input value
let tx: string[] = ['Tes1', 'Test2'] // Text which show 

for (result; result <= input; result++) {
    if (result% 3 === 0 && result% 5 == 0) {
        console.log(result, tx[0], tx[1])
    } else if (result% 3 === 0 && result% 5 !== 0) {
        console.log(result, tx[0])
    } else if (result% 5 === 0 && result% 3 !== 0) {
        console.log(result, tx[1])
    } else {
        console.log(result)
    }
}

