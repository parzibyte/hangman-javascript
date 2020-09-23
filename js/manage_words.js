/*

  ____          _____               _ _           _       
 |  _ \        |  __ \             (_) |         | |      
 | |_) |_   _  | |__) |_ _ _ __ _____| |__  _   _| |_ ___ 
 |  _ <| | | | |  ___/ _` | '__|_  / | '_ \| | | | __/ _ \
 | |_) | |_| | | |  | (_| | |   / /| | |_) | |_| | ||  __/
 |____/ \__, | |_|   \__,_|_|  /___|_|_.__/ \__, |\__\___|
         __/ |                               __/ |        
        |___/                               |___/         
    
____________________________________
/ Si necesitas ayuda, contáctame en \
\ https://parzibyte.me               /
 ------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
Creado por Parzibyte (https://parzibyte.me). Este encabezado debe mantenerse intacto,
excepto si este es un proyecto de un estudiante.
*/
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
                Swal.fire("The word already exists");
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