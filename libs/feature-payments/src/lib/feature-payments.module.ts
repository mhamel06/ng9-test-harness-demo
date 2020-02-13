import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { UiModule } from '../../../ui/src';

export const featurePaymentsRoutes: Route[] = [
  {path: 'payments', component: ListPaymentsComponent}

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featurePaymentsRoutes),
    UiModule,
  ],
  declarations: [ListPaymentsComponent]
})
export class FeaturePaymentsModule {}
