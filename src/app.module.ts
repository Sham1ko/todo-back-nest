import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [ 
    MongooseModule.forRoot("mongodb://localhost:27017/todos"),
    TodoModule ],
})
export class AppModule {}
