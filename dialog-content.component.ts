import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  email: string;
  name: string;
  surname: string;
}

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.scss']
})
export class DialogContentComponent {
  email: string = '';
  name: string = '';
  surname: string = '';
 
  constructor() {
    // this.name = data.name;
  }

}
