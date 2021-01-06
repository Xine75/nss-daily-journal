// import { saveEntries } from "./JournalDataProvider.js"

const contentTarget = document.querySelector(".form")
const eventHub = document.querySelector(".container")

//set up event listener here

const render = () => {
    contentTarget.innerHTML = `
    <fieldset>
                        <label for="journalDate">Date of Entry</label>
                        <input type="date" name = "journalDate" id = "journalDate">
                    </fieldset>

            
                    <fieldset>
                        <label for="currentConcept">Today's Concept</label>
                        <input type="text" name = "currentConcept" id = "currentConcept">
                    </fieldset>

                    
                    <fieldset>
                        <label for="journalEntry">Today's Journal Entry</label>
                        <textarea name = "journalEntry" id = "journalEntry" class = "journalEntry" rows = "20" cols = "75"></textarea>
                    </fieldset>

                    
                    <fieldset>
                        <label for="mood">Today's Mood:</label>

                        <select name="mood" class="mood">
                            <option value="inspired">What's your mood?</option>
                        <option value="inspired">Inspired</option>
                        <option value="satisfied">Satisfied</option>
                        <option value="frustrated">Frustrated</option>
                        <option value="ugh">Ugh!</option>
                        </select>
                    </fieldset>
    
    
    `
}
export const JournalFormComponent = () => {
    render()
}
