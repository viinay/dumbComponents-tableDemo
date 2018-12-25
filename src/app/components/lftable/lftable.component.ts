import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lftable',
  templateUrl: './lftable.component.html',
  styleUrls: ['./lftable.component.css']
})
export class LftableComponent implements OnInit {
  @Input() data:any[];
  @Input() display:any[];
  @Output() rowClick:EventEmitter<any> = new EventEmitter();
  @Input() actions:object[];

  head:string[]=[];
  body=[];

  constructor() { }

  ngOnInit() {
    this.data.forEach(elem=>{
      if(!this.display.length){
        let keys = Object.keys(elem);
        if(this.head.length < keys.length){
          this.head = keys;
        }
        this.body.push(Object.values(elem));
      }else{
        this.head = this.display;
        let row = []
        this.head.forEach(function(key){
          row.push(elem[key])
        })
        this.body.push(row)
      }
    })
  }

  onRowClick(rowIndex){
    this.rowClick.emit({event:'click',row:this.data[rowIndex]})
  }

  onCheckBoxChanged(isChecked,rowIndex){
    isChecked && this.rowClick.emit({event:'checkbox:checked',row:this.data[rowIndex]})

    !isChecked && this.rowClick.emit({event:'checkbox:unchecked',row:this.data[rowIndex]})
  }

  onActionClick(action,rowIndex){
    this.rowClick.emit({event:action.name,row:this.data[rowIndex]})
  }
}
