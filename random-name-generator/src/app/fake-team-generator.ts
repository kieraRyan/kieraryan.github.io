import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Team } from './models/team';
import { NgFor , NgIf} from '@angular/common';

@Component({
  selector: 'fake-team-generator',
  imports: [RouterOutlet, RouterLink, MatInputModule, MatFormFieldModule, FormsModule, NgFor, NgIf],
  templateUrl: './fake-team-generator.html',
  styleUrl: './app.component.css',
})
export class FakeTeamGeneratorComponent {
  
  teams: Team[] = [];
  enteredTeamMembers: string = "";
  submitted: boolean = false;

  addNewTeam(event: any) : void {
    this.teams.push({
      teamName: this.getNextTeamName(),
      members: this.enteredTeamMembers.split(',')
    });
    this.enteredTeamMembers = "";
  }
  
  getNextTeamName() : string {
    return `Team ${this.teams.length + 1}`;
  }

}
