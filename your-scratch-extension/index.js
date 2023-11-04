const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const TargetType = require('../../extension-support/target-type');
// const Arduino = require('arduino-js');

class Scratch3YourExtension {

    constructor (runtime) {
        // this.arduino = new Arduino();
        // put any setup for your extension here
    }

    /**
     * Returns the metadata about your extension.
     */
    getInfo () {
        return {
            // unique ID for your extension
            id: 'yourScratchExtension',

            // name that will be displayed in the Scratch UI
            name: 'Saratech',

            // colours to use for your extension blocks
            color1: '#000099',
            color2: '#660066',

            // icons to display
            blockIconURI: 'https://www.saratech.academy/themes/main/assets/img/logo-en.png',
            menuIconURI: 'https://www.saratech.academy/themes/main/assets/img/logo-en.png',

            // your Scratch blocks
            blocks: [
                {
                    opcode: 'SRTBlink',

                    blockType: BlockType.COMMAND,
                    text: 'Blink LED on Pin [PIN]',

                    terminal: false,
                    filter: [ TargetType.SPRITE, TargetType.STAGE ],

                    arguments: {
                        PIN: {
                            type: ArgumentType.NUMBER,
                            menu: 'pins',
                            defaultValue: 13, // Default to pin 13
                        }
                    }
                }
            ],
            menus: {
                pins: this.getPinsMenu()
            }
        };
    }

    getPinsMenu() {
        // You can customize this based on your available pins
        // This example includes commonly used pins
        const pins = [
            '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'
        ];
        return pins.map(pin => [pin, pin]);
    }

    SRTBlink({ PIN }) {

        // this.arduino.pinMode(PIN, this.arduino.OUTPUT);
        // this.arduino.digitalWrite(PIN, this.arduino.HIGH);
        // this.arduino.delay(1000); // Delay for 1 second
        // this.arduino.digitalWrite(PIN, this.arduino.LOW);
    }
}

module.exports = Scratch3YourExtension;
