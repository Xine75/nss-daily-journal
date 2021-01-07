 import { saveEntries } from "../JournalDataProvider.js"

const contentTarget = document.querySelector(".form")
const eventHub = document.querySelector("#container")

//set up event listener here

const render = () => {
    contentTarget.innerHTML = `
    <fieldset>
                        <label for="journalDate">Date of Entry</label>
                        <input type="date" name ="journalDate" id ="journalDate">
                    </fieldset>

                    <fieldset>
                        <label for="currentConcept">Today's Concept</label>
                        <input type="text" name ="currentConcept" id ="currentConcept">
                    </fieldset>

                    <fieldset>
                    <label for="mood">Today's Mood:</label>
                    <select name="mood" class="mood" id="mood">
                    <option value="0">What's your mood?</option>
                    <option value="inspired">🤩 inspired</option>
                    <option value="curious">🧐 curious</option>
                    <option value="satisfied">😌 satisfied</option>
                    <option value="frustrated">😩 frustrated</option>
                    <option value="ugh">🤯 please kill me</option>
                    </select>
                </fieldset>
    
                    <fieldset>
                        <label for="journalEntry">Today's Journal Entry</label>
                        <textarea name = "journalEntry" id ="journalEntry" class = "journalEntry" rows = "20" cols = "75"></textarea>
                    </fieldset>
                    
                    <fieldset>
                    <button id="saveJournalEntryButton">Record Journal Entry</button>
                </fieldset>

    `
}

//Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    console.log("I'm listening")
    
    if(clickEvent.target.id === "saveJournalEntryButton") {
        clickEvent.preventDefault()
        //gather data from the form
        const journalDate = document.querySelector("#journalDate").value 
        const conceptsCovered = document.querySelector("#currentConcept").value 
        const journalEntry = document.querySelector("#journalEntry").value 
        const mood = document.querySelector("#mood").value 

        //make a new object representation of the note
        const newJournalEntry = {
            //key-value pairs here
            date: journalDate,
            concept: conceptsCovered,
            entry: journalEntry,
            mood: mood
        }
        console.log(newJournalEntry)
        //change API state and application state
        saveEntries(newJournalEntry)
    }
})

export const JournalFormComponent = () => {
    render()
}


