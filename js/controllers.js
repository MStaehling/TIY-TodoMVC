(function(window){
  //Event Listieners
  //Event Handlers
  //In Vanilla
  documanet.querySelector('some-elment').addEventListener('some-event', doSomeStuff);

  //In jquery
  $('some-element').on('some-event', doSomeStuff);

  /**
   *
   * Event Handler!
   *
   * @param {Event} event that fires
   */
  function doSomeStuff(event){
    //do some stuff when 'some-event' fires on 'some-element'...
    // - CRUD the Model
    // i Update the View with the data from the Model
  }// END doSomeStuff


})(window);
