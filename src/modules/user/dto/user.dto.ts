import { IsNotEmpty, IsString, } from "class-validator";

/**
 * Classe que representa o formulario de cadastro de usuario
 *
 * @author Luiz Fernando Oliveira
 */
export class UserDto {
    @IsString(
        { message: 'Nome Inválido' }
    )
    @IsNotEmpty({ message: 'Informe o nome' })
    nmUsuario: string;

    @IsString(
        { message: 'E-mail inválido' }
    )
    @IsNotEmpty({ message: 'Informe o e-mail' })
    dsEmail: string;

    @IsString(
        { message: 'Senha inválida' }
    )
    @IsNotEmpty({ message: 'Informe a senha' })
    dsSenha: string;

    @IsString(
        { message: 'Documento inválido' }
    )
    @IsNotEmpty({ message: 'Informe o documento' })
    nuDocumento: string;
}
