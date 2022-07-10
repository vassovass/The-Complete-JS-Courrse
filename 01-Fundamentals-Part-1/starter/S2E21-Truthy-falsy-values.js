/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("0skghkwgb"));
console.log(Boolean({}));//kkk
*/

const money = 0;
console.log(`Money as a value is ${Boolean(money)} because it is ${money} which is a falsy value as well as undefined, NaN,null and ""`);
if (money) {
    console.log("dont spend it all at once")
} else {
    console.log("%cGet %ca %cjob%c!", ' font-size: 50px;color: red; font-weight: bold;text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)', "font-size:90px;color:yellow; font-weight: bold;text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)", "font-size:15pt;color:white; font-weight: bold;text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)", "font-size:20pt;color:blue; font-weight: bold;text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)")
};

let height = null;
if (height) {
    console.log("Yay! Height is defined")
} else {
    // console.log(`%cHeight is not defined ${height}`, "color:blue")
    // Nested if statement for testing - it is realized that if 0 = null or NaN this would not be a true statement
    if (height === 0) {
        console.log(`%cYay! Height is ${height} (ZERO) a falsy value`, "color:green")
    } else {
        if (height === undefined) {
            console.log(`%cYay! Height is ${height} (UNDEFINED) a falsy value`, "color:yellow")
        } else {
            if (height === null) {
                console.log(`%cYay! Height is ${height} (NULL) a falsy value`, "color:orange")
            } else {
                console.log(`%cHeight is not defined, more specifically "${height}"`, "color:red")
            }
        }
    }
};


height = 0;
if (height) {
    console.log("Yay! Height is defined")
} else {
    // console.log(`%cHeight is not defined ${height}`, "color:blue")
    // Nested if statement for testing - it is realized that if 0 = null or NaN this would not be a true statement
    if (height === 0) {
        console.log(`%cYay! Height is ${height} (ZERO) a falsy value`, "color:green")
    } else {
        if (height === undefined) {
            console.log(`%cYay! Height is ${height} (UNDEFINED) a falsy value`, "color:yellow")
        } else {
            if (height === null) {
                console.log(`%cYay! Height is ${height} (NULL) a falsy value`, "color:orange")
            } else {
                console.log(`%cHeight is not defined, more specifically "${height}"`, "color:red")
            }
        }
    }
};

* /
height = undefined;
if (height) {
    console.log("Yay! Height is defined")
} else {
    // console.log(`%cHeight is not defined ${height}`, "color:blue")
    // Nested if statement for testing - it is realized that if 0 = null or NaN this would not be a true statement
    if (height === 0) {
        console.log(`%cYay! Height is ${height} (ZERO) a falsy value`, "color:green")
    } else {
        if (height === undefined) {
            console.log(`%cYay! Height is ${height} (UNDEFINED) a falsy value`, "color:yellow")
        } else {
            if (height === null) {
                console.log(`%cYay! Height is ${height} (NULL) a falsy value`, "color:orange")
            } else {
                console.log(`%cHeight is not defined, more specifically "${height}"`, "color:red")
            }
        }
    }
};
* /


