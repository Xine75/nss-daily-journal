/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
         <div class="journalDate">${entry.date}</div>
         <div class="currentConcept">${entry.concept}</div>
         <div class="journalEntry">${entry.entry}</div>
         <div class="mood">${entry.mood}</div>
        </section>
    `
}
