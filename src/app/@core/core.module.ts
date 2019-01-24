import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { Service } from './services/service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

const SERVICES = [
  Service,
  UserService
];

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  providers: [
    ...SERVICES
  ],
  declarations: []
})

export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: CoreModule,
      providers: [
        ...SERVICES
      ]
    };
  }
}
