ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-90.185650, 12.841989, -87.611601, 14.774700]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Heatmap_enfermedades_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Heatmap_enfermedades",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Heatmap_enfermedades_1.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [-90.133975, 13.153497, -87.683275, 14.448597]
                            })
                        });
var format_Shapefile_El_Salvador_2 = new ol.format.GeoJSON();
var features_Shapefile_El_Salvador_2 = format_Shapefile_El_Salvador_2.readFeatures(json_Shapefile_El_Salvador_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Shapefile_El_Salvador_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Shapefile_El_Salvador_2.addFeatures(features_Shapefile_El_Salvador_2);
var lyr_Shapefile_El_Salvador_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Shapefile_El_Salvador_2, 
                style: style_Shapefile_El_Salvador_2,
                interactive: true,
                title: '<img src="styles/legend/Shapefile_El_Salvador_2.png" /> Shapefile_El_Salvador'
            });
var format_DepartamentosElSalvador_3 = new ol.format.GeoJSON();
var features_DepartamentosElSalvador_3 = format_DepartamentosElSalvador_3.readFeatures(json_DepartamentosElSalvador_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DepartamentosElSalvador_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosElSalvador_3.addFeatures(features_DepartamentosElSalvador_3);
var lyr_DepartamentosElSalvador_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DepartamentosElSalvador_3, 
                style: style_DepartamentosElSalvador_3,
                interactive: true,
                title: '<img src="styles/legend/DepartamentosElSalvador_3.png" /> Departamentos El Salvador'
            });
var format_MunicipiosElSalvador_4 = new ol.format.GeoJSON();
var features_MunicipiosElSalvador_4 = format_MunicipiosElSalvador_4.readFeatures(json_MunicipiosElSalvador_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MunicipiosElSalvador_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipiosElSalvador_4.addFeatures(features_MunicipiosElSalvador_4);
var lyr_MunicipiosElSalvador_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MunicipiosElSalvador_4, 
                style: style_MunicipiosElSalvador_4,
                interactive: true,
                title: '<img src="styles/legend/MunicipiosElSalvador_4.png" /> Municipios El Salvador'
            });
var format_Enfermedadespormunicipiopoligonos_5 = new ol.format.GeoJSON();
var features_Enfermedadespormunicipiopoligonos_5 = format_Enfermedadespormunicipiopoligonos_5.readFeatures(json_Enfermedadespormunicipiopoligonos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Enfermedadespormunicipiopoligonos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Enfermedadespormunicipiopoligonos_5.addFeatures(features_Enfermedadespormunicipiopoligonos_5);
var lyr_Enfermedadespormunicipiopoligonos_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Enfermedadespormunicipiopoligonos_5, 
                style: style_Enfermedadespormunicipiopoligonos_5,
                interactive: true,
                title: 'Enfermedades por municipio poligonos'
            });
var format_Enfermedades_por_municipio_6 = new ol.format.GeoJSON();
var features_Enfermedades_por_municipio_6 = format_Enfermedades_por_municipio_6.readFeatures(json_Enfermedades_por_municipio_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Enfermedades_por_municipio_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Enfermedades_por_municipio_6.addFeatures(features_Enfermedades_por_municipio_6);
var lyr_Enfermedades_por_municipio_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Enfermedades_por_municipio_6, 
                style: style_Enfermedades_por_municipio_6,
                interactive: true,
                title: '<img src="styles/legend/Enfermedades_por_municipio_6.png" /> Enfermedades_por_municipio'
            });
var format_Casos_dengue_por_municipio_7 = new ol.format.GeoJSON();
var features_Casos_dengue_por_municipio_7 = format_Casos_dengue_por_municipio_7.readFeatures(json_Casos_dengue_por_municipio_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Casos_dengue_por_municipio_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casos_dengue_por_municipio_7.addFeatures(features_Casos_dengue_por_municipio_7);
var lyr_Casos_dengue_por_municipio_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casos_dengue_por_municipio_7, 
                style: style_Casos_dengue_por_municipio_7,
                interactive: true,
                title: '<img src="styles/legend/Casos_dengue_por_municipio_7.png" /> Casos_dengue_por_municipio'
            });
