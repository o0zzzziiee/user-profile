import { Component, Input } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [UserProfileComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Introduce yourself';
  user = {
    name: '',
    age: 0,
  };
}
