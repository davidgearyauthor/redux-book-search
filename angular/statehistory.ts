export default {
  past: [],
  present: undefined,
  future: [],

  thereIsAPresent:     function () { return this.present !== undefined; },
  thereIsAPast:        function () { return this.past.length > 0; },
  thereIsAFuture:      function () { return this.future.length > 0; },
  setPresent:          function (state) { this.present = state; },
  movePresentToPast:   function () { this.past.push(this.present); },
 
  push: function (currentState) {
    if (this.thereIsAPresent()) {
      this.movePresentToPast();
    }
    this.setPresent(currentState);
  },
  
  getIndex: function () {
    return this.past.length;
  },
  
  undo: function () {
    if (this.thereIsAPast()) {   
      this.gotoState(this.getIndex() - 1);
    }
  },  

  redo: function () {
    if (this.thereIsAFuture()) {
      this.gotoState(this.getIndex() + 1);
    }
  },

  gotoState: function (i) {
    const index = Number(i);
    const allstates = [...this.past, this.present, ...this.future];
   
    this.present = allstates[index];
    this.past = allstates.slice(0, index);
    this.future = allstates.slice(index + 1, allstates.length);
  },
};
