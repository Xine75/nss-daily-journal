/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

export const EntryListComponent = () => {

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog")


    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        const entryHTML = JournalEntryComponent(entry)
        entryLog.innerHTML += entryHTML
    }
}



// /**
//  *  FishList which renders individual fish objects as HTML
//  */



// import { mostHolyFish } from "./FishDataProvider.js"
// import { soldierFish } from "./FishDataProvider.js"
// import { nonHolyFish } from "./FishDataProvider.js"

// import { Fish } from "./Fish.js"

// export const FishList = () => {

//     // Get a reference to the `<article class="content">` element
//     const contentElement = document.querySelector(".container--left")

//     const holyFish = mostHolyFish();
//     const soldiers = soldierFish();
//     const losers = nonHolyFish();


//       for (const fishObject of holyFish) {
//           // console.log("one fish!", fishObject)
//           const fishHTMLRepresentations = Fish(fishObject)
          
//         contentElement.innerHTML += fishHTMLRepresentations
//   }
//   for (const fishObject of soldiers) {
//     // console.log("one fish!", fishObject)
//     const fishHTMLRepresentations = Fish(fishObject)
//     contentElement.innerHTML += fishHTMLRepresentations

// }  for (const fishObject of losers) {
//   // console.log("one fish!", fishObject)
//   const fishHTMLRepresentations = Fish(fishObject)
//   contentElement.innerHTML += fishHTMLRepresentations
// }
// }

