import { CoreModule } from "@abp/ng.core";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ValidationMessageComponent } from "./validation-message/validation-message.component";

@NgModule({
    imports:[CoreModule,CommonModule],
    declarations:[ValidationMessageComponent],
    exports:[ValidationMessageComponent]
})
export class TeduSharedModule{}