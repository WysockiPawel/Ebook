import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StronaComponent } from './strona/strona.component';

const routes: Routes = [
  { path: '', redirectTo: '/strona', pathMatch: 'full' }, // Przekierowanie na /strona
  { path: 'strona', component: StronaComponent },
  // Inne ścieżki do innych komponentów
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
