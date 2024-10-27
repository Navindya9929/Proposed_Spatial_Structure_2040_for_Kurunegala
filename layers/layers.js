var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1 = new ol.format.GeoJSON();
var features_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1 = format_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1.readFeatures(json_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1.addFeatures(features_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1);
var lyr_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1, 
                style: style_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1,
                popuplayertitle: "Kurunegala_Proposed_Housing_Density_Distribution(PerHa)_2040",
                interactive: true,
    title: 'Kurunegala_Proposed_Housing_Density_Distribution(PerHa)_2040<br />\
    <img src="styles/legend/Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1_0.png" /> 0-10<br />\
    <img src="styles/legend/Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1_1.png" /> 10-20<br />\
    <img src="styles/legend/Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1_2.png" /> 20-30<br />\
    <img src="styles/legend/Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1_3.png" /> 30-40<br />\
    <img src="styles/legend/Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1_4.png" /> 40-50<br />\
    <img src="styles/legend/Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1_5.png" /> 50-60<br />\
    <img src="styles/legend/Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1_6.png" /> >60<br />'
        });
var format_Commercial_Agriculture_Promoting_Zone_2 = new ol.format.GeoJSON();
var features_Commercial_Agriculture_Promoting_Zone_2 = format_Commercial_Agriculture_Promoting_Zone_2.readFeatures(json_Commercial_Agriculture_Promoting_Zone_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Commercial_Agriculture_Promoting_Zone_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commercial_Agriculture_Promoting_Zone_2.addFeatures(features_Commercial_Agriculture_Promoting_Zone_2);
var lyr_Commercial_Agriculture_Promoting_Zone_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commercial_Agriculture_Promoting_Zone_2, 
                style: style_Commercial_Agriculture_Promoting_Zone_2,
                popuplayertitle: "Commercial_Agriculture_Promoting_Zone",
                interactive: true,
                title: '<img src="styles/legend/Commercial_Agriculture_Promoting_Zone_2.png" /> Commercial_Agriculture_Promoting_Zone'
            });
var format_Conservation_and_EcoTourism_Promoting_Zone_3 = new ol.format.GeoJSON();
var features_Conservation_and_EcoTourism_Promoting_Zone_3 = format_Conservation_and_EcoTourism_Promoting_Zone_3.readFeatures(json_Conservation_and_EcoTourism_Promoting_Zone_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conservation_and_EcoTourism_Promoting_Zone_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conservation_and_EcoTourism_Promoting_Zone_3.addFeatures(features_Conservation_and_EcoTourism_Promoting_Zone_3);
var lyr_Conservation_and_EcoTourism_Promoting_Zone_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Conservation_and_EcoTourism_Promoting_Zone_3, 
                style: style_Conservation_and_EcoTourism_Promoting_Zone_3,
                popuplayertitle: "Conservation_and_Eco-Tourism_Promoting_Zone",
                interactive: true,
                title: '<img src="styles/legend/Conservation_and_EcoTourism_Promoting_Zone_3.png" /> Conservation_and_Eco-Tourism_Promoting_Zone'
            });
var format_Agro_Tourism_Promoting_Zone_4 = new ol.format.GeoJSON();
var features_Agro_Tourism_Promoting_Zone_4 = format_Agro_Tourism_Promoting_Zone_4.readFeatures(json_Agro_Tourism_Promoting_Zone_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Agro_Tourism_Promoting_Zone_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Agro_Tourism_Promoting_Zone_4.addFeatures(features_Agro_Tourism_Promoting_Zone_4);
var lyr_Agro_Tourism_Promoting_Zone_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Agro_Tourism_Promoting_Zone_4, 
                style: style_Agro_Tourism_Promoting_Zone_4,
                popuplayertitle: "Agro_Tourism_Promoting_Zone",
                interactive: true,
                title: '<img src="styles/legend/Agro_Tourism_Promoting_Zone_4.png" /> Agro_Tourism_Promoting_Zone'
            });
var format_Heraliyawala_Industrial_Zone_5 = new ol.format.GeoJSON();
var features_Heraliyawala_Industrial_Zone_5 = format_Heraliyawala_Industrial_Zone_5.readFeatures(json_Heraliyawala_Industrial_Zone_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Heraliyawala_Industrial_Zone_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Heraliyawala_Industrial_Zone_5.addFeatures(features_Heraliyawala_Industrial_Zone_5);
var lyr_Heraliyawala_Industrial_Zone_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Heraliyawala_Industrial_Zone_5, 
                style: style_Heraliyawala_Industrial_Zone_5,
                popuplayertitle: "Heraliyawala_Industrial_Zone",
                interactive: true,
                title: '<img src="styles/legend/Heraliyawala_Industrial_Zone_5.png" /> Heraliyawala_Industrial_Zone'
            });
