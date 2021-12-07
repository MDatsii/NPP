import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): Person {
    const person = new Person('Дацій', 'Микола', '20', 'Червоний');
    return person;
  }
}

export class Person {
  LastName : string;
  FirstName : string;
  Age : number;
  EyeColor : string;

  constructor(LastName, FirstName, Age, EyeColor) {
    this.LastName = LastName;
    this.FirstName = FirstName;
    this.Age = Age;
    this.EyeColor = EyeColor;
  }
}
