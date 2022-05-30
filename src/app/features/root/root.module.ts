import { NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';
import { RootComponent, StatusModalComponent } from '@app/features/root/components';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    RootComponent,
    StatusModalComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
  ],
  exports: [
    RootComponent,
    StatusModalComponent,
  ],
})
export class RootModule {
}
