import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetLayerVersionRequest, GetLayerVersionResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetLayerVersionCommand}.
 */
export interface GetLayerVersionCommandInput extends GetLayerVersionRequest {
}
/**
 * @public
 *
 * The output of {@link GetLayerVersionCommand}.
 */
export interface GetLayerVersionCommandOutput extends GetLayerVersionResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>, with a link to download the layer archive
 *         that's valid for 10 minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetLayerVersionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetLayerVersionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // GetLayerVersionRequest
 *   LayerName: "STRING_VALUE", // required
 *   VersionNumber: Number("long"), // required
 * };
 * const command = new GetLayerVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetLayerVersionResponse
 * //   Content: { // LayerVersionContentOutput
 * //     Location: "STRING_VALUE",
 * //     CodeSha256: "STRING_VALUE",
 * //     CodeSize: Number("long"),
 * //     SigningProfileVersionArn: "STRING_VALUE",
 * //     SigningJobArn: "STRING_VALUE",
 * //   },
 * //   LayerArn: "STRING_VALUE",
 * //   LayerVersionArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CreatedDate: "STRING_VALUE",
 * //   Version: Number("long"),
 * //   CompatibleRuntimes: [ // CompatibleRuntimes
 * //     "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "python3.11" || "nodejs20.x" || "provided.al2023" || "python3.12" || "java21",
 * //   ],
 * //   LicenseInfo: "STRING_VALUE",
 * //   CompatibleArchitectures: [ // CompatibleArchitectures
 * //     "x86_64" || "arm64",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetLayerVersionCommandInput - {@link GetLayerVersionCommandInput}
 * @returns {@link GetLayerVersionCommandOutput}
 * @see {@link GetLayerVersionCommandInput} for command's `input` shape.
 * @see {@link GetLayerVersionCommandOutput} for command's `response` shape.
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
export declare class GetLayerVersionCommand extends $Command<GetLayerVersionCommandInput, GetLayerVersionCommandOutput, LambdaClientResolvedConfig> {
    readonly input: GetLayerVersionCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: GetLayerVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLayerVersionCommandInput, GetLayerVersionCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
