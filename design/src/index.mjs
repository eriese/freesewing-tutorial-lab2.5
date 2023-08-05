// Import Design constructor
import { Design } from '@freesewing/core'
// Import parts
import { bib } from './bib.mjs'

// Create the new design
const Tutorial = new Design({
  data: {
    /*
     * If you like, you can add any data you want to your design.
     * We'll add the name here as an example.
     *
     * If you don't use this,
     * you can remove this data key enterely.
     */
    name: "Tutorial",
  },
  // A list of parts is all that is required.
  parts: [ bib  ],
})

const Pattern = Tutorial
/*
 * Named exports
 *
 * We export the design itself as well as each part individually.
 * This allows us to re-use these parts in other designs.
 */

export { bib, Tutorial, Pattern }

