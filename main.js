var SwitchButton = require('./switchButton');
var EletricLamp = require('./electricLamp');

var btnSwitch = new SwitchButton();
var eletricLamp = new EletricLamp();

eletricLamp.setTurn(true);

if (eletricLamp.getTurn()) {
    btnSwitch.connectToLamp(eletricLamp.getTurn())

    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            btnSwitch.setSwitch(true);
            if (btnSwitch.getSwitch()) {
                console.log('Bat den');
            } else {
                console.log('Tat den')
            }
        } else {
            btnSwitch.setSwitch(false);
            if (btnSwitch.getSwitch()) {
                console.log('Bat den');
            } else {
                console.log('Tat den')
            }
        }
    }
} else {
    btnSwitch.connectToLamp(eletricLamp.getTurn())
    console.log('Cong tac nguon cua den chua bat')
}



