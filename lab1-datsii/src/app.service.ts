import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNumbers(): number {
    const a = 90;
    const b = 3.14;
    const c = a + b;
    return c;
  }

  getStrings(): string {
    const name = 'Mykola';
    const lastname = ' Datsii';
    const fullname = name + lastname;
    return fullname;
  }

  getArrays(): number[] {
    const list: number[] = [9,8,7];
    return list;
  }

  getEnum(): any {
    enum Color {Red = 'Red', Green = 'Green', Blue = 'Blue'};
    let c: Color = Color.Red;
    return c;
  }

  getMultipleArrays(): number[][] {
    const A: number[][] = [[1,2,3],[1,2,3]];
    return A;
  }

  getMultipleValues(): [number, string] {
    var employee: [number, string] = [1, 'Billy'];
    employee.push(2, 'John');
    return employee;
  }
}
