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






// *  Fish which renders individual fish objects as HTML
//  */

// export const Fish = (fish) => {
//     return `
//         <section class="fish card">
//             <div><img  class="fish__image image--card" src="images/${fish.image}" /></div>
//             <div class="fish__name">${fish.name}</div>
//             <div class="fish__species">${fish.species}</div>
//             <div class="fish__length">${fish.length}</div>
//             <div class="fish__location">${fish.location}</div>
//             <div class="fish__diet">${fish.food}</div>
//         </section>