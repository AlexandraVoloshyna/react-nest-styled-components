import { Controller, Get } from '@nestjs/common';
import { CardsService } from './cards.service'; 

@Controller('cards') 
export class CardsController {
  constructor(private readonly cardsService: CardsService) {} 

  @Get() 
  async getCards() {
    const cards = await this.cardsService.getAllCards(); 
    return cards
      
    
  }
}