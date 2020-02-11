import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FeatureActivityModule} from '@ng9-comp-harness/feature-activity';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FeatureActivityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
