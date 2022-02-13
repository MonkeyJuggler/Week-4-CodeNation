

let userData = osObj.userInfo().username;
fsObj.appendFile("example.txt", 'The username is:' ${userData}' , () => {
    if(error)
        console.log("OH NO SOMETHING HAPPENED :0");
};

console.log(userData);
