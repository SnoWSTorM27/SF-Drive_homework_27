import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/User.schema';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { Role, RoleSchema } from './schemas/Role.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
          {name: Role.name, schema: RoleSchema},
          {name: User.name, schema: UserSchema}
        ])
    ],
    controllers: [RolesController],
    providers: [RolesService],
    exports: [RolesService]
})
export class RolesModule {}
