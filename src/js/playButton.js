//@ts-check
import PlayButtonAnim from "./controllers/PlayButtonAnim";
import AudioController from "./controllers/AudioController";
import RadioAnim from "./controllers/RadioAnim";
import { displayToast } from "./toast";

const buttonAnim = new PlayButtonAnim();
const audio = new AudioController();
const radioAnim = new RadioAnim();

function addPlayButtonControls() {
    document.getElementById('play-button').addEventListener('mousedown', () => {
        // ID provided on function call because it changes dynamically.
        radioAnim.id = audio.lastRadio.id;

        if (audio.paused) {
            audio.source = audio.lastRadio.source;
            turnOn();
        } else
            turnOff();
    });
}

function turnOn() {
    buttonAnim.makeActive();
    radioAnim.makeActive();
    audio.play()
        .catch(error => {
            turnOff();
            console.log(error);
            displayToast(`Can't load ${audio.lastRadio.name}...`);
        });
}

function turnOff() {
    audio.pause();
    buttonAnim.makeIdle();
    radioAnim.makeIdle();
}

export default addPlayButtonControls;