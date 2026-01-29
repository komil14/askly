import { Test, TestingModule } from '@nestjs/testing';
import { AsklyBatchController } from './askly-batch.controller';
import { AsklyBatchService } from './askly-batch.service';

describe('AsklyBatchController', () => {
  let asklyBatchController: AsklyBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AsklyBatchController],
      providers: [AsklyBatchService],
    }).compile();

    asklyBatchController = app.get<AsklyBatchController>(AsklyBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(asklyBatchController.getHello()).toBe('Hello World!');
    });
  });
});
