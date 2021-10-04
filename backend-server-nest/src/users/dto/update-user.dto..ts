import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
  
    @ApiProperty({example: "Иванов Иван Иванович", description: "ФИО пользователя"})
    name: string;
  
    @ApiProperty({example: "user@email.ru", description: "Почтовый адрес пользователя"})
    email: string;
  
    @ApiProperty({example: "$2a$07$CxEygMm.qBy1voFY9N", description: "Зашэшированный пароль пользователя"})
    password: string;
  
    @ApiProperty({example: "1969-12-31T17:00:00.000Z", description: "Дата рождения пользователя"})
    birthDay: Date;
    
    @ApiProperty({example: "+7 (952) 648-51-35", description: "Телефон пользователя"})
    phone: string;
  
    @ApiProperty({example: "2141 567247", description: "Серия и номер паспорта"})
    serialPass: string;
  
    @ApiProperty({example: "1969-12-31T17:00:00.000Z", description: "Дата выдачи паспорта"})
    selectedDatePass: Date;
    
    @ApiProperty({example: "ГУВД Московской области", description: "Кем выдан паспорт"})
    provide: string;
  
    @ApiProperty({example: "213-214", description: "Код подразделения"})
    idPassOffice: string;
  
    @ApiProperty({example: "4564 375423", description: "Серия и номер водительского удостоверения"})
    idDrivingLicense: string;
  
    @ApiProperty({example: "1969-12-31T17:00:00.000Z", description: "Дата выдачи водительского удостоверения"})
    selectedDateDrivingLicence: Date;
  
    // @ApiProperty({example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzA1MDg3NTgsImV4cCI6MTYzMzEwMDc1OH0.XqfO49_gHJZ4x-aNq1XNZF-Mzy0UWSnrCCihdlEizrc", description: "Refresh Token"})
    // refreshToken: string;
}