import { Component, Input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Team } from './models/team';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'team-generator-component',
  imports: [RouterOutlet, MatInputModule, MatFormFieldModule, MatSelectModule, FormsModule, NgFor, NgIf
  ],
  templateUrl: './team-generator.component.html',
  styleUrl: './app.component.css',
})
export class TeamGeneratorComponent {

  teams: Team[] = [];

  displayTeams: boolean = false;
  enteredTeamMembers: string = "";

  teamNumOptions: number[] = Array.from({ length: 10 }, (_, i) => i + 1)
  selectedTeamNum: number = 1;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const stateData = nav?.extras.state?.['inputTeams'];

    if (stateData) {
      this.teams = stateData;
      return;
    }

    // if not in state, check session storage
    const saved = sessionStorage.getItem('inputTeams');
    if (saved) {
      this.teams = JSON.parse(saved);
    }
  }

  onTeamNumberChange(event: any): void {
    this.displayTeams = false;
  }

}
