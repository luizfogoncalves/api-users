import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { EnvsConfig } from "src/infra/config/envs.config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  constructor() {
    super({
      secretOrKey: EnvsConfig.getJwtSecret(),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  public async validate(payload: any) {
    return {
      id: payload.sub,
      login: payload['cognito:username'],
      name: payload.name,
      email: payload.email,
      emailVerificado: payload.email_verified,
      celular: payload.phone_number,
      celularVerificado: payload.phone_number_verified,
      tokenCriadoEm: new Date(payload.iat * 1000),
      tokenExpiraEm: new Date(payload.exp * 1000),
    }
  }
}
