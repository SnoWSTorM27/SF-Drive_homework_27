import { BadRequestException, ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/User.schema';
import * as bcrypt from 'bcryptjs';
import { UpdateUserDto } from './dto/update-user.dto.';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
        private roleService: RolesService) {}

    async createUser( dto: CreateUserDto ) {
        const user = await this.userModel.create(dto);
        const role = await this.roleService.getRoleByValue("USER");
        await user.$set('roles', [role.id])
        user.roles = role
        return user;
    }

    async getAllUsers() {
        const users = await this.userModel.find().exec();
        return users;
    }

    async getUserByEmail(email: string) {
        return await this.userModel.findOne({email});
    }

    async changePassword(userDto: UpdateUserDto) {
        const user = await this.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        const hashPassword = await bcrypt.hash(userDto.password, 7);
        if (user && !passwordEquals) {
            return await this.userModel.findOneAndUpdate({email: userDto.email}, {password: hashPassword})
        }
        throw new BadRequestException({message: "Некорректный email или пароль"});
    }
}
