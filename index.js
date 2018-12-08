// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    const driverNew = {...driver};
    driverNew[key] = value;
    return driverNew;

}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(driver, key){
    return delete driver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    driver[key]= undefined;
    return driver;

}