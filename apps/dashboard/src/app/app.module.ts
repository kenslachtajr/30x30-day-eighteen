import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreDataModule } from '@ngrx-computers/core-data';
import { CoreStateModule } from '@ngrx-computers/core-state';
import { MaterialModule } from '@ngrx-computers/material';
import { UiLoginModule } from '@ngrx-computers/ui-login';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { ComputersComponent } from './computers/computers.component';
import { ComputersListComponent } from './computers/computers-list/computers-list.component';
import { ComputersDetailsComponent } from './computers/computers-details/computers-details.component';
import { ComputersItemComponent } from './computers/computers-item/computers-item.component';
import { WildComponent } from './wild/wild.component';

@NgModule({
  declarations: [
    AppComponent,
    ComputersComponent,
    ComputersListComponent,
    ComputersDetailsComponent,
    ComputersItemComponent,
    WildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
