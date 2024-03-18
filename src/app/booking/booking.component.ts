import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
 location!:string;
 movie!:string;
 theatre!:string;
 timing!:string;


 onSubmit(){
  console.log("Location:"+this.location);
  console.log("Movie:"+this.movie);
  console.log("Theatre"+this.theatre);
  console.log("Timing:"+this.timing);
 }
}
