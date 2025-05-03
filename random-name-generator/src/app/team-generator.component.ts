import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Team } from './models/team';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'team-generator-component',
  imports: [RouterOutlet, MatInputModule, MatFormFieldModule, FormsModule, NgFor, NgIf],
  templateUrl: './team-generator.component.html',
  styleUrl: './app.component.css',
})
export class TeamGeneratorComponent {
  
  @Input() teams: Team[] = [];

  displayTeams: boolean = false;
  enteredTeamMembers: string = "";

}
