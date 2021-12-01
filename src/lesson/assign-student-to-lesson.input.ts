import { InputType, Field, ID } from '@nestjs/graphql';
import { MinLength, IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsToLessonInput {
  @MinLength(1)
  @IsUUID()
  @Field((type) => ID)
  lessonId: string;

  @IsUUID('4', { each: true })
  @Field((type) => [ID])
  studentIds: string[];
}
