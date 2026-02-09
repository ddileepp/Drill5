function names(data){
    const fullNames = []

    for(let i=0;i<data.data.length;i++){
        let userData = data.data[i];
        fullNames.push(userData.name[0]+" "+userData.name[1]);
    }

    return fullNames;
}
module.exports = names;
