const students = 15;
const teachers = 8;
const Studentpercentage = students * 100;
const teacherpercentage = teachers * 100;

console.log("Percentage of students:" ,Math.round(Studentpercentage / 23));
console.log("Percentage of Teachers:" ,Math.round(teacherpercentage / 23));

console.log("Percentage of Teachers after trunc funcationno:" ,Math.trunc(teacherpercentage / 23));
