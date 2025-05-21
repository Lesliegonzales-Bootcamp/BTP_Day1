sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";
    
    return Controller.extend("com.acn.training.project2.controller.View1", {
        onInit() {
        },
        onClearInputs: function () {
            this.byId("_IDGenInput").setValue("");
            this.byId("_IDGenInput1").setValue("");
            this.byId("_IDGenInput2").setValue("");
            this.byId("_IDGenInput3").setValue("");
            this.byId("_IDGenInput4").setValue("");
          }
    });
});