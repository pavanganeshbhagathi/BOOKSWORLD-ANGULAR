import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { MatConfirmDialogComponent } from './../dialog/mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
/*
  openConfirmDialog() {
    this.dialog.open(MatConfirmDialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-conatainer',
      disableClose: true,
    });
  }*/
}
