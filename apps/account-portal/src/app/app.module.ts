import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FeatureActivityModule } from '../../../../libs/feature-activity/src';
import { FeaturePaymentsModule } from '../../../../libs/feature-payments/src';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', pathMatch: 'full', redirectTo:'activity'}
    ]),
    FeatureActivityModule,
    FeaturePaymentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
