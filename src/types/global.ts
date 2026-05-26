import type { Selection } from "d3";
import type { NameBase } from "../modules/names-generator";
import type { Route } from "../modules/routes-generator";
import type { Grid } from "../utils/graphUtils";
import type { PackedGraph } from "./PackedGraph";

export interface MapOptions {
  military: Array<{
    icon: string;
    name: string;
    rural: number;
    urban: number;
    crew: number;
    power: number;
    type: string;
    separate: number;
  }>;
  year: number;
  era: string;
  eraShort: string;
}

export interface Note {
  id: string;
  name: string;
  legend: string;
}

export interface HeightmapTemplate {
  name: string;
  template?: string;
  probability?: number;
}

declare global {
  var seed: string;
  var pack: PackedGraph;
  var grid: Grid;
  var graphHeight: number;
  var graphWidth: number;
  var TIME: boolean;
  var WARN: boolean;
  var ERROR: boolean;
  var DEBUG: { stateLabels?: boolean; [key: string]: boolean | undefined };
  var options: MapOptions;

  var heightmapTemplates: Record<string, HeightmapTemplate>;
  var Routes: {
    getRoute: (from: number, to: number) => Route | undefined;
    isConnected: (cellId: number) => boolean;
    isCrossroad: (cellId: number) => boolean;
    buildLinks: (routes: Route[]) => Record<number, Record<number, number>>;
  };
  var populationRate: number;
  var urbanDensity: number;
  var urbanization: number;
  var distanceScale: number;
  var nameBases: NameBase[];

  var pointsInput: HTMLInputElement;
  var culturesInput: HTMLInputElement;
  var culturesSet: HTMLSelectElement;
  var heightExponentInput: HTMLInputElement;
  var alertMessage: HTMLElement;
  var mapName: HTMLInputElement;
  var religionsNumber: HTMLInputElement;
  var distanceUnitInput: HTMLInputElement;
  var heightUnit: HTMLSelectElement;

  var rivers: Selection<SVGElement, unknown, null, undefined>;
  var oceanLayers: Selection<SVGGElement, unknown, null, undefined>;
  var emblems: Selection<SVGElement, unknown, null, undefined>;
  var svg: Selection<SVGSVGElement, unknown, null, undefined>;
  var ice: Selection<SVGGElement, unknown, null, undefined>;
  var labels: Selection<SVGGElement, unknown, null, undefined>;
  var burgLabels: Selection<SVGGElement, unknown, null, undefined>;
  var burgIcons: Selection<SVGGElement, unknown, null, undefined>;
  var anchors: Selection<SVGGElement, unknown, null, undefined>;
  var terrs: Selection<SVGGElement, unknown, null, undefined>;
  var temperature: Selection<SVGGElement, unknown, null, undefined>;
  var markers: Selection<SVGGElement, unknown, null, undefined>;
  var defs: Selection<SVGDefsElement, unknown, null, undefined>;
  var coastline: Selection<SVGGElement, unknown, null, undefined>;
  var lakes: Selection<SVGGElement, unknown, null, undefined>;
  var provs: Selection<SVGGElement, unknown, null, undefined>;
  var getColorScheme: (scheme: string | null) => (t: number) => string;
  var getColor: (height: number, scheme: (t: number) => string) => string;
  var svgWidth: number;
  var svgHeight: number;
  var viewbox: Selection<SVGElement, unknown, null, undefined>;
  var routes: Selection<SVGElement, unknown, null, undefined>;
  var biomesData: {
    i: number[];
    name: string[];
    color: string[];
    biomesMatrix: Uint8Array[];
    habitability: number[];
    iconsDensity: number[];
    icons: string[][];
    cost: number[];
  };
  var notes: Note[];
  var style: {
    burgLabels: { [key: string]: { [key: string]: string } };
    burgIcons: { [key: string]: { [key: string]: string } };
    anchors: { [key: string]: { [key: string]: string } };
    [key: string]: any;
  };

  var layerIsOn: (layerId: string) => boolean;
  var drawRoute: (route: Route) => void;
  var invokeActiveZooming: () => void;
  var FlatQueue: new () => { length: number; push(item: number, priority: number): void; pop(): number; peekValue(): number };

  var tip: (
    message: string,
    autoHide?: boolean,
    type?: "info" | "warn" | "error" | "success",
    timeout?: number
  ) => void;
  var locked: (settingId: string) => boolean;
  var unlock: (settingId: string) => void;
  var $: <T extends Element = HTMLElement>(selector: string) => T | null;
  var scale: number;
  var changeFont: () => void;
  var getFriendlyHeight: (coords: [number, number]) => string;
  var addLakesInDeepDepressions: () => void;
  var openNearSeaLakes: () => void;
  var calculateMapCoordinates: () => void;
  var calculateTemperatures: () => void;
  var reGraph: () => void;
  var createDefaultRuler: () => void;
  var showStatistics: () => void;
  var closeDialogs: (except?: string) => void;
  var editWorld: () => void;
  var showExportPane: () => void;
  var UITour: { start: () => void };
  var getHeight: (h: number) => string;
  var getLatitude: (y: number, precision?: number) => number;
  var getLongitude: (x: number, precision?: number) => number;
  var getFileName: (name: string) => string;
  var customization: number;
  var speak: (text: string) => void;
  var uploadFile: (el: HTMLInputElement, callback: (data: string) => void) => void;
  var downloadFile: (content: string | Blob, name: string) => void;
  var zoomTo: (x: number, y: number, zoom: number, duration: number) => void;
  var modules: Record<string, boolean>;
}
