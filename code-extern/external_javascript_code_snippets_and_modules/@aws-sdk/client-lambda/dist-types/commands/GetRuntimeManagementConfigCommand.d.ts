import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetRuntimeManagementConfigRequest, GetRuntimeManagementConfigResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRuntimeManagementConfigCommand}.
 */
export interface GetRuntimeManagementConfigCommandInput extends GetRuntimeManagementConfigRequest {
}
/**
 * @public
 *
 * The output of {@link GetRuntimeManagementConfigCommand}.
 */
export interface GetRuntimeManagementConfigCommandOutput extends GetRuntimeManagementConfigResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Retrieves the runtime management configuration for a function's version. If the runtime update mode is <b>Manual</b>, this includes the ARN of the
 *       runtime version and the runtime update mode. If the runtime update mode is <b>Auto</b> or <b>Function update</b>,
 *       this includes the runtime update mode and <code>null</code> is returned for the ARN. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html">Runtime updates</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetRuntimeManagementConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetRuntimeManagementConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // GetRuntimeManagementConfigRequest
 *   FunctionName: "STRING_VALUE", // required
 *   Qualifier: "STRING_VALUE",
 * };
 * const command = new GetRuntimeManagementConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetRuntimeManagementConfigResponse
 * //   UpdateRuntimeOn: "Auto" || "Manual" || "FunctionUpdate",
 * //   RuntimeVersionArn: "STRING_VALUE",
 * //   FunctionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetRuntimeManagementConfigCommandInput - {@link GetRuntimeManagementConfigCommandInput}
 * @returns {@link GetRuntimeManagementConfigCommandOutput}
 * @see {@link GetRuntimeManagementConfigCommandInput} for command's `input` shape.
 * @see {@link GetRuntimeManagementConfigCommandOutput} for command's `response` shape.
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
export declare class GetRuntimeManagementConfigCommand extends $Command<GetRuntimeManagementConfigCommandInput, GetRuntimeManagementConfigCommandOutput, LambdaClientResolvedConfig> {
    readonly input: GetRuntimeManagementConfigCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: GetRuntimeManagementConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRuntimeManagementConfigCommandInput, GetRuntimeManagementConfigCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
