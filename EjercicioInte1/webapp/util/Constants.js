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
                }
            },
            json: {
                productos: "Productos.json",
                proveedores: "Proveedores.json"
            },
            ids: {
                tablaFragment:{
                    tabla: "idTableProductos",
                    filasTabla: "idFilasTabla"
                },
                FRAGMENTS: {
                    tabla: "idFragmentTabla"
                }
            },
            routes: {
                main: "Main",
                FRAGMENTS: {
                    dialog: "EjercicioInte1.EjercicioInte1.fragments.Dialog"
                }
            }
		};
	}, true);
