import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styles: [`
    p {
      color: orange;
    }
  `]
})

export class WarningComponent {
  message = 'Attention !';
}
