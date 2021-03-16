sap.ui.define([
	], function () {
		"use strict";

		return {
            model: {
                I18N: "i18n",
                Productos: "Productos",
                Busqueda: "Busqueda",
                Proveedores: "Proveedores",
                Producto: "Producto"
            },
            filter: {
                proveedor:"proveedor",
                producto:"producto"
            },
            properties: {
                Busqueda: {
                    fecha: "/fecha",
                    proveedor: "/proveedor",
                    pais: "/pais"
                },
                i18n: {
                    fecha: "labelFecha",
                    proveedor : "proveedor",
                    pais: "labelPais"
                }
            },
            json: {
                productos: "Productos.json",
                proveedores: "Proveedores.json"
            },
            ids: {
                tablaFragment:{
                    id: "idFragmentTabla",
                    tabla: "idTableProductos",
                    filasTabla: "idFilasTabla"
                },
                detalleDialog:{
                    id: "idDetalleDialog"
                }
            },
            routes: {
                main: "Main",
                FRAGMENTS: {
                    dialog: "EjercicioInte1.EjercicioInte1.fragments.dialogoDetalle"
                }
            }
		};
	}, true);
