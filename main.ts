basic.forever(function () {
	
})

let canal = 0;
let currentIcon = 0;
const localId = randint(0, 9999);
radio.onReceivedString(message => showMessage(message));


const showMessage = (message :string) => {
    const id = message.split(":")[0];
    const icon = message.split(":")[1];
    basic.showString(id);
    basic.showIcon(parseInt(icon));
}

const selectIcon = () => {
    currentIcon = (currentIcon+1)%40;
    basic.showIcon(currentIcon);
}

const sendIcon = () => {
    radio.sendString(`${localId}:${currentIcon}`)
    basic.showArrow(3);
}

const changeCanal = () => {
    canal = (canal+1)%16;
    basic.showNumber(canal);
    radio.setGroup(canal);
}

radio.setFrequencyBand(0)
input.onLogoEvent(TouchButtonEvent.Touched,changeCanal)
input.onButtonPressed(Button.A,selectIcon);
input.onButtonPressed(Button.B, sendIcon);