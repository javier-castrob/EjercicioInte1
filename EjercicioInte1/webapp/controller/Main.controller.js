sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "EjercicioInte1/EjercicioInte1/util/Services",
        "EjercicioInte1/EjercicioInte1/util/Constants",
        "EjercicioInte1/EjercicioInte1/util/Formatter",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/m/MessageBox",
        "sap/ui/core/Fragment"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller, JSONModel, Services, Constants, Formatter, Filter, FilterOperator, MessageBox, Fragment) {
		"use strict";

		return Controller.extend("EjercicioInte1.EjercicioInte1.controller.Main", {
            Formatter: Formatter,
			onInit: function () {
                this.loadModel(Constants.json.proveedores, Constants.model.Proveedores);
                let oBusqueda = {
                    fecha: null,
                    proveedor: null,
                    pais: null
                }
                let busquedaModel = new JSONModel (oBusqueda);
                this.getView().setModel(busquedaModel, Constants.model.Busqueda);           
            },
            loadModel: async function(json, name){
                const oResponse = await Services.getLocalJSON(json);
                const oData = oResponse[0];
                var oCiudadesModel = new JSONModel();
                oCiudadesModel.setData(oData);
                this.getOwnerComponent().setModel(oCiudadesModel, name);
            },
            cambiarIdioma: function (oEvent) {
                if (oEvent.getSource().getProperty("state")){
                    sap.ui.getCore().getConfiguration().setLanguage("ES");
                } else {
                    sap.ui.getCore().getConfiguration().setLanguage("EN");
                }                
            },
            buscar: function () {
                this.loadModel(Constants.json.productos, Constants.model.Productos)
                let oBusquedaModel = this.getView().getModel(Constants.model.Busqueda);
                let sFecha =  oBusquedaModel.getProperty(Constants.properties.Busqueda.fecha);
                let sProveedor =  oBusquedaModel.getProperty(Constants.properties.Busqueda.proveedor);
                let sPais =  oBusquedaModel.getProperty(Constants.properties.Busqueda.pais);
                let sLabelFecha= this.getOwnerComponent().getModel(Constants.model.I18N).getResourceBundle().getText("labelFecha");
                let sLabelProveedor= this.getOwnerComponent().getModel(Constants.model.I18N).getResourceBundle().getText("proveedor");
                let sLabelPais = this.getOwnerComponent().getModel(Constants.model.I18N).getResourceBundle().getText("labelPais");
                MessageBox.information(
                    `${sLabelFecha}: ${sFecha}
                    ${sLabelProveedor}: ${sProveedor}
                    ${sLabelPais}: ${sPais}
                    `
                );                
            },
            onSearch: function (oEvent) {
                var aFilters = [];
                var sQuery = oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0) {
                    var filter = new Filter(Constants.filter.producto, FilterOperator.Contains, sQuery);
                    aFilters.push(filter);
                    filter = new Filter(Constants.filter.proveedor, FilterOperator.Contains, sQuery);
                    aFilters.push(filter);
                    aFilters = new Filter(aFilters);
                }
                // update list binding
                var sFragmentId = this.getView().createId("idFragmentTabla");                                
                var oTabla = sap.ui.core.Fragment.byId(sFragmentId, "idTableProductos");
                var oBinding = oTabla.getBinding("items");
                oBinding.filter(aFilters, "Application");
            },
            detalle: function (oEvent) {
                var oItem = oEvent.getSource();
                var oBindingContext = oItem.getBindingContext(Constants.model.Productos);
                var oModel = this.getView().getModel(Constants.model.Productos);
                var oProductoSeleccionado = oModel.getProperty(oBindingContext.getPath());
                let productoModel = new JSONModel (oProductoSeleccionado);
                this.getView().setModel(productoModel, Constants.model.Producto);                
                if (!this._oFragment) {
                    this._oFragment = sap.ui.xmlfragment("idDetalleDialog", "EjercicioInte1.EjercicioInte1.fragments.dialogoDetalle", this);
                    this.getView().addDependent(this._oFragment);
                }
                this._oFragment.open();
            },
            closeDialog: function () {
               this._oFragment.close();           

            }
		});
	});
