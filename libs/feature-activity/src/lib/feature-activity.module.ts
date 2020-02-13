import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ListActivityComponent } from './list-activity/list-activity.component';
import { UiModule } from '../../../ui/src';

export const featureActivityRoutes: Route[] = [
    {path: 'activity', component: ListActivityComponent}
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(featureActivityRoutes),
    UiModule,
  ],
  declarations: [ListActivityComponent],

})
export class FeatureActivityModule {}
