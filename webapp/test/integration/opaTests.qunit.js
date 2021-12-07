/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["iitp/chart2401/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
