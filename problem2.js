function roleSalary(data) {
  const roleMap = data.data.reduce(function (acc, person) {
    const role = person.hr[0];

    // Remove $ and commas, convert to number
    const salary = Number(person.hr[1].replace(/[$,]/g, ""));

    if (!acc[role]) {
      acc[role] = { total: 0, count: 0 };
    }

    acc[role].total += salary;
    acc[role].count += 1;

    return acc;
  }, {});

  // Convert totals to averages
  return Object.keys(roleMap).reduce(function (result, role) {
    result[role] = Math.round(roleMap[role].total / roleMap[role].count);
    return result;
  }, {});
}

module.exports = roleSalary;
