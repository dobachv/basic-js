const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('Incorrect arguments!');
        }
        return this.processText(message, key, true);
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error('Incorrect arguments!');
        }
        return this.processText(encryptedMessage, key, false);
    }

    processText(text, key, isEncrypt) {
        text = text.toUpperCase();
        key = key.toUpperCase();
        
        let result = [];
        let keyIndex = 0;
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            
            if (char >= 'A' && char <= 'Z') {
                const textCode = char.charCodeAt(0) - 65;
                const keyCode = key[keyIndex % key.length].charCodeAt(0) - 65;
                
                let processedCode;
                if (isEncrypt) {
                    processedCode = (textCode + keyCode) % 26;
                } else {
                    processedCode = (textCode - keyCode + 26) % 26;
                }
                
                result.push(String.fromCharCode(processedCode + 65));
                keyIndex++;
            } else {
                result.push(char);
            }
        }
        
        // Reverse if this is a reverse machine
        if (!this.direct) {
            result.reverse();
        }
        
        return result.join('');
    }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
