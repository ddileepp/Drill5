function roleSalary(data){
    const roleBasedAvgSalary = {};

    for(let i=0;i<data.data.length;i++){

        const userData = data.data[i];
        let salary = Number(userData.hr[1].replace(/[$,]/g,''));
        const role = userData.hr[0];

        if(roleBasedAvgSalary.hasOwnProperty(role)){
            roleBasedAvgSalary[role].totalSalary+=salary;
            roleBasedAvgSalary[role].count++;
        }
        else{
            roleBasedAvgSalary[role] = {
                totalSalary : salary,
                count : 1
            };
        }
    }

    const avgSalaryResult = {}

    for(let role in roleBasedAvgSalary){
        avgSalaryResult[role] = (roleBasedAvgSalary[role].totalSalary/roleBasedAvgSalary[role].count).toFixed(2);
    }
    return avgSalaryResult;
}
module.exports = roleSalary;