var format_TransitOriented_Development_Zone_6 = new ol.format.GeoJSON();
var features_TransitOriented_Development_Zone_6 = format_TransitOriented_Development_Zone_6.readFeatures(json_TransitOriented_Development_Zone_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransitOriented_Development_Zone_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransitOriented_Development_Zone_6.addFeatures(features_TransitOriented_Development_Zone_6);
var lyr_TransitOriented_Development_Zone_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransitOriented_Development_Zone_6, 
                style: style_TransitOriented_Development_Zone_6,
                popuplayertitle: "Transit-Oriented_Development_Zone",
                interactive: true,
                title: '<img src="styles/legend/TransitOriented_Development_Zone_6.png" /> Transit-Oriented_Development_Zone'
            });
var format_4th_Level_Town_7 = new ol.format.GeoJSON();
var features_4th_Level_Town_7 = format_4th_Level_Town_7.readFeatures(json_4th_Level_Town_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4th_Level_Town_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4th_Level_Town_7.addFeatures(features_4th_Level_Town_7);
var lyr_4th_Level_Town_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4th_Level_Town_7, 
                style: style_4th_Level_Town_7,
                popuplayertitle: "4th_Level_Town",
                interactive: true,
                title: '<img src="styles/legend/4th_Level_Town_7.png" /> 4th_Level_Town'
            });
var format_3rd_Level_Town_8 = new ol.format.GeoJSON();
var features_3rd_Level_Town_8 = format_3rd_Level_Town_8.readFeatures(json_3rd_Level_Town_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3rd_Level_Town_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3rd_Level_Town_8.addFeatures(features_3rd_Level_Town_8);
var lyr_3rd_Level_Town_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3rd_Level_Town_8, 
                style: style_3rd_Level_Town_8,
                popuplayertitle: "3rd_Level_Town",
                interactive: true,
                title: '<img src="styles/legend/3rd_Level_Town_8.png" /> 3rd_Level_Town'
            });
var format_2nd_Level_Town_9 = new ol.format.GeoJSON();
var features_2nd_Level_Town_9 = format_2nd_Level_Town_9.readFeatures(json_2nd_Level_Town_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2nd_Level_Town_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2nd_Level_Town_9.addFeatures(features_2nd_Level_Town_9);
var lyr_2nd_Level_Town_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2nd_Level_Town_9, 
                style: style_2nd_Level_Town_9,
                popuplayertitle: "2nd_Level_Town",
                interactive: true,
                title: '<img src="styles/legend/2nd_Level_Town_9.png" /> 2nd_Level_Town'
            });
var format_1st_Level_Town_10 = new ol.format.GeoJSON();
var features_1st_Level_Town_10 = format_1st_Level_Town_10.readFeatures(json_1st_Level_Town_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1st_Level_Town_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1st_Level_Town_10.addFeatures(features_1st_Level_Town_10);
var lyr_1st_Level_Town_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1st_Level_Town_10, 
                style: style_1st_Level_Town_10,
                popuplayertitle: "1st_Level_Town",
                interactive: true,
                title: '<img src="styles/legend/1st_Level_Town_10.png" /> 1st_Level_Town'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1.setVisible(true);lyr_Commercial_Agriculture_Promoting_Zone_2.setVisible(true);lyr_Conservation_and_EcoTourism_Promoting_Zone_3.setVisible(true);lyr_Agro_Tourism_Promoting_Zone_4.setVisible(true);lyr_Heraliyawala_Industrial_Zone_5.setVisible(true);lyr_TransitOriented_Development_Zone_6.setVisible(true);lyr_4th_Level_Town_7.setVisible(true);lyr_3rd_Level_Town_8.setVisible(true);lyr_2nd_Level_Town_9.setVisible(true);lyr_1st_Level_Town_10.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1,lyr_Commercial_Agriculture_Promoting_Zone_2,lyr_Conservation_and_EcoTourism_Promoting_Zone_3,lyr_Agro_Tourism_Promoting_Zone_4,lyr_Heraliyawala_Industrial_Zone_5,lyr_TransitOriented_Development_Zone_6,lyr_4th_Level_Town_7,lyr_3rd_Level_Town_8,lyr_2nd_Level_Town_9,lyr_1st_Level_Town_10];
