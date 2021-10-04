import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/schemas/User.schema';
import * as mongoose from 'mongoose';

export type RoleDocument = Role & Document;

@Schema()
export class Role {
  // @ApiProperty({example: "61504668891983b09efe5ed5", description: "Идентификационный номер пользователя"})
  // @Prop()
  // _id: Types.ObjectId;

  @ApiProperty({example: "Арендатор", description: "Значение роли пользователя"})
  @Prop({required: true, unique: true, default: "Арендатор"})
  value: string;

  @ApiProperty({example: "Тот кто арендует машину", description: "Описание роли"})
  @Prop()
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  users:User[];
}

export const RoleSchema = SchemaFactory.createForClass(Role);




