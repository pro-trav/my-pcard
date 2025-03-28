import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgbModalModule, FormsModule, RouterModule],
  exports: [CommonModule, NgbModalModule, FormsModule],
})
export class SharedModule {}
