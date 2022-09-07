import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  gridColumns = [] as any[];
  gridData = [] as any[];
  sortOrder = false;

  @Input("dataList")
  public set setData(dataList:any){
    if (dataList.length) {
      this.gridColumns = Object.keys(dataList[0]);
      this.gridData = dataList;
    }
  }
  dataList = [] as any;
  @Output()
  selectedObj: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  deleteObj:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  public selectRecord(row: any) {
    this.selectedObj.emit(row);
  }
  public deleteRecord(row: any) {
    this.deleteObj.emit(row);
  }
  public sortData(colName: any) {
     this.sortOrder = !this.sortOrder;
    if (this.sortOrder) {
      this.gridData = this.gridData.sort((a, b) => {
        if (a[colName] < b[colName])
          return -1;
        else if (a[colName] > b[colName])
          return 1;
        else
          return 0;
      });
    }
    else {
      this.gridData = this.gridData.sort((a, b) => {
        if (a[colName] < b[colName])
          return 1;
        else if (a[colName] > b[colName])
          return -1;
        else
          return 0;
      });
    }
  }

}
