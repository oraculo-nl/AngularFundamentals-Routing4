import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LedenComponent } from './leden/leden.component';
import { AutosComponent } from './autos/autos.component';
import { AdressenComponent } from './adressen/adressen.component';
import { PostcodesComponent } from './postcodes/postcodes.component';
import { PostcodeComponent } from './postcode/postcode.component';
import { OnbekendeurlComponent } from './onbekendeurl/onbekendeurl.component';

@NgModule({
  declarations: [
    AppComponent,
    LedenComponent,
    AutosComponent,
    AdressenComponent,
    PostcodesComponent,
    PostcodeComponent,
    OnbekendeurlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
