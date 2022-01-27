import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './schemas/todo';
import { todoController } from './todo.controller';
import { todoService } from './todo.service';

@Module({
  imports: [
    MongooseModule.forFeature(
        [{name: Todo.name, schema: TodoSchema}]
        )
    ],
  controllers: [ todoController ],
  providers: [ todoService ],
})
export class TodoModule {}