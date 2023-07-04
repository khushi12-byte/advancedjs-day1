// 1...

const animals = ['dogs','cats','rabbits','mice']
animals.forEach(animal => {
    const points = animal.includes('a');
    console.log(`${animal}: ${points}`);
})

// 2

newArray = ['apple', 'pineapple','dog','joke']
function narr(name)
{
    return name.includes('a')
}
console.log(newArray.filter(narr));


const nowDate = new Date()
console.log(nowDate);
console.log(nowDate.getDate());
console.log(nowDate.getDay());
console.log(nowDate.getFullYear());
console.log(nowDate.getHours());
console.log(nowDate.getMilliseconds());
console.log(nowDate.getMinutes());
console.log(nowDate.getMonth());
console.log(nowDate.getSeconds());
console.log(nowDate.getTime());
console.log(nowDate.getTimezoneOffset());
console.log(nowDate.getUTCDate());


// console.log(nowDate.__proto__);


