import { NestFactory } from '@nestjs/core';
import { AsklyBatchModule } from './askly-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(AsklyBatchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
