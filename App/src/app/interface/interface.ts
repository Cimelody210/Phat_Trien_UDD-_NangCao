export interface User{
    Id:  number,
    HoTen: string,
    email: string,
    password: string,
}

export interface Book{
    Title: string,
    Author: string,
    Price: number,
    Image: string,
    Star: Number,
    Description: string
}
export interface UserAccount extends User{
    userId: Number,
    email: string,
    matkhau: string
}