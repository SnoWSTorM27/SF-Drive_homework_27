import { Body, Controller, Get, HttpCode, HttpStatus, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JWTAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto.';
import { User } from './schemas/User.schema';
import { UsersService } from './users.service';

@ApiTags("Пользователи")
@Controller('api/users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @ApiOperation({summary: "Создание пользователя"})
    @ApiResponse({status: 201, type: User})
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }

    @ApiOperation({summary: "Получить всех пользователей"})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JWTAuthGuard)
    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }

    @ApiOperation({summary: "Смена пароля"})
    @ApiResponse({status: 200, type: User})
    @UseGuards(JWTAuthGuard)
    @Post('/changePass')
    @HttpCode(HttpStatus.ACCEPTED)
    changePassword(@Body() userDto: UpdateUserDto) {
        return this.userService.changePassword(userDto);
    }
}
