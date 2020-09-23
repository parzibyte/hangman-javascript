const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
MAX_ATTEMPTS=6;
new Vue({
    el: "#app",
    data: () => ({
        letters: {},
        hiddenWord: [],
        remainingAttempts: 0,
    }),
    mounted() {
        this.resetAttempts();
        this.setupKeys();
        this.chooseWord();
    },
    methods: {
        imagePath(){
            return `img/Ahorcado-${MAX_ATTEMPTS-this.remainingAttempts}.png`;
        },
        resetAttempts() {
            this.remainingAttempts = MAX_ATTEMPTS;
        },
        chooseWord() {
            let word = "Parzibyte"; // TODO: make this random
            this.prepareWord(word);
        },
        prepareWord(word) {
            word = word.toUpperCase();
            const hiddenWord = [];
            for (const letter of word) {
                hiddenWord.push({
                    letter,
                    hidden: true,
                });
            }
            this.hiddenWord = hiddenWord;
        },
        displayWord() {
            let displayedWord = "";
            for (const letter of this.hiddenWord) {
                if (letter.hidden) {
                    displayedWord += "_";
                } else {
                    displayedWord += letter.letter;
                }
                displayedWord += " ";
            }
            return displayedWord;
        },
        setupKeys() {
            // We make a dictionary from the letters
            for (const letter of alphabet) {
                Vue.set(this.letters, letter, {
                    letter,
                    disabled: false, // We disable it when the user clicks on it
                });
            }
        },
        letterExistsInWord(searchedLetter) {
            for (const letter of this.hiddenWord) {
                if (letter.letter === searchedLetter) {
                    return true;
                }
            }
            return false;
        },
        discoverLetter(letter) {
            for (const index in this.hiddenWord) {
                if (this.hiddenWord[index].letter === letter) {
                    this.hiddenWord[index].hidden = false;
                }
            }
        },
        attemptWithLetter(letter) {
            Vue.set(this.letters[letter], "disabled", true);
            if (!this.letterExistsInWord(letter)) {
                this.remainingAttempts -= 1;
                return;
            } else {
                this.discoverLetter(letter);
            }
        }
    }
});