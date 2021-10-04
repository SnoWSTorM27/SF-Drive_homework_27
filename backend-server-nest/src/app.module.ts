import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath:'.env'
        }),
        MongooseModule.forRoot("mongodb+srv://SnoWSTorM:395593263Z@app.qmqpf.mongodb.net/DataUsers?retryWrites=true&w=majority"),
        UsersModule,
        RolesModule,
        AuthModule,],
    controllers: [],
    providers: []
})
export class AppModule{}