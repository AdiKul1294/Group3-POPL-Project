import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { FunctionEventInvokeConfig, GetFunctionEventInvokeConfigRequest } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFunctionEventInvokeConfigCommand}.
 */
export interface GetFunctionEventInvokeConfigCommandInput extends GetFunctionEventInvokeConfigRequest {
}
/**
 * @public
 *
 * The output of {@link GetFunctionEventInvokeConfigCommand}.
 */
export interface GetFunctionEventInvokeConfigCommandOutput extends FunctionEventInvokeConfig, __MetadataBearer {
}
/**
 * @public
 * <p>Retrieves the configuration for asynchronous invocation for a function, version, or alias.</p>
 *          <p>To configure options for asynchronous invocation, use <a>PutFunctionEventInvokeConfig</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetFunctionEventInvokeConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // GetFunctionEventInvokeConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE",
 * };
 * const command = new GetFunctionEventInvokeConfigCommand(input);
 * const response = await client.send(command);
 * // { // FunctionEventInvokeConfig
 * //   LastModified: new Date("TIMESTAMP"),
 * //   FunctionArn: "STRING_VALUE",
 * //   MaximumRetryAttempts: Number("int"),
 * //   MaximumEventAgeInSeconds: Number("int"),
 * //   DestinationConfig: { // DestinationConfig
 * //     OnSuccess: { // OnSuccess
 * //       Destination: "STRING_VALUE",
 * //     },
 * //     OnFailure: { // OnFailure
 * //       Destination: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFunctionEventInvokeConfigCommandInput - {@link GetFunctionEventInvokeConfigCommandInput}
 * @returns {@link GetFunctionEventInvokeConfigCommandOutput}
 * @see {@link GetFunctionEventInvokeConfigCommandInput} for command's `input` shape.
 * @see {@link GetFunctionEventInvokeConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 */
export declare class GetFunctionEventInvokeConfigCommand extends $Command<GetFunctionEventInvokeConfigCommandInput, GetFunctionEventInvokeConfigCommandOutput, LambdaClientResolvedConfig> {
    readonly input: GetFunctionEventInvokeConfigCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: GetFunctionEventInvokeConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFunctionEventInvokeConfigCommandInput, GetFunctionEventInvokeConfigCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
