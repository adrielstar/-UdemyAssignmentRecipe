import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponents } from './loading-spinner/loading-spinner.components';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { LoggingService } from '../logging.service';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponents,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    LoadingSpinnerComponents,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule
  ],
  entryComponents: [
    AlertComponent
  ],
  providers: [LoggingService]
})
export class SharedModule {

}
