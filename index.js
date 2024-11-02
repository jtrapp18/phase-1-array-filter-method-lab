// Code your solution here

const findMatching = (drivers, name) => {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (drivers, name) => {
    return drivers.filter(driver => driver[0] === name[0])
}

const matchName = (driverObj, str) => {
    return driverObj.filter(driver => driver.name === str)
}

console.log(fuzzyMatch(["Ted", "Tom", "Joe"], "Ted"))

const drivers = ["Ted", "Tom", "Joe"]
const driverObj = [{name: "Ted", hometown: "Fairfield"},
                    {name: "Joe", hometown: "Pittsburg"},
                    {name: "Joe", hometown: "Stamford"}]

console.log("findMatching:", findMatching(drivers, "Ted"))
console.log("fuzzyMatch:", fuzzyMatch(drivers, "Ted"))
console.log("matchName:", matchName(driverObj, "Joe"))