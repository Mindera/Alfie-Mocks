const navigationData = require("./navigation.json");
const navigationHandlesData = require("./navigationHandles.json");

function navigation() {
    return navigationData;
}

function navigationHandles() {
    return navigationHandlesData;
}

module.exports = { 
    navigation,
    navigationHandles
};

