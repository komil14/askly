import { Injectable } from '@nestjs/common';

@Injectable()
export class AsklyBatchService {
  getHello(): string {
    return 'Welcome to Askly Batch server!';
  }
}
