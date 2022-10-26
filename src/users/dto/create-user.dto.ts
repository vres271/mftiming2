import { Role } from './../../auth/roles/role.enum';
export class CreateUserDto {
    login: string
    password: string = ''
    firstName: string = ''
    secondName: string = ''
    thirdName: string = ''
    isActive: boolean  = false; 
    roles: Role[]  = []; 
}
