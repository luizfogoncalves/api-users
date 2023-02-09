import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ManyToOne } from "typeorm/decorator/relations/ManyToOne";
import { Type } from "./type.entity";
import { User } from "./user.entity";

/**
 * Classe que representa a tabela TB_ENDERECO
 *
 * @author Luiz Fernando Oliveira
 */
@Entity({name: 'tb_endereco'})
export class Address{

    @PrimaryGeneratedColumn({ name: 'co_endereco'})
    coEndereco: number;

    @Column({ name: "ds_endereco", nullable: false })
    dsEndereco: string;

    @Column({ name: "no_bairro", nullable: false })
    noBairro: string;

    @Column({ name: "no_uf", nullable: false })
    noUf: string;

    @Column({ name: "ds_complemento" })
    dsComplemento: string;

    @Column({ name: "nu_cep", nullable: false })
    nuCep: string;

    @Column({ name: "no_cidade", nullable: false })
    noCidade: string;

    @Column({ name: "ds_numero", nullable: false })
    noNumero: string;

    @OneToOne(() => Type)
    @JoinColumn({ name: "co_tipo" })
    type: Type

    @ManyToOne(type => User, user => user.coUsuario)
    @JoinColumn({ name: "co_usuario" })
    user: User;
}