import { INEGIMentalHealthImpRepository } from './data/inegi-mental-health/repositories/inegi-mental-health.imp-repository';
import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  PrismaClient,
  RegisteredSuicides,
  EntitiesViolentDeaths,
} from '@prisma/client';

@Injectable()
export class AppService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  constructor(private readonly repository: INEGIMentalHealthImpRepository) {
    super();
  }

  async getViolentSuicides(): Promise<any> {
    const data = await this.repository.getViolentSuicides();
    return data;
  }

  async getSuicidesRegistered(): Promise<RegisteredSuicides[]> {
    return this.registeredSuicides.findMany();
  }

  async getEntitiesViolentDeaths(): Promise<EntitiesViolentDeaths[]> {
    return this.entitiesViolentDeaths.findMany();
  }
}
