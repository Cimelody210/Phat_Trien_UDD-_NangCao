import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  isValidPassword(password: string): boolean {
    throw new Error('Mật khẩu phải chứa ít nhất 8 ký tự');
  }

  constructor() { }
}
