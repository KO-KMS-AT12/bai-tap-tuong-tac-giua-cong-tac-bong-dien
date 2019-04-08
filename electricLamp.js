function ElectricLamp() {

    this.setTurn = function (status) {
        this.status = status;
    };
    this.getTurn = function () {
        return this.status;
    }
}

module.exports = ElectricLamp;