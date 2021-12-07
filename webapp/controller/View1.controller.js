sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/viz/ui5/data/FlattenedDataset",
    "sap/viz/ui5/controls/common/feeds/FeedItem"
],  
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, FlattenedDataset, FeedItem) {
		"use strict";

		return Controller.extend("iitp.chart2401.controller.View1", {
			onInit: function () {
                let oModel = new JSONModel();
                oModel.loadData("../model/data_chart.json");

                let oVizFrame = this.getView().byId("idPiechart");
                let oDataset = new FlattenedDataset({
                    dimensions: [{
                        name: "Skill Name",
                        value: "{skillName}"
                    }],
                    measures: [{
                        name: "Rate",
                        value: "{rate}"
                    }],
                    data: {
                        path: "/newSap"
                    }
                });
                oVizFrame.setDataset(oDataset);
                oVizFrame.setModel(oModel);

                oVizFrame.setVizProperties({
                    title: { text : "SAP Technology"},
                    plotArea: {colorPalette: d3.scale.category20().range(),
                    drawingEffect: "glossy"}
                });
                let feedSize = new FeedItem({
                    uid: "size",
                    type: "Measure",
                    values: ["Rate"]
                });
                let feedColor = new FeedItem({
                    uid: "color",
                    type: "Dimension",
                    values: ["Skill Name"]
                });
                oVizFrame.addFeed(feedSize);
                oVizFrame.addFeed(feedColor);
			}
		});
	});
