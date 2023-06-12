import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogContentComponent } from './dialog-content/dialog-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularMaterialExercise';


  email: string = '';
  name: string = '';
  surname: string = '';


  constructor(public dialog: MatDialog) 
  {

  };

  openModal() {
    
    const dialogRef = this.dialog.open(DialogContentComponent,
      {
       /*  width: '15%',
        height: '40%',
 */
        data: {
          name: this.name,
          email: this.email,
          surname: this.surname
        }
      });
