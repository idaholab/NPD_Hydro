import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";

// Polygon Color Logic
import ClassBreaksRenderer from "@arcgis/core/renderers/ClassBreaksRenderer";
import UniqueValueRender from "@arcgis/core/renderers/UniqueValueRenderer";

export function GeoHazardsFactory(multiPolygons) {
  let polygons = [];

  multiPolygons.forEach((multiPolygon) => {
    // eslint-disable-next-line
    multiPolygon.shape.coordinates.map((coordinates) => {
      polygons.push({
        type: "Polygon",
        coordinates: coordinates,
        _metadata: multiPolygon,
      });
    });
  });

  let geojsons = [];

  polygons.forEach((polygon) => {
    geojsons.push({
      type: "Feature",
      geometry: polygon,
      properties: {
        name: polygon._metadata.name,
        risk: polygon._metadata.haz_total_std,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  // Template
  let template = {
    title: "Risk of Natural Hazard",
    content: "{name} County: {risk}",
  };

  // Color Logic
  let low = {
    type: "simple-fill",
    color: "rgba(65, 63, 84, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let medium = {
    type: "simple-fill",
    color: "rgba(101, 93, 191, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let high = {
    type: "simple-fill",
    color: "rgba(151, 164, 28, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let highest = {
    type: "simple-fill",
    color: "rgba(255, 255, 100, .5)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  // Legend
  let renderer = new ClassBreaksRenderer({
    field: "risk",
    legendOptions: {
      title: "Risk from Natural Hazards",
    },
    defaultSymbol: {
      type: "simple-fill",
      color: "black",
      style: "backward-diagonal",
      outline: {
        width: 0.1,
        color: [50, 50, 50, 0.6],
      },
    },
    defaultLabel: "No Data",
  });

  renderer.addClassBreakInfo({
    minValue: 0.75,
    maxValue: 1,
    symbol: highest,
    label: "0.75 - 1",
  });
  renderer.addClassBreakInfo({
    minValue: 0.5,
    maxValue: 0.75,
    symbol: high,
    label: "0.5 - 0.75",
  });
  renderer.addClassBreakInfo({
    minValue: 0.25,
    maxValue: 0.5,
    symbol: medium,
    label: "0.25 - 0.5",
  });
  renderer.addClassBreakInfo({
    minValue: 0,
    maxValue: 0.25,
    symbol: low,
    label: "0 - 0.25",
  });

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Risks from Natural Hazards",
    url: url,
    renderer: renderer,
    popupTemplate: template,
  });

  return geo;
}

export function GeoDroughtsFactory(layers) {
  // Color Logic
  let none = {
    type: "simple-fill",
    color: "rgba(0, 0, 0, 0)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let abnormally_dry = {
    type: "simple-fill",
    color: "rgba(255, 255, 178, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let moderate_drought = {
    type: "simple-fill",
    color: "rgba(254, 204, 92, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let severe_drought = {
    type: "simple-fill",
    color: "rgba(253, 141, 60, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let extreme_drought = {
    type: "simple-fill",
    color: "rgba(240, 59, 32, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let exceptional_drought = {
    type: "simple-fill",
    color: "rgba(189, 0, 38, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  // Legend
  let renderer = new UniqueValueRender({
    field: "DM",
    legendOptions: {
      title: "Drought Classification",
    },
  });

  renderer.addUniqueValueInfo({
    value: "NONE",
    symbol: none,
    label: "None",
  });
  renderer.addUniqueValueInfo({
    value: "0",
    symbol: abnormally_dry,
    label: "Abnormally Dry",
  });
  renderer.addUniqueValueInfo({
    value: "1",
    symbol: moderate_drought,
    label: "Moderate Drought",
  });

  renderer.addUniqueValueInfo({
    value: "2",
    symbol: severe_drought,
    label: "Severe Drought",
  });

  renderer.addUniqueValueInfo({
    value: "3",
    symbol: extreme_drought,
    label: "Extreme Drought",
  });
  renderer.addUniqueValueInfo({
    value: "4",
    symbol: exceptional_drought,
    label: "Exceptional Drought",
  });

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Drought Index",
    url: url,
    minScale: 15000000,
    renderer: renderer,
    outFields: ["*"],
  });

  return geo;
}

export function GeoElectricityPricesFactory(multiPolygons) {
  let polygons = [];

  multiPolygons.forEach((multiPolygon) => {
    // eslint-disable-next-line
    multiPolygon.shape.coordinates.map((coordinates) => {
      polygons.push({
        type: "Polygon",
        coordinates: coordinates,
        _metadata: multiPolygon,
      });
    });
  });

  let geojsons = [];

  polygons.forEach((polygon) => {
    geojsons.push({
      type: "Feature",
      geometry: polygon,
      properties: {
        name: polygon._metadata.name,
        price: polygon._metadata.average_retail_price_cents_kwh_field,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  // Template
  let template = {
    title: "Retail Price of Electricity",
    content: "{name}: {price} cents/kWh Average",
  };

  // Color Logic
  let low = {
    type: "simple-fill",
    color: "rgba(65, 63, 84, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let medium = {
    type: "simple-fill",
    color: "rgba(101, 93, 191, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let high = {
    type: "simple-fill",
    color: "rgba(151, 164, 28, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let highest = {
    type: "simple-fill",
    color: "rgba(255, 255, 100, .5)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  // Legend
  let renderer = new ClassBreaksRenderer({
    field: "price",
    legendOptions: {
      title: "Average Retail Electricity Prices",
    },
    defaultSymbol: {
      type: "simple-fill",
      color: "black",
      style: "backward-diagonal",
      outline: {
        width: 0.1,
        color: [50, 50, 50, 0.6],
      },
    },
    defaultLabel: "No Data",
  });

  renderer.addClassBreakInfo({
    minValue: 16,
    maxValue: Infinity,
    symbol: highest,
    label: "16 + cents/kWh",
  });
  renderer.addClassBreakInfo({
    minValue: 12,
    maxValue: 16,
    symbol: high,
    label: "12 - 16 cents/kWh",
  });
  renderer.addClassBreakInfo({
    minValue: 8,
    maxValue: 12,
    symbol: medium,
    label: "8 - 12 cents/kWh",
  });
  renderer.addClassBreakInfo({
    minValue: 0,
    maxValue: 8,
    symbol: low,
    label: "0 - 8 cents/kWh",
  });

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Electricity Retail Price",
    url: url,
    minScale: 15000000,
    renderer: renderer,
    popupTemplate: template,
  });

  return geo;
}

export function GeoSocialVulnerabilityFactory(multiPolygons) {
  let polygons = [];

  multiPolygons.forEach((multiPolygon) => {
    // eslint-disable-next-line
    multiPolygon.shape.coordinates.map((coordinates) => {
      polygons.push({
        type: "Polygon",
        coordinates: coordinates,
        _metadata: multiPolygon,
      });
    });
  });

  let geojsons = [];

  polygons.forEach((polygon) => {
    geojsons.push({
      type: "Feature",
      geometry: polygon,
      properties: {
        name: polygon._metadata.county,
        svi: polygon._metadata.svi_min_max,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  // Template
  let template = {
    title: "Social Vulnerability Index",
    content: "{name} County: {svi}",
  };

  // Color Logic
  let low = {
    type: "simple-fill",
    color: "rgba(65, 63, 84, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let medium = {
    type: "simple-fill",
    color: "rgba(101, 93, 191, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let high = {
    type: "simple-fill",
    color: "rgba(151, 164, 28, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let highest = {
    type: "simple-fill",
    color: "rgba(255, 255, 100, .5)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  // Legend
  let renderer = new ClassBreaksRenderer({
    field: "svi",
    legendOptions: {
      title: "Social Vulnerability Index",
    },
    defaultSymbol: {
      type: "simple-fill",
      color: "black",
      style: "backward-diagonal",
      outline: {
        width: 0.1,
        color: [50, 50, 50, 0.6],
      },
    },
    defaultLabel: "No Data",
  });

  renderer.addClassBreakInfo({
    minValue: 0.75,
    maxValue: Infinity,
    symbol: highest,
    label: "0.75 - 1",
  });
  renderer.addClassBreakInfo({
    minValue: 0.5,
    maxValue: 0.75,
    symbol: high,
    label: "0.5 - 0.75",
  });
  renderer.addClassBreakInfo({
    minValue: 0.25,
    maxValue: 0.5,
    symbol: medium,
    label: "0.25 - 0.5",
  });
  renderer.addClassBreakInfo({
    minValue: 0,
    maxValue: 0.25,
    symbol: low,
    label: "0 - 0.25",
  });

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Social Vulnerability Index",
    url: url,
    minScale: 15000000,
    renderer: renderer,
    popupTemplate: template,
  });

  return geo;
}

export function GeoAqiFactory(multiPolygons) {
  let polygons = [];

  multiPolygons.forEach((multiPolygon) => {
    // eslint-disable-next-line
    multiPolygon.shape.coordinates.map((coordinates) => {
      polygons.push({
        type: "Polygon",
        coordinates: coordinates,
        _metadata: multiPolygon,
      });
    });
  });

  let geojsons = [];

  polygons.forEach((polygon) => {
    geojsons.push({
      type: "Feature",
      geometry: polygon,
      properties: {
        name: polygon._metadata.name,
        aqi: polygon._metadata.sum_aqi_mean,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  // Template
  let template = {
    title: "Air Quality Index",
    content: "{name} County: {aqi}",
  };

  // Color Logic
  let low = {
    type: "simple-fill",
    color: "rgba(65, 63, 84, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let medium = {
    type: "simple-fill",
    color: "rgba(101, 93, 191, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let high = {
    type: "simple-fill",
    color: "rgba(151, 164, 28, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let renderer = new ClassBreaksRenderer({
    field: "aqi",
    legendOptions: {
      title: "Air Quality Index",
    },
    defaultSymbol: {
      type: "simple-fill",
      color: "black",
      style: "backward-diagonal",
      outline: {
        width: 0.1,
        color: [50, 50, 50, 0.6],
      },
    },
    defaultLabel: "No Data",
  });

  renderer.addClassBreakInfo({
    minValue: 2,
    maxValue: 3,
    symbol: high,
    label: "2 - 3",
  });
  renderer.addClassBreakInfo({
    minValue: 1,
    maxValue: 2,
    symbol: medium,
    label: "1 - 2",
  });
  renderer.addClassBreakInfo({
    minValue: 0,
    maxValue: 1,
    symbol: low,
    label: "0 - 1",
  });

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Air Quality Index",
    url: url,
    minScale: 15000000,
    renderer: renderer,
    popupTemplate: template,
  });

  return geo;
}

export function GeoHospitalFactory(points) {
  let geojsons = [];

  points.forEach((point) => {
    geojsons.push({
      type: "Feature",
      geometry: point.shape,
      properties: {
        name: point.name,
        hospital_type: point.type,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  // Template
  let template = {
    title: "Hospital",
    content: "Name: {name}<br />Type: {hospital_type}",
  };

  const clusterConfig = {
    type: "cluster",
    clusterRadius: "150px",
    popupTemplate: {
      title: "Hospitals",
      content: "This cluster represents {cluster_count} Hospitals.",
      fieldInfos: [
        {
          fieldName: "cluster_count",
          format: {
            places: 0,
            digitSeparator: true,
          },
        },
      ],
    },
    clusterMinSize: "24px",
    clusterMaxSize: "60px",

    symbol: {
      type: "simple-marker",
      style: "circle",
      color: "red",
      outline: {
        color: "red",
        width: 1,
      },
    },

    labelingInfo: [
      {
        deconflictionStrategy: "none",
        labelExpressionInfo: {
          expression: "Text($feature.cluster_count, '#,###')",
        },
        symbol: {
          type: "text",
          color: "white",
          font: {
            weight: "bold",
            family: "Noto Sans",
            size: "12px",
          },
        },
        labelPlacement: "center-center",
      },
    ],
  };

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Hospitals",
    url: url,
    minScale: 1500000,
    renderer: {
      type: "simple",
      symbol: {
        type: "web-style",
        name: "cross-3",
        styleName: "Esri2DPointSymbolsStyle",
        size: 4,
        color: "red",
      },
      label: "Hospital",
    },
    popupTemplate: template,
  });

  return geo;
}

export function GeoFossilFuelFactory(points) {
  let geojsons = [];

  points.forEach((point) => {
    geojsons.push({
      type: "Feature",
      geometry: point.shape,
      properties: {
        name: point.name,
        powerstation_type: point.type,
        operator: point.operator,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  // Template
  let template = {
    title: "Fossil Fuel Powerplant",
    content:
      "Name: {name}<br />Operator: {operator}<br />Type: {powerstation_type}",
  };

  const clusterConfig = {
    type: "cluster",
    clusterRadius: "150px",
    popupTemplate: {
      title: "Fossil Fuel Power Plants",
      content:
        "This cluster represents {cluster_count} Fossil Fuel Power Plants.",
      fieldInfos: [
        {
          fieldName: "cluster_count",
          format: {
            places: 0,
            digitSeparator: true,
          },
        },
      ],
    },
    clusterMinSize: "24px",
    clusterMaxSize: "60px",

    symbol: {
      type: "simple-marker",
      style: "circle",
      color: "rgba(55, 55, 55, 1)",
      outline: {
        color: "rgba(55, 55, 55, 1)",
        width: 1,
      },
    },

    labelingInfo: [
      {
        deconflictionStrategy: "none",
        labelExpressionInfo: {
          expression: "Text($feature.cluster_count, '#,###')",
        },
        symbol: {
          type: "text",
          color: "white",
          font: {
            weight: "bold",
            family: "Noto Sans",
            size: "12px",
          },
        },
        labelPlacement: "center-center",
      },
    ],
  };

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Fossil Fuel Powerplant",
    url: url,
    minScale: 15000000,
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-marker",
        color: "rgba(55, 55, 55, 1)",
        style: "circle",
        size: 5,
      },
      label: "Fossil Fuel Powerplant",
    },
    popupTemplate: template,
    featureReduction: clusterConfig,
  });

  return geo;
}

export function GeoManufacturingFactory(points) {
  let geojsons = [];

  points.forEach((point) => {
    geojsons.push({
      type: "Feature",
      geometry: point.shape,
      properties: {
        name: point.name,
        product: point.product,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  let template = {
    title: "Energy Intensive Facility",
    content: "Name: {name}<br />Product: {product}",
  };

  const clusterConfig = {
    type: "cluster",
    clusterRadius: "150px",
    popupTemplate: {
      title: "Energy Intensive Facilities",
      content:
        "This cluster represents {cluster_count} Energy Intensive Facilities.",
      fieldInfos: [
        {
          fieldName: "cluster_count",
          format: {
            places: 0,
            digitSeparator: true,
          },
        },
      ],
    },
    clusterMinSize: "24px",
    clusterMaxSize: "60px",

    symbol: {
      type: "simple-marker",
      style: "circle",
      color: "rgba(222, 241, 41, 1)",
      outline: {
        color: "rgba(222, 241, 41, 1)",
        width: 1,
      },
    },

    labelingInfo: [
      {
        deconflictionStrategy: "none",
        labelExpressionInfo: {
          expression: "Text($feature.cluster_count, '#,###')",
        },
        symbol: {
          type: "text",
          color: "#004a5d",
          font: {
            weight: "bold",
            family: "Noto Sans",
            size: "12px",
          },
        },
        labelPlacement: "center-center",
      },
    ],
  };

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Energy Intensive Facilities",
    url: url,
    minScale: 1500000,
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-marker",
        color: "rgba(222, 241, 41, 1)",
        style: "circle",
        size: 3,
      },
      label: "Energy Intensive Facility",
    },
    popupTemplate: template,
  });

  return geo;
}

export function GeoNaturalGasFactory(points) {
  let geojsons = [];

  points.forEach((point) => {
    geojsons.push({
      type: "Feature",
      geometry: point.shape,
      properties: {
        operator: point.operator,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  let template = {
    title: "Natural Gas Compressor Station",
    content: "Operator: {operator}",
  };

  const clusterConfig = {
    type: "cluster",
    clusterRadius: "150px",
    popupTemplate: {
      title: "Natural Gas Compressor Stations",
      content:
        "This cluster represents {cluster_count} Natural Gas Compressor Stations.",
      fieldInfos: [
        {
          fieldName: "cluster_count",
          format: {
            places: 0,
            digitSeparator: true,
          },
        },
      ],
    },
    clusterMinSize: "24px",
    clusterMaxSize: "60px",

    symbol: {
      type: "simple-marker",
      style: "circle",
      color: "rgba(41, 242, 186, 1)",
      outline: {
        color: "rgba(41, 242, 186, 1)",
        width: 1,
      },
    },

    labelingInfo: [
      {
        deconflictionStrategy: "none",
        labelExpressionInfo: {
          expression: "Text($feature.cluster_count, '#,###')",
        },
        symbol: {
          type: "text",
          color: "black",
          font: {
            weight: "bold",
            family: "Noto Sans",
            size: "12px",
          },
        },
        labelPlacement: "center-center",
      },
    ],
  };

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Natural Gas Compressor Stations",
    popupTemplate: template,
    url: url,
    minScale: 15000000,
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-marker",
        color: "rgba(41, 242, 186, 1)",
        style: "circle",
        size: 5,
      },
      label: "Natural Gas Compressor Station",
    },
    featureReduction: clusterConfig,
  });

  return geo;
}

export function GeoPublicSchoolFactory(points) {
  let geojsons = [];

  points.forEach((point) => {
    geojsons.push({
      type: "Feature",
      geometry: point.shape,
      properties: {
        name: point.name,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  let template = {
    title: "Public School",
    content: "Name: {name}",
  };

  const clusterConfig = {
    type: "cluster",
    clusterRadius: "150px",
    popupTemplate: {
      title: "Public Schools",
      content: "This cluster represents {cluster_count} Public Schools.",
      fieldInfos: [
        {
          fieldName: "cluster_count",
          format: {
            places: 0,
            digitSeparator: true,
          },
        },
      ],
    },
    clusterMinSize: "24px",
    clusterMaxSize: "60px",

    symbol: {
      type: "simple-marker",
      style: "circle",
      color: "rgba(41, 81, 242, 1)",
      outline: {
        color: "rgba(41, 81, 242, 1)",
        width: 1,
      },
    },

    labelingInfo: [
      {
        deconflictionStrategy: "none",
        labelExpressionInfo: {
          expression: "Text($feature.cluster_count, '#,###')",
        },
        symbol: {
          type: "text",
          color: "white",
          font: {
            weight: "bold",
            family: "Noto Sans",
            size: "12px",
          },
        },
        labelPlacement: "center-center",
      },
    ],
  };

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Public Schools",
    popupTemplate: template,
    url: url,
    minScale: 1500000,
    renderer: {
      type: "simple",
      symbol: {
        type: "simple-marker",
        color: "rgba(41, 81, 242, 1)",
        style: "circle",
        size: 5,
      },
      label: "Public School",
    },
  });

  return geo;
}

export function GeoDamFactory(points) {
  let geojsons = [];

  points.forEach((point, index) => {
    geojsons.push({
      type: "Feature",
      geometry: point.shape,
      properties: {
        rank: index,
        display_rank: index + 1,
        name: point.dam_name,
        owner: point.owner_name,
        total_score: point.total_score,
        comm_score: point.comm_score,
        env_score: point.env_score,
        grid_score: point.grid_score,
        industry_score: point.industry_score,
        batteries_score: point.batteries_score,
        h2_feasibility_score: point.h2_feasibility_score,
        latitude: point.latitude,
        longitude: point.longitude,
        cap_mw: point.cap_mw,
        crit_hab: point.crit_hab,
        prot_land: point.prot_land,
        imp_stream: point.imp_stream,
      },
    });
  });

  let template = {
    title: "Dam Information",
    content:
      "<b>Name:</b> {name}<br /><b>Lat/Long:</b> {latitude}/{longitude}<br /><br /><b>Total Score:</b> {total_score}<br /><b>NPD Candidate Rank:</b> {display_rank}<br /><br /><b>Community Score:</b> {comm_score}<br /><b>Environmental Score:</b> {env_score}<br /><b>Grid Score:</b> {grid_score}<br /><b>Industry Score:</b> {industry_score}<br /><br /><b>Potential Capacity:</b> {cap_mw} MW<br /><br /><b>Land Use Restrictions:</b><br /><b>Critical Habitat:</b> {crit_hab}<br /><b>Protected Land:</b> {prot_land}<br /><b>Impaired Stream:</b> {imp_stream}",
  };

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  // Color Logic

  let top = {
    type: "simple-marker",
    color: "rgba(0, 255, 212, 1)",
    style: "circle",
    size: 14,
  };

  let middle = {
    type: "simple-marker",
    color: "rgba(255, 170, 0, 1)",
    style: "circle",
    size: 10,
  };

  //pink
  let low = {
    type: "simple-marker",
    color: "rgba(255, 0, 153, 1)",
    style: "circle",
    size: 10,
  };

  let renderer = new ClassBreaksRenderer({
    field: "rank",
    legendOptions: {
      title: "NPD Rank",
    },
  });

  renderer.addClassBreakInfo({
    minValue: 101,
    maxValue: Infinity,
    symbol: low,
    label: "Other Candidate for Conversion",
  });

  renderer.addClassBreakInfo({
    minValue: 11,
    maxValue: 100,
    symbol: middle,
    label: "Top 100 Candidate for Conversion",
  });

  renderer.addClassBreakInfo({
    minValue: 0,
    maxValue: 10,
    symbol: top,
    label: "Top 10 Candidate for Conversion",
  });

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Non-Powered Dams",
    url: url,
    renderer: renderer,
    popupTemplate: template,
  });

  return geo;
}

export function GeoWindspeedFactory(multiPolygons) {
  let polygons = [];

  multiPolygons.forEach((multiPolygon) => {
    // eslint-disable-next-line
    multiPolygon.footprint.coordinates.map((coordinates) => {
      polygons.push({
        type: "Polygon",
        coordinates: coordinates,
        _metadata: multiPolygon,
      });
    });
  });

  let geojsons = [];

  polygons.forEach((polygon) => {
    geojsons.push({
      type: "Feature",
      geometry: polygon,
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Average Windspeed",
    url: url,
    minScale: 15000000,
  });

  return geo;
}

export function GeoHorizontalIrradianceFactory(multiPolygons) {
  let polygons = [];

  multiPolygons.forEach((multiPolygon) => {
    // eslint-disable-next-line
    multiPolygon.footprint.coordinates.map((coordinates) => {
      polygons.push({
        type: "Polygon",
        coordinates: coordinates,
        _metadata: multiPolygon,
      });
    });
  });

  let geojsons = [];

  polygons.forEach((polygon) => {
    geojsons.push({
      type: "Feature",
      geometry: polygon,
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Horizontal Irradiance",
    url: url,
    minScale: 15000000,
  });

  return geo;
}

export function GeoSurfaceOwnershipFactory(multiPolygons) {
  let polygons = [];

  multiPolygons.forEach((multiPolygon) => {
    // eslint-disable-next-line
    multiPolygon.shape.coordinates.map((coordinates) => {
      polygons.push({
        type: "Polygon",
        coordinates: coordinates,
        _metadata: multiPolygon,
      });
    });
  });

  let geojsons = [];

  polygons.forEach((polygon) => {
    geojsons.push({
      type: "Feature",
      geometry: polygon,
      properties: {
        casename: polygon._metadata.casename,
        nfslandunitname: polygon._metadata.nfslandunitname,
        ownerclassification: polygon._metadata.ownerclassification,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Surface Ownership",
    url: url,
    minScale: 15000000,
  });

  return geo;
}

export function GeoWholesaleMarketsFactory(multiPolygons) {
  let polygons = [];

  multiPolygons.forEach((multiPolygon) => {
    // eslint-disable-next-line
    multiPolygon.shape.coordinates.map((coordinates) => {
      polygons.push({
        type: "Polygon",
        coordinates: coordinates,
        _metadata: multiPolygon,
      });
    });
  });

  let geojsons = [];

  polygons.forEach((polygon) => {
    geojsons.push({
      type: "Feature",
      geometry: polygon,
      properties: {
        name: polygon._metadata.name,
        wholesalemarket: polygon._metadata.wholesalemarket,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Wholesale Market Region",
    url: url,
    minScale: 15000000,
  });

  return geo;
}

export function GeoElectricityTerritoriesFactory(multiPolygons) {
  let polygons = [];

  multiPolygons.forEach((multiPolygon) => {
    // eslint-disable-next-line
    multiPolygon.shape.coordinates.map((coordinates) => {
      polygons.push({
        type: "Polygon",
        coordinates: coordinates,
        _metadata: multiPolygon,
      });
    });
  });

  let geojsons = [];

  polygons.forEach((polygon) => {
    geojsons.push({
      type: "Feature",
      geometry: polygon,
      properties: {
        name: polygon._metadata.name,
        cntrl_area: polygon._metadata.cntrl_area,
        type: polygon._metadata.type,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Electricity Retail Territories",
    url: url,
    minScale: 15000000,
  });

  return geo;
}

export function GeoEnergyCommunitiesFactory(multiPolygons) {
  let polygons = [];

  multiPolygons.forEach((multiPolygon) => {
    // eslint-disable-next-line
    multiPolygon.shape.coordinates.map((coordinates) => {
      polygons.push({
        type: "Polygon",
        coordinates: coordinates,
        _metadata: multiPolygon,
      });
    });
  });

  let geojsons = [];

  polygons.forEach((polygon) => {
    geojsons.push({
      type: "Feature",
      geometry: polygon,
      properties: {
        state: polygon._metadata.state_name,
        county: polygon._metadata.county_nam,
        tract: polygon._metadata.geoid_trac,
        closure: polygon._metadata.mine_closu,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  // Template
  let template = {
    title: "Energy Communities",
    content:
      "Census Tract Number {tract}<br />{county}, {state}<br />Closure: {closure}",
  };

  let adjacent = {
    type: "simple-fill",
    color: "rgba(35, 204, 255, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  let closure = {
    type: "simple-fill",
    color: "rgba(255, 77, 106, .6)",
    style: "solid",
    outline: {
      width: 0.1,
      color: [50, 50, 50, 0.6],
    },
  };

  // Legend
  let renderer = new UniqueValueRender({
    field: "closure",
  });

  renderer.addUniqueValueInfo({
    value: "No",
    symbol: adjacent,
    label: "Census tract directly adjoining a census tract with a coal closure",
  });
  renderer.addUniqueValueInfo({
    value: "Yes",
    symbol: closure,
    label: "Census tract with a coal closure",
  });

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Energy Communities",
    url: url,
    minScale: 15000000,
    renderer: renderer,
    popupTemplate: template,
  });

  return geo;
}

export function GeoDisadvCommunitiesFactory(multiPolygons) {
  let polygons = [];

  multiPolygons.forEach((multiPolygon) => {
    // eslint-disable-next-line
    multiPolygon.shape.coordinates.map((coordinates) => {
      polygons.push({
        type: "Polygon",
        coordinates: coordinates,
        _metadata: multiPolygon,
      });
    });
  });

  let geojsons = [];

  polygons.forEach((polygon) => {
    geojsons.push({
      type: "Feature",
      geometry: polygon,
      properties: {
        state: polygon._metadata.state_territory,
        county: polygon._metadata.county_name,
        tract: polygon._metadata.geoid10,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  // Template
  let template = {
    title: "Disadvantaged Communities",
    content: "Census Tract Number {tract}<br />{county}, {state}",
  };

  // Legend
  let renderer = {
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: "rgba(65, 105, 225, 0.6)",
      outline: {
        width: 0.5,
        color: "gray",
      },
    },
    label: "Census Tract",
  };

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title: "Disadvantaged Communities",
    url: url,
    minScale: 15000000,
    renderer: renderer,
    popupTemplate: template,
  });

  return geo;
}

export function GeoMetropolitanFactory(multiPolygons) {
  let polygons = [];

  multiPolygons.forEach((multiPolygon) => {
    // eslint-disable-next-line
    multiPolygon.shape.coordinates.map((coordinates) => {
      polygons.push({
        type: "Polygon",
        coordinates: coordinates,
        _metadata: multiPolygon,
      });
    });
  });

  let geojsons = [];

  polygons.forEach((polygon) => {
    geojsons.push({
      type: "Feature",
      geometry: polygon,
      properties: {
        metro: polygon._metadata.msa_area_n,
        qual: polygon._metadata.msa_qual,
        energy: polygon._metadata.ec_qual_st,
      },
    });
  });

  let layers = {
    type: "FeatureCollection",
    features: geojsons,
  };

  // Template
  let template = {
    title: "Metropolitan Area",
    content:
      "{metro}<br />MSA Qualification: {qual}<br />Energy Community: {energy}",
  };

  // Legend
  let renderer = {
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: "rgba(0, 0, 0, 0.25)",
      outline: {
        width: 0.5,
        color: "white",
      },
    },
    label: "Census Tracts",
  };

  const blob = new Blob([JSON.stringify(layers)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const geo = new GeoJSONLayer({
    title:
      "MSAs/non-MSAs that meet both the Fossil-Fuel Employment (FEE) threshold and the unemployment rate requirement",
    url: url,
    minScale: 15000000,
    renderer: renderer,
    popupTemplate: template,
  });

  return geo;
}
