import Diary from "../src/diary.js"

xdescribe("Diary Story 1 tests:", () =>  {
    it("Diary entry length increases when entry is added", () => {
        //Arrange
        let testDiary = new Diary();
        let testEntry = "This is the first test entry";
        let expected = 1;
        //Act
        testDiary.addEntry(testEntry);
        //Assert
        expect(testDiary.getEntries().length).toBe(expected);
        //Report
    })

    it("Added entry matches what is in the diary", () => {
        //Arrange
        let testDiary = new Diary();
        let testEntry = "This is the first test entry";
        let expected = true;
        //Act
        testDiary.addEntry(testEntry);
        //Assert
        expect(testDiary.getEntries().includes("This is the first test entry")).toBe(expected);
        //Report
    })

    it("Can add more that one entry", () => {
        //Arrange
        let testDiary = new Diary();
        let testEntry = "This is the first test entry";
        let testEntry2 = "This is the second test entry";
        let expected = true;
        //Act
        testDiary.addEntry(testEntry);
        testDiary.addEntry(testEntry2);
        //Assert
        expect(testDiary.getEntries().includes("This is the first test entry") && testDiary.getEntries().includes("This is the second test entry")).toBe(expected);
        //Report
    })
});

describe("Diary Story 2 tests:", () => {
 z   it("Read entry returns a string", () => {
        //Arrange
        let testDiary = new Diary();
        let testEntry = "This is the first test entry";
        let expected = "This is the first test entry";
        let actual;
        //Act
        testDiary.addEntry(testEntry);  
        actual = testDiary.readEntry(1);
        //Assert
        expect(actual).toBe(expected);
    })

    it("Read entry returns an entry from the array", () => {
        //Arrange
        let testDiary = new Diary();
        let testEntry = "This is the first test entry";
        let expected = "This is the first test entry";
        let actual;
        //Act
        testDiary.addEntry(testEntry);
        actual = testDiary.readEntry(1);
        //Assert
        expect(actual).toBe(expected);
    })

    it("Read entry returns the correct entry from the array", () => {
        //Arrange
        let testDiary = new Diary();
        let testEntry = "This is the first test entry";
        let testEntry2 = "This is the second test entry";
        let expected = "This is the second test entry";
        let actual;
        //Act
        testDiary.addEntry(testEntry);
        testDiary.addEntry(testEntry2);
        actual = testDiary.readEntry(2);
        //Assert
        expect(actual).toBe(expected);
    })

});