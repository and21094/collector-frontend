import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectorComponent } from './collector.component';
import { CollectionsComponent } from './collections/collections.component';

const routes: Routes = [
  {path: '', component: CollectorComponent,
  children: [
    {path: '', component: CollectionsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectorRoutingModule { }
