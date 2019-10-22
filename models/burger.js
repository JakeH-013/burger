var orm = require("../config/orm.js");

var burger = {
    showAll: (cb) => {
        orm.all("burgers", (res) => {
            cb(res);
        });
    },
    createBurger: (cols, vals, cb) => {
        orm.create("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    updateStatus: (objColVals, condition, cb) => {
        cb(res);
    }
};

module.exports = burger;