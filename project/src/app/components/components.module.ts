import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputExampleComponent } from './input-example/input-example.component';

@NgModule({
    declarations: [
        InputExampleComponent
    ],
    imports: [
        CommonModule,
        NgbModule
    ],
    exports: [
        InputExampleComponent
    ]
})
export class ComponentsModule { }
