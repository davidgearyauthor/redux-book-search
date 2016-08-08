export default {
  past: [],
  present: undefined,
  future: [],

  thereIsAPresent:     function () { return this.present !== undefined; },
  thereIsAPast:        function () { return this.past.length > 0; },
  thereIsAFuture:      function () { return this.future.length > 0; },
  setPresent:          function (state) { this.present = state; },
  movePresentToPast:   function () { this.past.push(this.present); },
  movePresentToFuture: function () { this.future.push(this.present); },
  movePastToPresent:   function () { this.setPresent(this.past.pop()); },
  moveFutureToPresent: function () { this.setPresent(this.future.pop()); },
 
  push: function (currentState) {
    if (this.thereIsAPresent()) {
      this.movePresentToPast();
    }
    this.setPresent(currentState);
  },
  
  undo: function () {
    if (this.thereIsAPresent()) {   
      this.movePresentToFuture(); // Moving back in time
      this.movePastToPresent();   // Moving back in time
    }
  },  

  redo: function () {
    if (!this.thereIsAFuture()) { // No future!
      return;
    }

    if (this.thereIsAPresent()) {
      this.movePresentToPast(); // Moving forward in time
    }

    this.moveFutureToPresent(); // Moving forward in time
  },

  gotoState: function (i) {
    const index = Number(i);
    const allstates = [...this.past, this.present, ...this.future];
   
    this.present = allstates[index];
    this.past = allstates.slice(0, index);
    this.future = allstates.slice(index + 1, allstates.length);
  },
};
