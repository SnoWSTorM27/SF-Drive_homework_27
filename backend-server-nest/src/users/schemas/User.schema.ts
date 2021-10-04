import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';
import { Role } from 'src/roles/schemas/Role.schema';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  // @ApiProperty({example: "61504668891983b09efe5ed5", description: "Идентификационный номер пользователя"})
  // @Prop()
  // _id: Types.ObjectId;

  @ApiProperty({example: "Иванов Иван Иванович", description: "ФИО пользователя"})
  @Prop()
  name: string;

  @ApiProperty({example: "user@email.ru", description: "Почтовый адрес пользователя"})
  @Prop({required: true, unique: true})
  email: string;

  @ApiProperty({example: "$2a$07$CxEygMm.qBy1voFY9N", description: "Зашэшированный пароль пользователя"})
  @Prop({required: true})
  password: string;

  @ApiProperty({example: "1969-12-31T17:00:00.000Z", description: "Дата рождения пользователя"})
  @Prop()
  birthDay: Date;
  
  @ApiProperty({example: "+7 (952) 648-51-35", description: "Телефон пользователя"})
  @Prop()
  phone: string;

  @ApiProperty({example: "2141 567247", description: "Серия и номер паспорта"})
  @Prop()
  serialPass: string;

  @ApiProperty({example: "1969-12-31T17:00:00.000Z", description: "Дата выдачи паспорта"})
  @Prop()
  selectedDatePass: Date;
  
  @ApiProperty({example: "ГУВД Московской области", description: "Кем выдан паспорт"})
  @Prop()
  provide: string;

  @ApiProperty({example: "213-214", description: "Код подразделения"})
  @Prop()
  idPassOffice: string;

  @ApiProperty({example: "4564 375423", description: "Серия и номер водительского удостоверения"})
  @Prop()
  idDrivingLicense: string;

  @ApiProperty({example: "1969-12-31T17:00:00.000Z", description: "Дата выдачи водительского удостоверения"})
  @Prop()
  selectedDateDrivingLicence: Date;

  @ApiProperty({example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzA1MDg3NTgsImV4cCI6MTYzMzEwMDc1OH0.XqfO49_gHJZ4x-aNq1XNZF-Mzy0UWSnrCCihdlEizrc", description: "Refresh Token"})
  @Prop()
  refreshToken: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }] })
  roles:Role;
}

export const UserSchema = SchemaFactory.createForClass(User);