import { Module } from '@nestjs/common';
import { AsklyBatchController } from './askly-batch.controller';
import { AsklyBatchService } from './askly-batch.service';

@Module({
  imports: [],
  controllers: [AsklyBatchController],
  providers: [AsklyBatchService],
})
export class AsklyBatchModule {}
