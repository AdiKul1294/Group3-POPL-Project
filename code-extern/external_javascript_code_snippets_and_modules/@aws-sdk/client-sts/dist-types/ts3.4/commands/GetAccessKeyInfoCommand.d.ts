import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import {
  Handler,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@smithy/types";
import {
  GetAccessKeyInfoRequest,
  GetAccessKeyInfoResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  STSClientResolvedConfig,
} from "../STSClient";
export { __MetadataBearer, $Command };
export interface GetAccessKeyInfoCommandInput extends GetAccessKeyInfoRequest {}
export interface GetAccessKeyInfoCommandOutput
  extends GetAccessKeyInfoResponse,
    __MetadataBearer {}
export declare class GetAccessKeyInfoCommand extends $Command<
  GetAccessKeyInfoCommandInput,
  GetAccessKeyInfoCommandOutput,
  STSClientResolvedConfig
> {
  readonly input: GetAccessKeyInfoCommandInput;
  static getEndpointParameterInstructions(): EndpointParameterInstructions;
  constructor(input: GetAccessKeyInfoCommandInput);
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: STSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAccessKeyInfoCommandInput, GetAccessKeyInfoCommandOutput>;
  private serialize;
  private deserialize;
}
