const messyStrings = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
];


const yelling = messyStrings.filter(s => typeof (s) === "string")
    .map(e => `${e.toUpperCase()}!`)
    .sort()

console.log(yelling)