var format_Casos_diarrea_por_municipio_8 = new ol.format.GeoJSON();
var features_Casos_diarrea_por_municipio_8 = format_Casos_diarrea_por_municipio_8.readFeatures(json_Casos_diarrea_por_municipio_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Casos_diarrea_por_municipio_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casos_diarrea_por_municipio_8.addFeatures(features_Casos_diarrea_por_municipio_8);
var lyr_Casos_diarrea_por_municipio_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casos_diarrea_por_municipio_8, 
                style: style_Casos_diarrea_por_municipio_8,
                interactive: true,
                title: '<img src="styles/legend/Casos_diarrea_por_municipio_8.png" /> Casos_diarrea_por_municipio'
            });
var format_Casos_enfermedad_arreica_aguda_por_municipio_9 = new ol.format.GeoJSON();
var features_Casos_enfermedad_arreica_aguda_por_municipio_9 = format_Casos_enfermedad_arreica_aguda_por_municipio_9.readFeatures(json_Casos_enfermedad_arreica_aguda_por_municipio_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Casos_enfermedad_arreica_aguda_por_municipio_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casos_enfermedad_arreica_aguda_por_municipio_9.addFeatures(features_Casos_enfermedad_arreica_aguda_por_municipio_9);
var lyr_Casos_enfermedad_arreica_aguda_por_municipio_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casos_enfermedad_arreica_aguda_por_municipio_9, 
                style: style_Casos_enfermedad_arreica_aguda_por_municipio_9,
                interactive: true,
                title: '<img src="styles/legend/Casos_enfermedad_arreica_aguda_por_municipio_9.png" /> Casos_enfermedad_arreica_aguda_por_municipio'
            });
var format_Casos_infeccion_respiratoria_aguda_por_municipio_10 = new ol.format.GeoJSON();
var features_Casos_infeccion_respiratoria_aguda_por_municipio_10 = format_Casos_infeccion_respiratoria_aguda_por_municipio_10.readFeatures(json_Casos_infeccion_respiratoria_aguda_por_municipio_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Casos_infeccion_respiratoria_aguda_por_municipio_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casos_infeccion_respiratoria_aguda_por_municipio_10.addFeatures(features_Casos_infeccion_respiratoria_aguda_por_municipio_10);
var lyr_Casos_infeccion_respiratoria_aguda_por_municipio_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casos_infeccion_respiratoria_aguda_por_municipio_10, 
                style: style_Casos_infeccion_respiratoria_aguda_por_municipio_10,
                interactive: true,
                title: '<img src="styles/legend/Casos_infeccion_respiratoria_aguda_por_municipio_10.png" /> Casos_infeccion_respiratoria_aguda_por_municipio'
            });
var format_Casos_neumonia_por_municipio_11 = new ol.format.GeoJSON();
var features_Casos_neumonia_por_municipio_11 = format_Casos_neumonia_por_municipio_11.readFeatures(json_Casos_neumonia_por_municipio_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Casos_neumonia_por_municipio_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casos_neumonia_por_municipio_11.addFeatures(features_Casos_neumonia_por_municipio_11);
var lyr_Casos_neumonia_por_municipio_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casos_neumonia_por_municipio_11, 
                style: style_Casos_neumonia_por_municipio_11,
                interactive: true,
                title: '<img src="styles/legend/Casos_neumonia_por_municipio_11.png" /> Casos_neumonia_por_municipio'
            });
