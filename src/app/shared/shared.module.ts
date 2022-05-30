import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';
import {
  EmptyRouteComponent,
  HttpErrorModalComponent,
  LoaderComponent,
} from '@app/shared/components';
import { MaterialModule } from '@app/shared/ui-kits/material/material.module';

const SHARED_COMPONENTS = [
  EmptyRouteComponent,
  HttpErrorModalComponent,
  LoaderComponent,
];

const SHARED_MODULES = [
  MaterialModule,
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  imports: [
    CoreModule,
    ...SHARED_MODULES,
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_MODULES,
  ],
})
export class SharedModule {
}
