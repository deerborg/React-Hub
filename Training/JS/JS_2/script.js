// let age = 18;
//
// console.log(age > 17 ? true : false)
// let count = 0;
// while (count < 10){
//     count++;
//     console.log(count);
// }
//
// while (true){
//     for (let i = 0; i < 1000; i++) {
//         console.log(i);
//         if(i === 20){
//             break;
//         }
//     }
//     break;
// }

const user = {
    name: "John",
    surname: "Doe",
    age: 20,
    city : "City"
}

for (const key in user){
    console.log(user[key]);
}

const arrays = [
    5,10,15,20
]

for (const arr of arrays){
    console.log(arr)
}
