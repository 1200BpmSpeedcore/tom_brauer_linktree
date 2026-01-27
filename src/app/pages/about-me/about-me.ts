import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {
  readonly dateToday: Date = new Date();
  readonly birthDate: Date = new Date('2002-02-01');
  readonly currentAge = (): number => {
    return this.dateToday.getFullYear() - this.birthDate.getFullYear()
      - ((this.dateToday.getMonth() < this.birthDate.getMonth()
        || (
          this.dateToday.getMonth() === this.birthDate.getMonth()
          && this.dateToday.getDate() < this.birthDate.getDate()
        )
      ) ? 1 : 0);
  }
}
