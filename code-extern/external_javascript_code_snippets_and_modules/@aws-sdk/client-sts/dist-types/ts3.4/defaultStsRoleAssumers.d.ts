import { Credentials } from "@aws-sdk/types";
import { Provider } from "@smithy/types";
import { AssumeRoleCommandInput } from "./commands/AssumeRoleCommand";
import { AssumeRoleWithWebIdentityCommandInput } from "./commands/AssumeRoleWithWebIdentityCommand";
import { STSClient, STSClientConfig } from "./STSClient";
export type RoleAssumer = (
  sourceCreds: Credentials,
  params: AssumeRoleCommandInput
) => Promise<Credentials>;
export declare const getDefaultRoleAssumer: (
  stsOptions: Pick<STSClientConfig, "logger" | "region" | "requestHandler">,
  stsClientCtor: new (options: STSClientConfig) => STSClient
) => RoleAssumer;
export type RoleAssumerWithWebIdentity = (
  params: AssumeRoleWithWebIdentityCommandInput
) => Promise<Credentials>;
export declare const getDefaultRoleAssumerWithWebIdentity: (
  stsOptions: Pick<STSClientConfig, "logger" | "region" | "requestHandler">,
  stsClientCtor: new (options: STSClientConfig) => STSClient
) => RoleAssumerWithWebIdentity;
export type DefaultCredentialProvider = (input: any) => Provider<Credentials>;
export declare const decorateDefaultCredentialProvider: (
  provider: DefaultCredentialProvider
) => DefaultCredentialProvider;
