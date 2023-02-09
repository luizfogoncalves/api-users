import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UserRepository {
    /**
     * Logger
     */
     private readonly logger = new Logger(UserRepository.name);
    
}
