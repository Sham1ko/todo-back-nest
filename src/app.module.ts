import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [ 
    MongooseModule.forRoot("mongodb+srv://sham1ko:<password>@cluster0.69enc.mongodb.net/todos?retryWrites=true&w=majority"),
    TodoModule ],
})
export class AppModule {}
