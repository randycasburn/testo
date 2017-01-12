import {bootstrap, BROWSER_PROVIDERS, BROWSER_APP_PROVIDERS} from "angular2/platform/browser";
import {Component, NgZone, enableProdMode} from "angular2/core"
import {SimpleTable} from "./simple_table.ts"
//enableProdMode();

@Component({
  selector: "shapes",
  providers: [],
  template: `
    <simple-table [contentTitle]="contentTitle" [tableContent]="shapes"></simple-table>
  `,
  directives: [SimpleTable]
})
export class Shapes {
    contentTitle = "Shapes";
    shapes = SHAPES;

    constructor(zone:NgZone){
        window.addEventListener('shapeShifting', (e) =>{
            zone.run(() => { this.shapes = e.detail; });
        })
    }
}

bootstrap(Shapes);

//========================
//MOCK DATA
const SHAPES:Shape[] = [
  {
    "shape": "triangle",
    "color": "red",
    "area": 5,
    "label": "T1"
  },
  {
    "shape": "triangle",
    "color": "green",
    "area": 27,
    "label": "T2"
  },
  {
    "shape": "triangle",
    "color": "yellow",
    "area": 15,
    "label": "T3"
  },
  {
    "shape": "triangle",
    "color": "red",
    "area": 10,
    "label": "T4"
  },
  {
    "shape": "quadrangle",
    "color": "red",
    "area": 25,
    "label": "Q1"
  },
  {
    "shape": "quadrangle",
    "color": "red",
    "area": 44,
    "label": "Q2"
  },
  {
    "shape": "circle",
    "color": "red",
    "area": 44,
    "label": "Q2"
  },
  {
    "shape": "circle",
    "color": "black",
    "area": 44,
    "label": "Q2"
  }
];
