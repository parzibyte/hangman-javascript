const LOCAL_STORAGE_WORDS_KEY = "words";
const getWords = () => (JSON.parse(localStorage.getItem(LOCAL_STORAGE_WORDS_KEY)) || []);
const saveWords = (words) => (localStorage.setItem(LOCAL_STORAGE_WORDS_KEY, JSON.stringify(words)));