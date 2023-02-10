// Copyright (C) 2021 Surf Telecom - Todos os direitos reservados

import { Module } from "@nestjs/common";
import { Global } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./jwt/jwt.strategy";

/**
 * Modulo responsavel pelo mecanismo de autorizacao
 * 
 * @author Nuage IT
 */
@Global() 
@Module({
    imports: [PassportModule.register({ defaultStrategy: 'jwt' })],
    providers: [JwtStrategy],
})
export class AuthModule{}