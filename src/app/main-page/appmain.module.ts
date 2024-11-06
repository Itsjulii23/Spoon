// src/app/main-page/main-page.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageService } from './services/main-page.service';

@NgModule({
    declarations: [
        MainPageComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MainPageComponent
    ],
    providers: [
        MainPageService
    ]
})

export class MainPageModule { }
