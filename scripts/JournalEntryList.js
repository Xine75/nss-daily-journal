/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

  // DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog")
const eventHub = document.querySelector(".container")

export const EntryListComponent = () => {

    eventHub.addEventListener("journalStateChanged", () => {
        // entryList()
        console.log("journalStateChanged listening")

        // Use the journal entry data from the data provider component
        let entries = useEntries()

        for (const entry of entries) {
            /*
                Invoke the component that returns an
                HTML representation of a single entry
            */
           entries.push(JournalEntryComponent(entry))
           entryLog.innerHTML += entries.join("")
        }

        
    })
}

// export const entryList = () => {
//         getEntries()
//             .then(() => {
//                 let allEntries = useEntries()
//                 render(allEntries)
//             })
//     }