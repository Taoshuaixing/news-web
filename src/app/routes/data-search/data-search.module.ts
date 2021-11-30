import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzTreeModule} from 'ng-zorro-antd/tree';
import { SubjectTreeComponent } from './subject-tree/subject-tree.component';



@NgModule({
  declarations: [
    SubjectTreeComponent
  ],
  exports:[
    SubjectTreeComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzTreeModule,
    NzIconModule,
    NzSpinModule
  ]
})
export class DataSearchModule { }
