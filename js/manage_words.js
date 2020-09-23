new Vue({
    el: "#app",
    data: () => ({
        words: [],
        newWord: "",
    }),
    mounted() {
        this.refreshWords();
    },
    methods: {
        refreshWords() {
            this.words = getWords();
        },
        saveWord() {
            // Clean it again ._.
            this.deleteWhiteSpaces();
            const word = this.newWord.toUpperCase();
            // Only save if it does not exist
            if (this.words.indexOf(word) === -1) {
                this.words.push(word);
                saveWords(this.words);
                this.newWord = "";
            } else {
                alert("The word already exists");
            }
        },
        async deleteWord(index) {
            const result = await Swal.fire({
                title: 'Deleting word',
                text: "Are you sure?",
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'No, take me back',
                confirmButtonText: 'Yes, delete it'
            });
            if (!result.value) return;
            this.words.splice(index, 1);
            saveWords(this.words);
        },
        deleteWhiteSpaces() {
            this.newWord = this.newWord.replace(/ /g, "")
        }
    }
});