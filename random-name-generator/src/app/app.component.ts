import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Team } from './models/team';
import { NgFor , NgIf} from '@angular/common';
import { TeamGeneratorComponent } from "./team-generator.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatInputModule, MatFormFieldModule, FormsModule, NgFor, TeamGeneratorComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  
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
