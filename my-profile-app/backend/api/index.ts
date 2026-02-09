import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { VercelRequest, VercelResponse } from '@vercel/node';

let app: any;

async function bootstrap() {
  if (!app) {
    app = await NestFactory.create(AppModule);
    await app.init();
  }
  return app;
}

export default async (req: VercelRequest, res: VercelResponse) => {
  const nestApp = await bootstrap();
  const server = nestApp.getHttpServer();
  return server(req, res);
};
