import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { CardComponent } from './card/card.component';
import { PhoneMaskingDirective } from './directives/phone-masking.directive';
import { SearchPipe } from './pipes/search.pipe';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookingHistoryComponent,
    ManageProfileComponent,
    CardComponent,
    PhoneMaskingDirective,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [

    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class SharedModule { }
