import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get('/:taskId')
  getTaskById(@Param('taskId') taskId: string): Task {
    return this.taskService.getTask(taskId);
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Task {
    return this.taskService.createTask(createTaskDto);
  }

  @Patch('/:taskId/status')
  updateStatus(
    @Param('taskId') taskId: string,
    @Body('status') status: TaskStatus,
  ): Task {
    return this.taskService.updateTaskStatus(taskId, status);
  }

  @Delete('/:taskId')
  delete(@Param('taskId') taskId: string): void {
    return this.taskService.deleteTask(taskId);
  }
}
