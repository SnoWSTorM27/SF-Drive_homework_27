import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath:'.env'
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..','..', 'dist'),
        }),
        MongooseModule.forRoot("mongodb+srv://SnoWSTorM:395593263Z@app.qmqpf.mongodb.net/DataUsers?retryWrites=true&w=majority"),
        UsersModule,
        RolesModule,
        AuthModule,],
    controllers: [],
    providers: []
})
export class AppModule{}