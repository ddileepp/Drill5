function roleBased(data){
    const roleBasedPeople = {};

    for(let i=0;i<data.data.length;i++){
        const userData = data.data[i];
        const role = userData.hr[0];

        if(roleBasedPeople.hasOwnProperty(role)){
            roleBasedPeople[role].push((userData.name[0]+" "+userData.name[1]));
        }
        else{
            roleBasedPeople[role] = [(userData.name[0]+" "+userData.name[1])];
        }
    }

    return roleBasedPeople;
}

module.exports = roleBased;
/*end*/