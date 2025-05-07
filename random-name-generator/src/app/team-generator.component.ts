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

  inputTeams: Team[] = [];
  teamsToDisplay: Team[] = [];

  enteredTeamMembers: string = "";
  teamMemberArray: string[] = [];

  teamNumOptions: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  selectedTeamNum: number = 1;

  errorMessage: string = '';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const stateData = nav?.extras.state?.['inputTeams'];

    if (stateData) {
      this.inputTeams = stateData;
      return;
    }

    // if not in state, check session storage
    const saved = sessionStorage.getItem('inputTeams');
    if (saved) {
      this.inputTeams = JSON.parse(saved);
    }
  }

  onTeamNumberChange(event: any): void {
    this.teamsToDisplay = [];
    this.errorMessage = "";
  }

  validateTeamLength(): boolean {
    if (this.teamMemberArray.length < this.selectedTeamNum) {
      return false;
    }
    return true;
  }

  displayRandomTeams(event: any): void {
    this.teamsToDisplay = [];
    this.errorMessage = "";
    this.teamMemberArray = this.enteredTeamMembers.split(',');

    if (!this.validateTeamLength()) {
      this.errorMessage = `You have not entered enough people to make ${this.selectedTeamNum} team(s)`;
      return;
    }

    // if predefined teams provided, use those
    if (this.inputTeams.length !== 0) {
      this.teamsToDisplay = this.inputTeams;
      return;
    }

    this.teamsToDisplay = this.generateRandomTeams();
  
  }

  private generateRandomTeams(): Team[] {
    let teamsList: Team[] = this.constructEmptyTeamArray();
    while (this.assignMembersToTeams(teamsList)){
      continue;
    }
    return teamsList;
  }

  private assignMembersToTeams(teamsList: Team[]): boolean {
    for (let i = 0; i < teamsList.length; i++) {
      if (this.teamMemberArray.length === 0){
        return false;
      }
      
      let index = Math.floor(Math.random() * this.teamMemberArray.length);
      let selectedMember = this.teamMemberArray[index];

      teamsList[i].members.push(selectedMember);
      this.teamMemberArray.splice(index, 1);

    }

    return true;
  }

  private constructEmptyTeamArray(): Team[] {
    let emptyTeams: Team[] = [];
    for (let i = 1; i <= this.selectedTeamNum; i++) {
      emptyTeams.push( {
        teamName: `Team ${i}`,
        members: []
      });
    }
    return emptyTeams;
  }

}
