import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ListPaymentsComponent } from './list-payments/list-payments.component';

export const featurePaymentsRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ListPaymentsComponent]
})
export class FeaturePaymentsModule {}
