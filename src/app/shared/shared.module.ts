import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipe/category.pipe';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    ErrorDialogComponent,
    CategoryPipe,
  ]
})
export class SharedModule { }
