import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { SharedModule } from 'shared/module'
import { CoachComponent } from './coach.component'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{path: 'coach', component: CoachComponent}])
  ],
  declarations: [CoachComponent]
})
export class CoachModule { }
