import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FillLevel } from '../../types';

@Component({
  selector: 'app-circle-diagram',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './circle-diagram.html',
  styleUrl: './circle-diagram.scss',
})
export class CircleDiagramComponent {
  @Input() fillLevel: FillLevel = FillLevel.Quarter;
  @Input() size: number = 60;
  @Input() showLabel: boolean = true;
  @Input() color: string = '#0d6efd';

  getProficiencyLabel(): string {
    switch(this.fillLevel) {
      case FillLevel.Quarter: return 'Basic';
      case FillLevel.Half: return 'Intermediate';
      case FillLevel.ThreeQuarters: return 'Advanced';
      case FillLevel.Full: return 'Expert';
      default: return 'Proficiency';
    }
  }
}
