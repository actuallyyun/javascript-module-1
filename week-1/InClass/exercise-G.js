const numStudents = 15
const numMentors = 8
const total = numStudents + numStudents

const percentageStudents = Math.round((numStudents / total) * 100)
const percentageMentors = Math.round((numMentors / total) * 100)

console.log(`Percentage students ${percentageStudents}%`)
console.log(`Percentage mentors ${percentageMentors}%`)