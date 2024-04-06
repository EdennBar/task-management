import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 31592,
      username: 'postgres',
      password: 'examplepassword',
      database: 'task-management',
      autoLoadEntities: true,
      entities: ['*.entity.ts'], // Add the entity to the entities array
      synchronize: true,
    }),
  ],
})
export class AppModule {}
