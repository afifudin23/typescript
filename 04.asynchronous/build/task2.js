"use strict";
const getMonth = (callback) => {
    const error = false;
    const mounth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (!error) {
        return callback(null, mounth);
    }
    else {
        return callback(new Error("Data Not Found !!"), []);
    }
};
getMonth((err, data) => {
    console.log(err);
    data.map((res) => {
        console.log(res);
    });
});
