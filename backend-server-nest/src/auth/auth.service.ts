import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/users/schemas/User.schema';

@Injectable()
export class AuthService {
    constructor( private userService: UsersService,
        private jwtService: JwtService){}

    async login(userDto: CreateUserDto) {
        const user = await this.validateUser(userDto)
        return this.generateTokens(user);  
    }
    

    async registration(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new HttpException("Пользователь с таким email существует", HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 7);
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateTokens(user);
    }  

    private async generateTokens(user: User) {
        const payload = {email: user.email, id: (user as any)._id, roles: user.roles}
        
        return {
            accessToken: this.jwtService.sign(payload,{expiresIn:"40s"}),
            refreshToken: this.jwtService.sign({})
        }
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({message: "Некорректный email или пароль"});
        
    }

}