var format_Casos_zyka_chikungunya_por_municipio_12 = new ol.format.GeoJSON();
var features_Casos_zyka_chikungunya_por_municipio_12 = format_Casos_zyka_chikungunya_por_municipio_12.readFeatures(json_Casos_zyka_chikungunya_por_municipio_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Casos_zyka_chikungunya_por_municipio_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casos_zyka_chikungunya_por_municipio_12.addFeatures(features_Casos_zyka_chikungunya_por_municipio_12);
var lyr_Casos_zyka_chikungunya_por_municipio_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Casos_zyka_chikungunya_por_municipio_12, 
                style: style_Casos_zyka_chikungunya_por_municipio_12,
                interactive: true,
                title: '<img src="styles/legend/Casos_zyka_chikungunya_por_municipio_12.png" /> Casos_zyka_chikungunya_por_municipio'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Heatmap_enfermedades_1.setVisible(true);lyr_Shapefile_El_Salvador_2.setVisible(true);lyr_DepartamentosElSalvador_3.setVisible(true);lyr_MunicipiosElSalvador_4.setVisible(true);lyr_Enfermedadespormunicipiopoligonos_5.setVisible(true);lyr_Enfermedades_por_municipio_6.setVisible(true);lyr_Casos_dengue_por_municipio_7.setVisible(true);lyr_Casos_diarrea_por_municipio_8.setVisible(true);lyr_Casos_enfermedad_arreica_aguda_por_municipio_9.setVisible(true);lyr_Casos_infeccion_respiratoria_aguda_por_municipio_10.setVisible(true);lyr_Casos_neumonia_por_municipio_11.setVisible(true);lyr_Casos_zyka_chikungunya_por_municipio_12.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Heatmap_enfermedades_1,lyr_Shapefile_El_Salvador_2,lyr_DepartamentosElSalvador_3,lyr_MunicipiosElSalvador_4,lyr_Enfermedadespormunicipiopoligonos_5,lyr_Enfermedades_por_municipio_6,lyr_Casos_dengue_por_municipio_7,lyr_Casos_diarrea_por_municipio_8,lyr_Casos_enfermedad_arreica_aguda_por_municipio_9,lyr_Casos_infeccion_respiratoria_aguda_por_municipio_10,lyr_Casos_neumonia_por_municipio_11,lyr_Casos_zyka_chikungunya_por_municipio_12];
