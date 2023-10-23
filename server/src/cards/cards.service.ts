import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cards } from './cards.entity';

@Injectable()
export class CardsService {
  constructor(
    @InjectRepository(Cards)
    private cardRepository: Repository<Cards>,
  ) {}

  async getAllCards(): Promise<Cards[]> {
    return this.cardRepository.find();
  }
}