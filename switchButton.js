function SwitchButton() {
    this.connectToLamp = function (status) {
        this.status = status;
        if (status) {
            console.log("Connected to Lamp success");
        } else {
            console.log("Connected to Lamp failed");
        }
    };
    this.setSwitch = function (status) {
        this.status = status;
    }

    this.getSwitch = function () {
        return this.status;
    };

}

module.exports = SwitchButton;