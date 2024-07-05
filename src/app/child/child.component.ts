import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() change = new EventEmitter();
  Text: string = "Hide Parent"
  ClsName: string="ShowParent";
  ChangeClick() {
    if (this.Text == "Hide Parent") {
      this.Text = "Show Parent"
    }
    else {
      this.Text = "Hide Parent"
    }
    if (this.ClsName =="ShowParent") {
      this.ClsName = "HideParent"
    }
    else if(this.ClsName == "HideParent") {
      this.ClsName ="ShowParent";
    }
    this.change.emit(this.ClsName);
    console.log(this.ClsName)
  }
}
