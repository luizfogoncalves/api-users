// Copyright (C) 2021 Surf Telecom - Todos os direitos reservados

import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { UnauthorizedException } from "./../../../infra/exceptions/unauthorized.exception";

export class JwtAuthGuard extends AuthGuard('jwt') {
    constructor(private readonly reflector: Reflector) {
      super();
    }

    handleRequest(err, user, info, context) {
      if (err || !user) {
        throw err || new UnauthorizedException("Token inválido");
      }
      return user;
    }
  }
