import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { VerificationTokenResolverBase } from "./base/verificationToken.resolver.base";
import { VerificationToken } from "./base/VerificationToken";
import { VerificationTokenService } from "./verificationToken.service";

@graphql.Resolver(() => VerificationToken)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class VerificationTokenResolver extends VerificationTokenResolverBase {
  constructor(
    protected readonly service: VerificationTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
