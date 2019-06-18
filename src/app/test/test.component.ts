import { Component, OnInit } from '@angular/core';
import { InterpolationConfig } from '@angular/compiler';

@Component({
  selector: 'app-test',
  //templateUrl: './test.component.html',

  // Interpolation - binding 
  /*template: `<div> 
  welcome to inline template {{name}}
  </div> 
  <div>  FirstName : <input type="text" name ="fname"> </div>
  <div> Calculation : {{2+2}} </div>
  <div> string concadination :  {{ "This is " + name }}</div>
  <div> Javascript method : {{name.length}} </div>
  <div> upper case : {{ name.toUpperCase()}} </div>
  <div> calling method : {{getuser()}}  </div> 
  `,*/
  // Property binding
  /*
  template : ` <div>
                Welcome {{name}}
              </div>
              <input  [id]="myid" type="text" value="Bharat">              
              <input bind-disabled="mydisabled" id={{myid}} type="text" value="J">
              `,  
  */

  // Class binding 
  /* 
  template: `
            <h2 class="text-success"> success </h2>
            <h2 [class]="successClass"> success </h2>
            <h2 [class]="dangerClass"> Danger </h2>
            <h2 [class.text-danger] ="hasError"> conditionally apply </h2>
            <h2 [ngClass] ="myClass"> class binding </h2>
            `,*/


// Style Bidning
/*
  template: `
        <h2 [style.color]="'orange'"> Style binding </h2>
        <h2 [style.color]="hasError ? 'red' : 'green'"> style binding with conditon operator</h2>
        <h2 [ngStyle]="colorStyle"> Style binding NG style</h2>
  `,
  */

  // data binding 
/*
  template: ` <h2> Data Binding </h2>
          <button (click)="onClick()"> Greet </button>
          {{greetings}}
          `,
  */

  //Event binding 
  /*
template: `<h2>Event binding</h2>
        <button (click)="onClickEvent($event)">Greet</button>
        <button (click)="greetings = 'welcome bharat'">Greet</button>
        {{greetings}}
`,
  */
// template reference variable 
/*
template : `
          <h2> template reference variable </h2>
          <input #myid type="text">
          <input #myname type="text">
          <button (click)="logmessage(myid.value,myname.value)">log</button>
`,
*/
// Tow way binding
/*
template : ` <h2> two way binding</h2>
<input [(ngModel)]="towbindname" type="text">
{{towbindname}}
`,
*/
//structural Directives
/*
template : `
      <h2> Structural Directives -ngIf </h2>
      <h2 *ngIf="isDisplay"> Welcome to Structural Directives </h2>

      <h2 *ngIf="isDisplay; else elseblock"> Welcome to Bharat </h2>

      
      
      <div *ngIf="isDisplay; then thenblock else elseblock"></div>
      <ng-template then #thenblock>
      <h2>display</h2>
      </ng-template>
      <ng-template else #elseblock>
      <h2>hidden</h2>
      </ng-template>
      <h2> ngswtich case statement</h2>
      <div [ngSwitch]="color">  
      <div *ngSwitchCase="'red'"> you picked Red color</div>
      <div *ngSwitchCase="'green'"> you picked green color</div>
      <div *ngSwitchCase="'blue'"> you picked blue color</div>
      </div>

      <h2> ngFor Statement </h2>
      <div *ngFor="let color of colors">
      <h2> {{color}} </h2>
      </div>

      <h2> ngFor Statement - index value (index start from zero) </h2>
      <div *ngFor="let color of colors; index as i">
      <h2> {{i}} {{color}} </h2>
      </div>
      
      <h2> ngFor Statement - first of  </h2>
      <div *ngFor="let color of colors; first as f">
      <h2> {{f}} {{color}} </h2>
      </div>

      <h2> ngFor Statement - last of  </h2>
      <div *ngFor="let color of colors; last as l">
      <h2> {{l}} {{color}} </h2>
      </div>

      <h2> ngFor Statement - odd of  </h2>
      <div *ngFor="let color of colors; odd as o">
      <h2> {{o}} {{color}} </h2>
      </div>

      <h2> ngFor Statement - even of  </h2>
      <div *ngFor="let color of colors; even as e">
      <h2> {{e}} {{color}} </h2>
      </div>
`,
*/
// PIPES - lowercase, uppercase, titlecase, slice , json 
template : `
        <h2> Explain PIPES </h2>
        <h2> {{ pipName }} </h2>
        <h2> {{ pipName | lowercase }} </h2>
        <h2> {{ pipName | uppercase }} </h2>
        <h2> {{ pipTitle | titlecase }} </h2>
        <h2> {{ pipJson | json }} </h2>
        <h2> {{ pipName | slice:3:5}} </h2>

        <h2> {{5.678 | number : '2.2-3' }} <h2>
        <h2> {{ .25 | percent }}</h2>
        <h2> {{100 | currency: 'GBP' : code }} </h2>

        <h2> {{ pipDate | date : 'short' }} </h2>
        <h2> {{ pipDate | date : 'shortDate' }} </h2>
       
  `,
  //styleUrls: ['./test.component.css']
  styles: [`        
        .text-success {
          color:green;            
        }
        .text-danger {
          color : red;
        }
        .text-special {
          font-style : italic;
        }
          `]
})
export class TestComponent implements OnInit {

  public name = "Bharat";
  public myid ="testid";
  public mydisabled=false;
  //binding  class to html element
  public successClass ="text-success";
  public dangerClass ="text-danger";
  public hasError = false;
  public isSpecial = true;
  public myClass = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special" : this.isSpecial,
  }
//style binding
  public colorStyle = {
    color : 'blue',
    fontStyle : 'italic'

  }

  // Data binding 
  public greetings=" Data binding invoking!"
// two way binding
  public towbindname="";

  // structural directives
  public isDisplay = true;

  // ngSwitch 
  public color="green";

  //ngFor
  public colors =["red","green","blue","yellow","organe"];

  // PIPES 
  public pipName = "Bharat"
  public pipTitle = "Welcome to PIPE concept";
  public pipJson = { "fistName" : "Bharat", "lastName":"J"};
  public pipDate = new Date();
  constructor() { }

  ngOnInit() {
  }
getuser()
{
  return this.name + "j";
}

// Data binding 
onClick()
{
  console.log("data binding done");
  this.greetings;
}
//event binding 
onClickEvent(event)
{
console.log(event)
this.greetings = event.type;
}
//template reference variable
logmessage(value,value1){
  console.log(value,value1);
}

}
