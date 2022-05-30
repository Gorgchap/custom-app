import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: '<mat-spinner [diameter]="diameter" [strokeWidth]="strokeWidth"></mat-spinner>',
})
export class LoaderComponent {
  @Input() diameter!: number;
  @Input() strokeWidth!: number;
}
