import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileContentComponent {

  @Input() user: User;

  constructor() { }

}
