function findMatching(drivers, string) {
    // return matching list of drivers
    return drivers.filter(d => d.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(d => !d.search(string));
}

function matchName(drivers, string) {
    return drivers.filter(d => d.name === string);
}