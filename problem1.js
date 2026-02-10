function roleBased(data) {
  return data.data.reduce(function (acc, person) {
    const role = person.hr[0]; // Role
    const fullName = person.name.join(" ");

    if (!acc[role]) {
      acc[role] = [];
    }

    acc[role].push(fullName);
    return acc;
  }, {});
}

module.exports = roleBased;
