import { NgModule } from '@angular/core';
import { JsonApiModule } from 'angular2-jsonapi';
import { PROVIDERS } from './providers';

@NgModule({
  providers: [PROVIDERS],
  exports: [JsonApiModule]
})
export class ContentaServiceModule {}
