

function checkUsername(username,userType){
    if(username[0]==username[0].toUpperCase() && username.length<=10 && username.length >=5 ){
    console.log ("user name valid");
}
else if(userType=="admin" || userType=="manager"){
 console.log( "user name valid" ) ;
}
else
{
    console.log( "username invalid")
}
}
checkUsername("ab","manager")
checkUsername("abubaker","manager")