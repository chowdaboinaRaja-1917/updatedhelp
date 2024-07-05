import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  ClsName!:string;
  onChangecls(val: any) {
    this.ClsName = val;
    
  }
}
