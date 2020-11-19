/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "11/16/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Inspired"
    },

    {
        id: 2,
        date: "11/17/2020",
        concept: "HTML & JavaScript",
        entry: "We talked about how to automate information on a page using JavaScript",
        mood: "Frustrated"
    },

    {
        id: 3,
        date: "11/18/2020",
        concept: "More JavaScript",
        entry: "We worked in labs to create a Daily Journal, applying what we have learned from Martin's Aquarium",
        mood: "Satisfied"
    }

]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}