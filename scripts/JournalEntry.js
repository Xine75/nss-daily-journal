/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
         <div class="journalDate">Date:  ${entry.date}</div>
         <div class="currentConcept">Concept: ${entry.concept}</div>
         <div class="journalEntry">Entry: ${entry.entry}</div>
         <div class="mood">Mood: ${entry.mood}</div>
         
        </section>
    `
}
