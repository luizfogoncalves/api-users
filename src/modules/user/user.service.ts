import {
    Injectable, Logger, Inject
} from '@nestjs/common';
import { generateHash } from 'src/util/generate.hash';
import { Repository } from 'typeorm';
import { User } from '../db/entities/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    /**
     * Logger
     */
    private readonly logger = new Logger(UserService.name);

    /**
     * Constructor
     */
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) { }


    /**
     * Lista usuarios
     *
     */
    async listUsers(): Promise<User[]> {
        try {
            this.logger.log('Iniciando a listagem de usuários.');

            const users = await this.userRepository.find();

            return users
        } catch (error) {
            this.logger.error(
                'Ocorreu um erro ao listar os usuários.' + error.stack,
            );
            throw error;
        }
    }

    /**
     * Cria usuario
     *
     */
    async createUser(dto: UserDto): Promise<any> {
        try {
            this.logger.log('Iniciando a criação do usuário -> ', dto.dsEmail);

            const hash = await generateHash(dto.dsSenha);

            const user = await this.userRepository.insert({
                dsEmail: dto.dsEmail,
                dsSenha: hash,
                nmUsuario: dto.nmUsuario,
                nuDocumento: dto.nuDocumento
            });

            return
        } catch (error) {
            this.logger.error(
                'Ocorreu um erro ao listar os usuários.' + error.stack,
            );
            throw error;
        }
    }
}
