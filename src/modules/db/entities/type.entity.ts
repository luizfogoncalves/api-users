import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * Classe que representa a tabela TB_TIPO
 *
 * @author Luiz Fernando Oliveira
 */
@Entity({name: 'tb_tipo'})
export class Type{

    @PrimaryGeneratedColumn({ name: 'co_tipo'})
    coTipo: number;

    @Column({ name: "no_tipo", nullable: false })
    noTipoTelefone: string;
}
