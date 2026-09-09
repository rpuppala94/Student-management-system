import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { AppResolver } from './app.resolver.js';
import { StudentsModule } from './students/students.module.js';
import { StudentsModule } from './students/students.module.js';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:schoolpassword@localhost:27017/school_management?authSource=admin',
    ),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      graphiql: true,
    }),

    StudentsModule,
  ],
  providers: [AppResolver],
})
export class AppModule { }