import {Component, Input} from "angular2/core"

@Component({
    selector: "simple-table",
    template: `
    <h6 class="pull-right">Custom Reusable Component</h6>
    <div class="clearfix"></div>
    <div class="well">
      <h4>{{contentTitle}}</h4>
    </div>
        <table class="table table-hover">
            <thead>
            <tr>
                <th *ngFor="#header of headers">{{header | uppercase}}</th>
            </tr>
            </thead>
            <tbody (click)="sendRowData($event)">
            <tr *ngFor="#row of tableContent">
                <td *ngFor="#header of headers">{{row[header]}}</td>
            </tr>
            </tbody>
        </table>
  `,
    directives: []
})
export class SimpleTable {
    private headers;
    @Input("contentTitle") contentTitle;
    @Input("tableContent") tableContent;

    ngOnInit() {
        this.headers = Object.keys(this.tableContent[0]);
    }

    sendRowData(el) {
        let selected = el.target.parentElement;
        this.changeRowSelection(selected);
        let row = {detail : this.getRowData(selected)};
        window.dispatchEvent(new CustomEvent('itemizing', row));
    }

    changeRowSelection(selected) {
        let trs = document.querySelectorAll('tr');
        for (let i = 0; i < trs.length; i++) {
            trs[i].classList.remove('active');
        }
        selected.classList.add('active');
    }

    getRowData(selected) {
        let rowData = {};
        let tds = selected.children;
        for (let i = 0; i < tds.length; i++) {
            rowData[this.headers[i]] = tds[i].textContent;
        }
        return rowData;
    }
}