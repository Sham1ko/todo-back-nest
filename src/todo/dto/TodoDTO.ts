import { ApiProperty } from '@nestjs/swagger';

export class todoDTO{
    @ApiProperty()
    readonly title: string;

    @ApiProperty()
    readonly description: string;
}
