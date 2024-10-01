const marvel_hero = ["Thor", "Ironman", "CaptainAmerica"]
const dc_hero = ["superman", "flash", "batman"]

// marvel_hero.push(dc_hero)
// console.log(marvel_hero);
//for accessing particular value you need to provide full syntax 
// console.log(marvel_hero[3][2]);

// const all_hero = marvel_hero.concat(dc_hero)
// console.log(all_hero);
//concat will merge two array and gives a new array 

//spread method 
const all_new_hero = [...dc_hero, ...marvel_hero]
console.log(all_new_hero);



const another_array = [1, 2, 3, [4,5,6], [7,9], 8, 4, [5,3,2,1,[1,2]]]
const real_another_array = another_array.flat(Infinity)
//flat will combine all the array together, depth will not matter 

console.log(real_another_array);

console.log(Array.isArray("Swati"));
console.log(Array.from("Swati"));
console.log(Array.from({name:"swati"})); //need to convert first, then it will print array 

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1,score2,score3));









