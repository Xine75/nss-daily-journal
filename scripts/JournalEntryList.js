/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

  // DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog")
const eventHub = document.querySelector(".container")
let journalEntries = []

eventHub.addEventListener("journalStateChanged", () => {
    EntryListComponent()
    console.log("journalStateChanged listening")})

export const EntryListComponent = () => {


        // Use the journal entry data from the data provider component
        let entries = useEntries()

        for (const entry of entries) {
            /*
                Invoke the component that returns an
                HTML representation of a single entry
            */
           journalEntries.push(JournalEntryComponent(entry))
           
        }
        entryLog.innerHTML += journalEntries.join("")
        
    
}

// export const entryList = () => {
//         getEntries()
//             .then(() => {
//                 let allEntries = useEntries()
//                 render(allEntries)
//             })
//     }