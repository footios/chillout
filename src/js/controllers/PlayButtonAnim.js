import AnimationsInterface from "./AnimationsInterface";

/** A controller that handles the play button's animations.*/
class PlayButtonAnim extends AnimationsInterface {

    /**Adds the '-active' className to apply the active button styles. */
    makeActive() {
        document.getElementById('play-button')
            .classList.add('play-button-active');
        document.getElementById('play-button-wrapper')
            .classList.add('play-button-wrapper-active');
    }

    /**Strips the '-active' className to remove the active button styles. */
    makeIdle() {
        document.getElementById('play-button')
            .classList.remove('play-button-active');
        document.getElementById('play-button-wrapper')
            .classList.remove('play-button-wrapper-active');
    }
}
export default PlayButtonAnim;