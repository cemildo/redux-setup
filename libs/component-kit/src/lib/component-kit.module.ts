import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageBoxComponent } from './message-box/message-box.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MessageBoxComponent],
  exports: [MessageBoxComponent]
})
export class ComponentKitModule {}
