/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"EjercicioInte1/EjercicioInte1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
