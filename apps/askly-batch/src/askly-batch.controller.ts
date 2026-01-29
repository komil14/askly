import { Controller, Get } from '@nestjs/common';
import { AsklyBatchService } from './askly-batch.service';

@Controller()
export class AsklyBatchController {
  constructor(private readonly asklyBatchService: AsklyBatchService) {}

  @Get()
  getHello(): string {
    return this.asklyBatchService.getHello();
  }
}
