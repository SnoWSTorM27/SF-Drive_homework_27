import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  
    @ApiProperty({example: "Арендатор", description: "Значение роли пользователя"})
    readonly value: string;
  
    @ApiProperty({example: "Тот кто арендует машину", description: "Описание роли"})
    readonly description: string;
  
}