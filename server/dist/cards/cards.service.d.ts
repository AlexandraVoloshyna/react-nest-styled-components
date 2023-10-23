import { Repository } from 'typeorm';
import { Cards } from './cards.entity';
export declare class CardsService {
    private cardRepository;
    constructor(cardRepository: Repository<Cards>);
    getAllCards(): Promise<Cards[]>;
}
