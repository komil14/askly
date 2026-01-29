import { Module } from '@nestjs/common';
import { AsklyBatchController } from './askly-batch.controller';
import { AsklyBatchService } from './askly-batch.service';
import {ConfigModule} from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AsklyBatchController],
  providers: [AsklyBatchService],
})
export class AsklyBatchModule {}
