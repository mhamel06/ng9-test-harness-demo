import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FeatureActivityModule} from '@ng9-comp-harness/feature-activity';
import {FeaturePaymentsModule} from '@ng9-comp-harness/feature-payments';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FeatureActivityModule,
    FeaturePaymentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
