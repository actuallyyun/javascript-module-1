
names = ['jack', 'patty', 'julia']
function areYouHere(name) {
    return names.includes(name) ? "Found me!" : "Haven't found me :("
}

console.log(areYouHere('james'))