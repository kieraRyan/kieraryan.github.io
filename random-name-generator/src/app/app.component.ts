import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Team } from './models/team';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
  teams: Team[] = [];
  enteredTeamMembers: string = "";


  addNewTeam(event: any) : void {
    console.log(this.enteredTeamMembers);
    this.teams.push({
      teamName: this.getNextTeamName(),
      members: this.enteredTeamMembers.split(',')
    });
    console.log('You have added a new team');
  }
  
  getNextTeamName() : string {
    return `Team ${this.teams.length + 1}`;
  }
}
