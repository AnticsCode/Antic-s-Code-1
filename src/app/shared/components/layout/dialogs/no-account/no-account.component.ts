import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrafterService } from '@core/services/crafter/crafter.service';

import { LoginComponent } from '@shared/components/login/login.component';
import { DialogData } from '@shared/interfaces/interfaces';

@Component({
  selector: 'app-no-account',
  templateUrl: './no-account.component.html',
  styleUrls: ['./no-account.component.scss']
})

export class NoAccountComponent {

  type: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private crafter: CrafterService,
    public dialogRef: MatDialogRef<NoAccountComponent>
  ) { }

  public openLogin(register: boolean): void {
    this.dialogRef.close();
    // Navigate to Register TAP
    this.crafter.dialog(LoginComponent, {register}, 'Login');
  }

}
