import { Routes } from '@angular/router';
import { TeamGeneratorComponent } from './team-generator.component';
import { FakeTeamGeneratorComponent } from './fake-team-generator';

export const routes: Routes = [
    { path: '', redirectTo: '/fake-random-team-generator', pathMatch: 'full' },
    { path: 'fake-random-team-generator', component: FakeTeamGeneratorComponent },
    { path: 'random-team-generator', component: TeamGeneratorComponent }
];