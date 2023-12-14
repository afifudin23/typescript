const getMonth = (callback: Function) => {
    const error = true;
    const mounth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (!error) {
        return callback(null, mounth);
    }
    else {
        return callback(new Error("Data Not Found !!"), []);
    }
};
getMonth((err: Error, data:Array<String>) => {
    console.log(err);
    data.map((res) => {
        console.log(res);
    });
});
