import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from '@angular/common/http';
import { AppShellNoRenderDirective } from './directives/app-shell-no-render.directive';
import { AppShellRenderDirective } from './directives/app-shell-render.directive';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AppShellNoRenderDirective,
        AppShellRenderDirective,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserTransferStateModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
