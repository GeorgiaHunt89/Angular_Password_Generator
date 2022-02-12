import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password ='';
  includeLetters =false;
  includeNumbers =false;
  includeSymbols =false;

  onChangeLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(){
    this.password = 'test password';
    console.log('Include Letters', this.includeLetters);
    console.log('Include Numbers', this.includeNumbers);
    console.log('Include Symbols', this.includeSymbols);
  }

  
}
