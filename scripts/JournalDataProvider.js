

let entries = []

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





/* (--This is what we did before we had an external API--)
    You export a function that provides a version of the raw data in the format that you want
*/
// export const useEntries = () => {
//     const sortedByDate = entries.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }