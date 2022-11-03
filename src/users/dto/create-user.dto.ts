export class CreateUserDto {
    login: string
    password: string = ''
    firstName: string = ''
    secondName: string = ''
    thirdName: string = ''
    isActive: boolean  = false; 
    roles: string; 
    birthDate: string; 
    categoriesIds: number[];
}
