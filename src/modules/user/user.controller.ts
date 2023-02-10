import { Controller, Get } from "@nestjs/common";
import { Body, Post, UseGuards } from "@nestjs/common/decorators";
import { HttpResponse } from "src/infra/http/http.response";
import { JwtAuthGuard } from "../auth/jwt/jwt-auth.guard";
import { UserDto } from "./dto/user.dto";
import { UserService } from "./user.service";

/**
 * Classe de controller da API de Cache
 *
 * @author Luiz Fernando Gonçalves
 */
@Controller('v1/user')
export class UserController {
    /**
     * Construtor
     * @param userService UserService
     */
    constructor(private userService: UserService) { }

    @Get('/')
    @UseGuards(JwtAuthGuard)
    async getUser() {
        const retorno = await this.userService.listUsers();
        return HttpResponse.sucesso('Operacao realizada com sucesso', retorno);
    }

    @Post('/')
    async createUser(@Body() dto: UserDto) {
        const retorno = await this.userService.createUser(dto);
        return HttpResponse.sucesso('Operacao realizada com sucesso', retorno);
    }
}