lyr_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'GND_N': 'GND_N', 'H_D(PerHa)': 'H_D(PerHa)', });
lyr_Commercial_Agriculture_Promoting_Zone_2.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'GND_N': 'GND_N', });
lyr_Conservation_and_EcoTourism_Promoting_Zone_3.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'GND_N': 'GND_N', });
lyr_Agro_Tourism_Promoting_Zone_4.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'GND_N': 'GND_N', });
lyr_Heraliyawala_Industrial_Zone_5.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'GND_N': 'GND_N', });
lyr_TransitOriented_Development_Zone_6.set('fieldAliases', {'PROVINCE_N': 'PROVINCE_N', 'DISTRICT_N': 'DISTRICT_N', 'DSD_N': 'DSD_N', 'GND_N': 'GND_N', 'H_D(PerHa)': 'H_D(perHa)', });
lyr_4th_Level_Town_7.set('fieldAliases', {'id': 'id', 'town': 'town', 'Rank': 'rank', });
lyr_3rd_Level_Town_8.set('fieldAliases', {'id': 'id', 'town': 'town', 'Rank': 'rank', });
lyr_2nd_Level_Town_9.set('fieldAliases', {'id': 'id', 'town': 'town', 'Rank': 'rank', });
lyr_1st_Level_Town_10.set('fieldAliases', {'id': 'id', 'town': 'town', 'Rank': 'rank', });
lyr_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'GND_N': 'TextEdit', 'H_D(PerHa)': 'TextEdit', });
lyr_Commercial_Agriculture_Promoting_Zone_2.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'GND_N': 'TextEdit', });
lyr_Conservation_and_EcoTourism_Promoting_Zone_3.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'GND_N': 'TextEdit', });
lyr_Agro_Tourism_Promoting_Zone_4.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'GND_N': 'TextEdit', });
lyr_Heraliyawala_Industrial_Zone_5.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'GND_N': 'TextEdit', });
lyr_TransitOriented_Development_Zone_6.set('fieldImages', {'PROVINCE_N': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DSD_N': 'TextEdit', 'GND_N': 'TextEdit', 'H_D(PerHa)': 'TextEdit', });
lyr_4th_Level_Town_7.set('fieldImages', {'id': 'TextEdit', 'town': 'TextEdit', 'Rank': 'TextEdit', });
lyr_3rd_Level_Town_8.set('fieldImages', {'id': 'TextEdit', 'town': 'TextEdit', 'Rank': 'TextEdit', });
lyr_2nd_Level_Town_9.set('fieldImages', {'id': 'TextEdit', 'town': 'TextEdit', 'Rank': 'TextEdit', });
lyr_1st_Level_Town_10.set('fieldImages', {'id': 'TextEdit', 'town': 'TextEdit', 'Rank': 'TextEdit', });
lyr_Kurunegala_Proposed_Housing_Density_DistributionPerHa_2040_1.set('fieldLabels', {'PROVINCE_N': 'no label', 'DISTRICT_N': 'no label', 'DSD_N': 'no label', 'GND_N': 'no label', 'H_D(PerHa)': 'no label', });
lyr_Commercial_Agriculture_Promoting_Zone_2.set('fieldLabels', {'PROVINCE_N': 'no label', 'DISTRICT_N': 'no label', 'DSD_N': 'no label', 'GND_N': 'no label', });
lyr_Conservation_and_EcoTourism_Promoting_Zone_3.set('fieldLabels', {'PROVINCE_N': 'no label', 'DISTRICT_N': 'no label', 'DSD_N': 'no label', 'GND_N': 'no label', });
lyr_Agro_Tourism_Promoting_Zone_4.set('fieldLabels', {'PROVINCE_N': 'no label', 'DISTRICT_N': 'no label', 'DSD_N': 'no label', 'GND_N': 'no label', });
lyr_Heraliyawala_Industrial_Zone_5.set('fieldLabels', {'PROVINCE_N': 'no label', 'DISTRICT_N': 'no label', 'DSD_N': 'no label', 'GND_N': 'no label', });
lyr_TransitOriented_Development_Zone_6.set('fieldLabels', {'PROVINCE_N': 'no label', 'DISTRICT_N': 'no label', 'DSD_N': 'no label', 'GND_N': 'no label', 'H_D(PerHa)': 'no label', });
lyr_4th_Level_Town_7.set('fieldLabels', {'id': 'no label', 'town': 'no label', 'Rank': 'no label', });
lyr_3rd_Level_Town_8.set('fieldLabels', {'id': 'no label', 'town': 'no label', 'Rank': 'no label', });
lyr_2nd_Level_Town_9.set('fieldLabels', {'id': 'no label', 'town': 'no label', 'Rank': 'no label', });
lyr_1st_Level_Town_10.set('fieldLabels', {'id': 'no label', 'town': 'no label', 'Rank': 'no label', });
lyr_1st_Level_Town_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});