import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { TeamFeedbackComponent } from './pages/team-feedback/team-feedback.component';
import { UserHeaderComponent } from './widget/user-header/user-header.component';
import { TeamHeaderComponent } from './widget/team-header/team-header.component';
import { SprintHeaderComponent } from './widget/sprint-header/sprint-header.component';
import { RadioStripComponent } from './widget/radio-strip/radio-strip.component';

const appRoutes: Routes = [
  { path: 'feedback/:user/:member', component: TeamFeedbackComponent},
  { path: '', redirectTo: '/feedback/albertam/renes', pathMatch: 'full' },
  { path: '**', component: TeamFeedbackComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    TeamFeedbackComponent,
    UserHeaderComponent,
    TeamHeaderComponent,
    SprintHeaderComponent,
    RadioStripComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
