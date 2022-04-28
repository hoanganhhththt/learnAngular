import { Component } from "@angular/core";
@Component({
  selector: "app-hello",
  template: ` 
    <h2>Hello there!</h2>
    <h2>My name:  {{user.name}}</h2>
    <h2>My age:  {{user.age}}</h2> 
    <button (click)="showInfo()">Click me!</button>
    <div *ngIf="user.age >= 13 ; else noPG13">
      Bạn có thể xem nội dung PG-13
    </div>
    <!-- <div *ngIf="user.age < 13">
      Bạn không thể xem nội dung PG-13
    </div> -->
    <ng-template #noPG13>
      <div>
        Bạn không thể xem nội dung PG-13
      </div>
    </ng-template>
    <ng-template [ngIf]="user.age >= 18" [ngIfElse]="no18">
      <div>
        Bạn có thể xem nội dung 18+
      </div>
    </ng-template>
    <ng-template #no18>
      <div>
        Bạn không thể xem nội dung 18+
      </div>
    </ng-template>
    `,
})
export class HelloComponent {
  user = {
    name: 'Hoàng Anh',
    age: 22,
  }
  showInfo() {
    alert("Inside Angular Component method");
  }
}