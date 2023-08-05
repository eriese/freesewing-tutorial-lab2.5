function draftBib ({
  // Uncomment below to destructure what you need
  /*
   * Content constructors
   */
  //Path,	   // A Path constructor to create new paths
  //Point,   // A Point constructor to create new points
  //Snippet, // A Snippet constructor to create new snippets
  /*
   * Content constainers
   */
  //paths,    // Add a Path to your part by adding it to this object
  //points,   // Add a Points to your part by adding it to this object
  //snippets, // Add a Snippet to your part by adding it to this object
  /*
   * Access to settings
   */
  //absoluteOptions, // Access to settings.absoluteOptions
  //complete,        // Access to settings.complete
  //measurements,    // Access to settings.measurements
  //options,         // Access to settings.options
  //paperless,       // Access to settings.paperless
  //sa,              // Access to settings.sa
  //scale,           // Access to settings.scale
  /*
   * Access to utilities
   */
  //getId,     //See the getId documentation
  //hide,      //See the hide documentation
  //log,       //See the logging documentation
  //macro,     //See the macros documentation
  //setHidden, //See the setHidden documentation
  //store,     //See the store documentation
  //unhide,    //See the unhide documentation
  //units,     //See the units documentation
  ///utils,     //See the utils documentation
  /*
   * Return value
   */
  part, // Your draft method must return this
}) {
  
  // Work your magic here 
  return part
}

export const bib = {
  /*
   * name: Holds the name of this part.
   *
   * We STRONGLY recommend naming your parts in the format of
   * design.part to avoid naming conflicts when people re-use
   * parts across designs.
   */
  name: 'tutorial.bib',
  /*
   * draft: Holds the draft method for this part
   *
   * This should be a function that drafts and returns the part
   *
   * Documentation: https://freesewing.dev/reference/api/part/draft
   */
  draft: draftBib,
  after: [
    /*
     * after: Holds a list of parts that should be drafted prior to this part.
     *
     * You'll need to import these parts, just as with the from key above.
     *
     * If you don't have any parts to draft prior to this part,
     * you can remove this options key entirely.
     *
     * Documentation: https://freesewing.dev/reference/api/part/config/dependencies
     */
  ],
  /*
   * from: Holds the part you want to extend.
   *
   * Documentation: https://freesewing.dev/reference/api/part/config/dependencies
   */
  from: false,
  /* hide: */
  hide: {
    /*
     * self: Set this to true to hide the part.
     *
     * We've set this to false here to clarify its use.
     * If you don't want to hide this part,
     * you can remove the hide key entirely.
     */
    self: false,
    /*
     * from: Set this to true to hide a part's from dependency.
     *
     * If you don't want to hide this part's from dependency,
     * you can remove the from key entirely.
     */
    from: false,
    /*
     * after: Set this to true to hide any parts specified in the after setting
     *
     * We've set this to false here to clarify its use.
     * If you don't want to hide this part,
     * you can remove the hide key entirely.
     */
    after: false
  },
  options: {
    /*
     * options: Holds (the configuration of) options for this part
     *
     * Declare options used in this part here.
     *
     * If you don't have any options to add,
     * you can remove this options key entirely.
     *
     * Documentation: https://freesewing.dev/reference/api/part/config/options
     */
    
  },
  measurements: [
    /*
     * measurements: Holds a list of measurements required by this part.
     *
     * Declare measurements required by this part here.
     *
     * If you don't have any required measurements to add,
     * you can remove this measurements key entirely.
     *
     * Documentation: https://freesewing.dev/reference/api/part/config/measurements
     */
  ],
  optionalMeasurements: [
    /*
     * optionalMeasurements: Holds a list of measurements optional in this part.
     *
     * Declare measurements that are optional for this part here.
     *
     * If you don't have any optional measurements to add,
     * you can remove this optionalMeasurements key entirely.
     *
     * Documentation: https://freesewing.dev/reference/api/part/config/measurements
     */
  ],
  plugins: [
    /*
     * plugins: Holds a list of plugins this part relies on.
     *
     * Add all the plugins here that you need in this part.
     *
     * If you don't have any plugins to add,
     * you can remove this plugins key entirely.
     *
     * Documentation: https://freesewing.dev/reference/api/part/config/plugins
     */
  ]
}
