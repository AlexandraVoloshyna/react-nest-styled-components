import { CardsService } from './cards.service';
export declare class CardsController {
    private readonly cardsService;
    constructor(cardsService: CardsService);
    getCards(): Promise<import("./cards.entity").Cards[]>;
}