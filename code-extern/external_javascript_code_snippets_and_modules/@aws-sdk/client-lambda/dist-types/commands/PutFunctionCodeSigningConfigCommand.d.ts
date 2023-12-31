import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { PutFunctionCodeSigningConfigRequest, PutFunctionCodeSigningConfigResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutFunctionCodeSigningConfigCommand}.
 */
export interface PutFunctionCodeSigningConfigCommandInput extends PutFunctionCodeSigningConfigRequest {
}
/**
 * @public
 *
 * The output of {@link PutFunctionCodeSigningConfigCommand}.
 */
export interface PutFunctionCodeSigningConfigCommandOutput extends PutFunctionCodeSigningConfigResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Update the code signing configuration for the function. Changes to the code signing configuration take effect the
 *       next time a user tries to deploy a code package to the function. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PutFunctionCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PutFunctionCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // PutFunctionCodeSigningConfigRequest
 *   CodeSigningConfigArn: "STRING_VALUE", // required
 *   FunctionName: "STRING_VALUE", // required
 * };
 * const command = new PutFunctionCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * // { // PutFunctionCodeSigningConfigResponse
 * //   CodeSigningConfigArn: "STRING_VALUE", // required
 * //   FunctionName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PutFunctionCodeSigningConfigCommandInput - {@link PutFunctionCodeSigningConfigCommandInput}
 * @returns {@link PutFunctionCodeSigningConfigCommandOutput}
 * @see {@link PutFunctionCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link PutFunctionCodeSigningConfigCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link CodeSigningConfigNotFoundException} (client fault)
 *  <p>The specified code signing configuration does not exist.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
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
export declare class PutFunctionCodeSigningConfigCommand extends $Command<PutFunctionCodeSigningConfigCommandInput, PutFunctionCodeSigningConfigCommandOutput, LambdaClientResolvedConfig> {
    readonly input: PutFunctionCodeSigningConfigCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: PutFunctionCodeSigningConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutFunctionCodeSigningConfigCommandInput, PutFunctionCodeSigningConfigCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
