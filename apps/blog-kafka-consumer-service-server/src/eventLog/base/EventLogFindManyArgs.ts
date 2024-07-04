/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventLogWhereInput } from "./EventLogWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EventLogOrderByInput } from "./EventLogOrderByInput";

@ArgsType()
class EventLogFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EventLogWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EventLogWhereInput, { nullable: true })
  @Type(() => EventLogWhereInput)
  where?: EventLogWhereInput;

  @ApiProperty({
    required: false,
    type: [EventLogOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EventLogOrderByInput], { nullable: true })
  @Type(() => EventLogOrderByInput)
  orderBy?: Array<EventLogOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EventLogFindManyArgs as EventLogFindManyArgs };
