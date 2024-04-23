export default class Diary {
    #entry = [];

    addEntry = (newEntry) => {
        this.#entry.push(newEntry);
    }

    readEntry = (index) => {
        return this.#entry[index - 1];
    }

    getEntries = () => {
        return this.#entry;
    }
}
