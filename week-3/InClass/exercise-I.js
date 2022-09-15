const messyArray = [
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
function cleaningUp(array){
    return array.filter(string => typeof string == "string").map(e=> `${e.toUpperCase()}`)
}
 console.log(cleaningUp(messyArray));