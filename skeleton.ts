const localId = 0;	// TODO implement localId

const showMessage = (message :string) => {}

const selectIcon = () => {}

const sendIcon = () => {}

const changeCanal = () => {}

radio.setFrequencyBand(0)
radio.onReceivedString(message => showMessage(message));
input.onLogoEvent(TouchButtonEvent.Touched,changeCanal)
input.onButtonPressed(Button.A,selectIcon);
input.onButtonPressed(Button.B, sendIcon);
