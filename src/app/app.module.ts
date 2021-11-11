import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { InlineComponent } from './inline/inline.component';
import { SampleModuleModule } from './sample-module/sample-module.module'
// import {  } from './sample-module/sample-module.module'


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    InlineStyleComponent,
    InlineTemplateComponent,
    InlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SampleModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
