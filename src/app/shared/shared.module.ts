import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondsFormatterPipe } from './_pipes/seconds-formatter.pipe';
import { ConfirmBoxComponent } from './_components/confirm-box/confirm-box.component';
import { NbCardModule, NbDialogModule } from '@nebular/theme';
import { AlertComponent } from './_components/alert/alert.component';
import { InputColorPipe } from './_pipes/input-color.pipe';



@NgModule({
  declarations: [SecondsFormatterPipe, ConfirmBoxComponent, AlertComponent, InputColorPipe],
  imports: [
    CommonModule,
    NbCardModule,
    NbDialogModule.forChild(),
  ],
  exports : [SecondsFormatterPipe, AlertComponent, InputColorPipe]
})
export class SharedModule { }
