import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview-logo',
  templateUrl: './preview-logo.component.html',
  styleUrls: ['./preview-logo.component.css']
})
export class PreviewLogoComponent {
  @Input() logoDescription:string[] = [];

}
