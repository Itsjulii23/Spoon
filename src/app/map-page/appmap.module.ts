// src/app/main-page/main-page.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule para directivas comunes
import { MapPageComponent } from './pages/map-page.component';
import { HeaderComponent } from '../main-page/components/header/header.component';
import { FooterComponent } from '../main-page/components/footer/footer.component';

@NgModule({
    declarations: [
        MapPageComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MapPageComponent
    ],
    providers: [
    ]
})

export class MapPageModule { }
