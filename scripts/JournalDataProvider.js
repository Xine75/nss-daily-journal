

let entries = []
const eventHub = document.querySelector(".container")

export const useEntries = () => {
    entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return entries.slice()
}



export const getEntries = () => {
    
    return fetch("http://localhost:8080/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => {
                entries = parsedEntries

            }
        )
}
//Broadcasts that something was changed in the note field

const dispatchStateChangeEvent = () => {
   
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

export const saveEntries = entry => {
    return fetch("http://localhost:8080/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //strigifies the note-object
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}
