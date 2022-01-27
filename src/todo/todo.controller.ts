import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { todoDTO } from './dto/TodoDTO';
import { todoService } from './todo.service';

@Controller('/todos')
export class todoController {
    constructor(private todoService: todoService) {}

    @Get()
    getTodos() {
        return this.todoService.getTodos()
    }

    @Post()
    createTodo(@Body() todoDto: todoDTO) {
        return this.todoService.createTodo(todoDto)
    }

    @Delete('/:id')
    deleteTodo(@Param('id') id) {
        return this.todoService.deleteTodo(id)
    }

}