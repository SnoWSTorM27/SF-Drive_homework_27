import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { RolesModule } from 'src/roles/roles.module';
import { Role, RoleSchema } from 'src/roles/schemas/Role.schema';
import { User, UserSchema } from './schemas/User.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    forwardRef(() => AuthModule),
    RolesModule,
    MongooseModule.forFeature([
      {name: User.name, schema: UserSchema},
      {name: Role.name, schema: RoleSchema}
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [
    UsersService,
  ]
})
export class UsersModule {}
