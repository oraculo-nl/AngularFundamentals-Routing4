import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdressenComponent } from './adressen/adressen.component';
import { AutosComponent } from './autos/autos.component';
import { LedenComponent } from './leden/leden.component';
import { MagActiverenService } from './mag-activeren.service';
import { OnbekendeurlComponent } from './onbekendeurl/onbekendeurl.component';
import { PostcodeComponent } from './postcode/postcode.component';
import { PostcodesComponent } from './postcodes/postcodes.component';


const routes: Routes = [
  // default path, redirects naar "/leden". De slash gebruiken we, zodat we weer
  // vanauit de root starten
  { path: "", redirectTo: "/leden", pathMatch: "full" },
  { path: "leden", component: LedenComponent },
  { path: "autos", component: AutosComponent },
  { path: "adressen", component: AdressenComponent },
  { path: "postcodes", component: PostcodesComponent },
  // onderstaande configuratie rendert de AdressenComponent naar de <router-outlet>
  // van de app (Geen parent-child relatie)
  { path: "postcode/adres", component: AdressenComponent },
  { path: "postcode/:id", component: PostcodeComponent, canActivate: [MagActiverenService] },
  {
    path: "postcode", component: PostcodeComponent,
    // onderstaande configuratie rendert de componenten naar de <router-outlet>
    // van de parent, t.w. PostcodeComponent (parent-child relatie)
    // Deze componenten verschijnen dus alleen, wanneer je in de parent opnieuw
    // een <router-outlet> tag opneemt; ze worden niet naar de <router-outlet> van
    // de parent gerenderd
    children: [
      { path: '', redirectTo: 'adressen', pathMatch: 'full' },
      { path: 'adressen', component: AdressenComponent },
      { path: 'leden', component: LedenComponent },
      { path: '**', component: OnbekendeurlComponent }
    ]
  },
  { path: "**", component: OnbekendeurlComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
