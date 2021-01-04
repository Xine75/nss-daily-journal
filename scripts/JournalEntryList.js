/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

export const EntryListComponent = () => {

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog")


    // Use the journal entry data from the data provider component
    let entries = useEntries()

    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        const entryHTML = JournalEntryComponent(entry)
        entryLog.innerHTML += entryHTML
    }
}

export const entryList = () => {
    getEntries()
        .then(() => {
            const allEntries = useEntries()
            render(allEntries)
        })
}







