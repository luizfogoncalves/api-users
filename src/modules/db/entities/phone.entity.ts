import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { ManyToOne } from "typeorm/decorator/relations/ManyToOne";
import { Type } from "./type.entity";
import { User } from "./user.entity";

/**
 * Classe que representa a tabela TB_TELEFONE
 *
 * @author Luiz Fernando Oliveira
 */
@Entity({name: 'tb_telefone'})
export class Phone{

    @PrimaryGeneratedColumn({ name: 'co_telefone'})
    coTelefone: number;

    @Column({ name: "nu_telefone", nullable: false })
    nuTelefone: number;

    @OneToOne(() => Type)
    @JoinColumn({ name: "co_tipo" })
    type: Type

    @ManyToOne(type => User, user => user.coUsuario)
    @JoinColumn({ name: "co_usuario" })
    user: User;
}
