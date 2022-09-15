var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function spellUpperCase(name){
    let mentorUpperCase = name.toUpperCase();
    
    return mentorUpperCase;
}
function greetingMentors(name){

    console.log(`HELLO,${spellUpperCase(name)}`)
}

greetingMentors(mentor1);
greetingMentors(mentor2);
greetingMentors(mentor3);
greetingMentors(mentor4);
greetingMentors(mentor5);

