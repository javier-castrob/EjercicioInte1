sap.ui.define([], function () {
		"use strict";

		return {
            /**
            * Converts a jQuery AJAX promise into a mainline promise
            * @param {object} oPromise jQuery Deferred object
            */
            toPromise: function (oPromise) {
            return new Promise(function (resolve, reject) {
            oPromise.then(() => {
            const sHeaders = oPromise.done().getAllResponseHeaders();
            const aHeaders = sHeaders.trim().split(/[\r\n]+/);
            const oHeaderMap = {};
            aHeaders.forEach(function (sLine) {
            const aParts = sLine.split(': ');
            const sHeader = aParts.shift();
            const sValue = aParts.join(': ');
            oHeaderMap[sHeader] = sValue;
            });
            resolve([oPromise.done().responseJSON, oHeaderMap]);
            }, reject);
            });
            },

            /**
            * Wrapper function, creates an jQuery deferred object for AJAX
            * @param {object} oOptions Request options
            */
            promisizer: function (oOptions) {
            return this.toPromise(jQuery.ajax(oOptions));
            },
            /**
            * Requests a JSON file in localService folder
            * @param {string} sJsonName JSON filename
            */
            getLocalJSON: function (sJsonName) {
            return this.promisizer(jQuery.sap.getModulePath("EjercicioInte1.EjercicioInte1") + "/localService/" + sJsonName);
            },


        }
	});