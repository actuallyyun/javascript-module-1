var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function greetings(mentor) {
    mentor = mentor.toUpperCase()
    return `HELLO ${mentor}`
}

console.log(greetings(mentor1))