import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { todoDTO } from './dto/TodoDTO';
import { Todo, TodoDocument } from './schemas/todo';


@Injectable()
export class todoService{
    constructor(@InjectModel(Todo.name) private TodoRepository: Model<TodoDocument>){}

    async getTodos() {
        try {
            return await this.TodoRepository.find().exec()
        } catch (error) {
            console.log(error)
        }
    }

    async createTodo(dto: todoDTO) {
        try {
            return await this.TodoRepository.create(dto)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteTodo(id) {
        try {
            return await this.TodoRepository.deleteOne({"_id": id})
        } catch (error) {
            
        }
    }

}