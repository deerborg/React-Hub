function tax(total) {
    const rating = 0.18
    if (typeof total !== "number") {
        throw "Enter a number value";
    }
    if (total <= 0) {
        throw "Enter positive number"
    }
    const taxValue = total * rating;
    return total + taxValue;
}

console.log(tax(100));

const arrays = [1, 2, "name", 4, BigInt(1294841209410924)];

const dumVar = Number(1010);
const dumStr = String("Str")

console.log(dumVar + " " + dumStr)


const dummyUser = Object.create({
    name: "Dum"
})

const user = {
    firstName: "Furkan",
    lastName: "Aydemir",
    generateFullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

user.test = "Added new properties";


console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

// Arrays

let number = [1,2,3,4]

// sonuna
number.push(111);

// başına
number.unshift(111)

// istenilen index'e ekleme
number.splice(1,0,555)

// son elemanı sil
number.pop()

// baştan sil
number.shift();

// sıralama
number.sort()

// doldurma
number.fill(10)

// ters sırala
number.reverse()


const reduced = number.reduce(function (total,value){
    return total + value
},0)

console.log(reduced)

console.log(number)
//21.31





