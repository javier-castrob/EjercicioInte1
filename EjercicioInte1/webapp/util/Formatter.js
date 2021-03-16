jQuery.sap.require("sap.ui.core.format.DateFormat");
sap.ui.define([
	], function () {
		"use strict";

		return {
            formatDate: function (sDate) {
                if (!sDate) {
                    return;
                }
                var date = new Date(sDate);
                var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                    pattern: "dd/MM/yyyy"
                });
                return dateFormat.format(date);
            },
            estadoPeso :  function (sPeso) {                
                var fPeso = parseFloat(sPeso);
                if (fPeso < 0){
                    return "None";
                }
                else if (fPeso < 1) {
                    return "Success";
                } else if (fPeso >= 1 && fPeso <= 2) {
                    return "Warning";
                } else {
                    return "Error";
                }
                
            },
            ARSaEUR : function (sPrecio) {
                var fPrecio = parseFloat(sPrecio);
                return fPrecio/160;
            }
		};
	}, true);