lyr_Shapefile_El_Salvador_2.set('fieldAliases', {'FID': 'FID', 'PAIS_': 'PAIS_', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_DepartamentosElSalvador_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'DEPTO': 'DEPTO', 'ID_DEPTO': 'ID_DEPTO', 'ZONA': 'ZONA', });
lyr_MunicipiosElSalvador_4.set('fieldAliases', {'COD_MUN4': 'COD_MUN4', 'NOMBRE': 'NOMBRE', 'POBLACION': 'POBLACION', 'POBREZA': 'POBREZA', });
lyr_Enfermedadespormunicipiopoligonos_5.set('fieldAliases', {'COD_MUN4': 'COD_MUN4', 'NOMBRE': 'NOMBRE', 'POBLACION': 'POBLACION', 'POBREZA': 'POBREZA', '.CASOS_DIARREA': '.CASOS_DIARREA', '.CASOS_DENGUE': '.CASOS_DENGUE', '.CASOS_ZIKA_CHIKUNGUNYA': '.CASOS_ZIKA_CHIKUNGUNYA', '.CASOS_NEUMONIA': '.CASOS_NEUMONIA', '.CASOS_ENF_ARREICA_AGU': '.CASOS_ENF_ARREICA_AGU', '.CASOS_INFEC_RESP_AGU': '.CASOS_INFEC_RESP_AGU', });
lyr_Enfermedades_por_municipio_6.set('fieldAliases', {'CODMUNI': 'CODMUNI', 'CODEPTO': 'CODEPTO', 'MUNICIPIO': 'MUNICIPIO', 'TITULO': 'TITULO', 'DISTRITO': 'DISTRITO', 'POBLACION': 'POBLACION', 'CASOS_DIARREA': 'CASOS_DIARREA', 'CASOS_DENGUE': 'CASOS_DENGUE', 'CASOS_ZIKA_CHIKUNGUNYA': 'CASOS_ZIKA_CHIKUNGUNYA', 'CASOS_NEUMONIA': 'CASOS_NEUMONIA', 'CASOS_ENF_ARREICA_AGU': 'CASOS_ENF_ARREICA_AGU', 'CASOS_INFEC_RESP_AGU': 'CASOS_INFEC_RESP_AGU', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_Casos_dengue_por_municipio_7.set('fieldAliases', {'CODMUNI': 'CODMUNI', 'MUNICIPIO': 'MUNICIPIO', 'DEPARTAMENTO': 'DEPARTAMENTO', 'CASOS_DENGUE': 'CASOS_DENGUE', 'X': 'X', 'Y': 'Y', });
lyr_Casos_diarrea_por_municipio_8.set('fieldAliases', {'CODMUNI': 'CODMUNI', 'MUNICIPIO': 'MUNICIPIO', 'DEPARTAMENTO': 'DEPARTAMENTO', 'CASO_DIARREA': 'CASO_DIARREA', 'X': 'X', 'Y': 'Y', });
lyr_Casos_enfermedad_arreica_aguda_por_municipio_9.set('fieldAliases', {'CODMUNI': 'CODMUNI', 'MUNICIPIO': 'MUNICIPIO', 'DEPARTAMENTO': 'DEPARTAMENTO', 'CASOS_ENFER_ARREICA': 'CASOS_ENFER_ARREICA', 'X': 'X', 'Y': 'Y', });
lyr_Casos_infeccion_respiratoria_aguda_por_municipio_10.set('fieldAliases', {'CODMUNI': 'CODMUNI', 'MUNICIPIO': 'MUNICIPIO', 'DEPARTAMENTO': 'DEPARTAMENTO', 'CASOS_INFEC_RESPI': 'CASOS_INFEC_RESPI', 'X': 'X', 'Y': 'Y', });
lyr_Casos_neumonia_por_municipio_11.set('fieldAliases', {'CODMUNI': 'CODMUNI', 'MUNICIPIO': 'MUNICIPIO', 'DEPARTAMENTO': 'DEPARTAMENTO', 'CASO_NEUMONIA': 'CASO_NEUMONIA', 'X': 'X', 'Y': 'Y', });
lyr_Casos_zyka_chikungunya_por_municipio_12.set('fieldAliases', {'CODMUNI': 'CODMUNI', 'MUNICIPIO': 'MUNICIPIO', 'DEPARTAMENTO': 'DEPARTAMENTO', 'CASOS_ZIKA_CHIKUNGUNYA': 'CASOS_ZIKA_CHIKUNGUNYA', 'X': 'X', 'Y': 'Y', });
lyr_Shapefile_El_Salvador_2.set('fieldImages', {'FID': 'Range', 'PAIS_': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_DepartamentosElSalvador_3.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'DEPTO': 'TextEdit', 'ID_DEPTO': 'TextEdit', 'ZONA': 'TextEdit', });
lyr_MunicipiosElSalvador_4.set('fieldImages', {'COD_MUN4': 'TextEdit', 'NOMBRE': 'TextEdit', 'POBLACION': 'TextEdit', 'POBREZA': 'TextEdit', });
lyr_Enfermedadespormunicipiopoligonos_5.set('fieldImages', {'COD_MUN4': 'TextEdit', 'NOMBRE': 'TextEdit', 'POBLACION': 'TextEdit', 'POBREZA': 'TextEdit', '.CASOS_DIARREA': 'Range', '.CASOS_DENGUE': 'Range', '.CASOS_ZIKA_CHIKUNGUNYA': 'Range', '.CASOS_NEUMONIA': 'Range', '.CASOS_ENF_ARREICA_AGU': 'Range', '.CASOS_INFEC_RESP_AGU': 'Range', });
lyr_Enfermedades_por_municipio_6.set('fieldImages', {'CODMUNI': '', 'CODEPTO': '', 'MUNICIPIO': '', 'TITULO': '', 'DISTRITO': '', 'POBLACION': '', 'CASOS_DIARREA': '', 'CASOS_DENGUE': '', 'CASOS_ZIKA_CHIKUNGUNYA': '', 'CASOS_NEUMONIA': '', 'CASOS_ENF_ARREICA_AGU': '', 'CASOS_INFEC_RESP_AGU': '', 'xcoord': '', 'ycoord': '', });
lyr_Casos_dengue_por_municipio_7.set('fieldImages', {'CODMUNI': '', 'MUNICIPIO': '', 'DEPARTAMENTO': '', 'CASOS_DENGUE': '', 'X': '', 'Y': '', });
lyr_Casos_diarrea_por_municipio_8.set('fieldImages', {'CODMUNI': '', 'MUNICIPIO': '', 'DEPARTAMENTO': '', 'CASO_DIARREA': '', 'X': '', 'Y': '', });
lyr_Casos_enfermedad_arreica_aguda_por_municipio_9.set('fieldImages', {'CODMUNI': '', 'MUNICIPIO': '', 'DEPARTAMENTO': '', 'CASOS_ENFER_ARREICA': '', 'X': '', 'Y': '', });
lyr_Casos_infeccion_respiratoria_aguda_por_municipio_10.set('fieldImages', {'CODMUNI': '', 'MUNICIPIO': '', 'DEPARTAMENTO': '', 'CASOS_INFEC_RESPI': '', 'X': '', 'Y': '', });
lyr_Casos_neumonia_por_municipio_11.set('fieldImages', {'CODMUNI': '', 'MUNICIPIO': '', 'DEPARTAMENTO': '', 'CASO_NEUMONIA': '', 'X': '', 'Y': '', });
lyr_Casos_zyka_chikungunya_por_municipio_12.set('fieldImages', {'CODMUNI': '', 'MUNICIPIO': '', 'DEPARTAMENTO': '', 'CASOS_ZIKA_CHIKUNGUNYA': '', 'X': '', 'Y': '', });
lyr_Shapefile_El_Salvador_2.set('fieldLabels', {'FID': 'inline label', 'PAIS_': 'inline label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_DepartamentosElSalvador_3.set('fieldLabels', {'AREA': 'inline label', 'PERIMETER': 'inline label', 'DEPTO': 'inline label', 'ID_DEPTO': 'inline label', 'ZONA': 'inline label', });
lyr_MunicipiosElSalvador_4.set('fieldLabels', {'COD_MUN4': 'no label', 'NOMBRE': 'inline label', 'POBLACION': 'inline label', 'POBREZA': 'inline label', });
lyr_Enfermedadespormunicipiopoligonos_5.set('fieldLabels', {'COD_MUN4': 'no label', 'NOMBRE': 'inline label', 'POBLACION': 'inline label', 'POBREZA': 'inline label', '.CASOS_DIARREA': 'inline label', '.CASOS_DENGUE': 'inline label', '.CASOS_ZIKA_CHIKUNGUNYA': 'inline label', '.CASOS_NEUMONIA': 'inline label', '.CASOS_ENF_ARREICA_AGU': 'inline label', '.CASOS_INFEC_RESP_AGU': 'inline label', });
lyr_Enfermedades_por_municipio_6.set('fieldLabels', {'CODMUNI': 'no label', 'CODEPTO': 'no label', 'MUNICIPIO': 'inline label', 'TITULO': 'inline label', 'DISTRITO': 'inline label', 'POBLACION': 'inline label', 'CASOS_DIARREA': 'inline label', 'CASOS_DENGUE': 'inline label', 'CASOS_ZIKA_CHIKUNGUNYA': 'inline label', 'CASOS_NEUMONIA': 'inline label', 'CASOS_ENF_ARREICA_AGU': 'inline label', 'CASOS_INFEC_RESP_AGU': 'inline label', 'xcoord': 'no label', 'ycoord': 'no label', });
lyr_Casos_dengue_por_municipio_7.set('fieldLabels', {'CODMUNI': 'no label', 'MUNICIPIO': 'inline label', 'DEPARTAMENTO': 'inline label', 'CASOS_DENGUE': 'inline label', 'X': 'no label', 'Y': 'no label', });
lyr_Casos_diarrea_por_municipio_8.set('fieldLabels', {'CODMUNI': 'no label', 'MUNICIPIO': 'inline label', 'DEPARTAMENTO': 'inline label', 'CASO_DIARREA': 'inline label', 'X': 'no label', 'Y': 'no label', });
lyr_Casos_enfermedad_arreica_aguda_por_municipio_9.set('fieldLabels', {'CODMUNI': 'no label', 'MUNICIPIO': 'inline label', 'DEPARTAMENTO': 'inline label', 'CASOS_ENFER_ARREICA': 'inline label', 'X': 'no label', 'Y': 'no label', });
lyr_Casos_infeccion_respiratoria_aguda_por_municipio_10.set('fieldLabels', {'CODMUNI': 'no label', 'MUNICIPIO': 'inline label', 'DEPARTAMENTO': 'inline label', 'CASOS_INFEC_RESPI': 'inline label', 'X': 'no label', 'Y': 'no label', });
lyr_Casos_neumonia_por_municipio_11.set('fieldLabels', {'CODMUNI': 'no label', 'MUNICIPIO': 'inline label', 'DEPARTAMENTO': 'inline label', 'CASO_NEUMONIA': 'inline label', 'X': 'no label', 'Y': 'no label', });
lyr_Casos_zyka_chikungunya_por_municipio_12.set('fieldLabels', {'CODMUNI': 'no label', 'MUNICIPIO': 'inline label', 'DEPARTAMENTO': 'inline label', 'CASOS_ZIKA_CHIKUNGUNYA': 'inline label', 'X': 'no label', 'Y': 'no label', });
lyr_Casos_zyka_chikungunya_por_municipio_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});