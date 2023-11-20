import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListLayerVersionsRequest, ListLayerVersionsResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLayerVersionsCommand}.
 */
export interface ListLayerVersionsCommandInput extends ListLayerVersionsRequest {
}
/**
 * @public
 *
 * The output of {@link ListLayerVersionsCommand}.
 */
export interface ListLayerVersionsCommandOutput extends ListLayerVersionsResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only
 *       versions that indicate that they're compatible with that runtime. Specify a compatible architecture to include only
 *       layer versions that are compatible with that architecture.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListLayerVersionsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListLayerVersionsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // ListLayerVersionsRequest
 *   CompatibleRuntime: "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "python3.11" || "nodejs20.x" || "provided.al2023" || "python3.12" || "java21",
 *   LayerName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   CompatibleArchitecture: "x86_64" || "arm64",
 * };
 * const command = new ListLayerVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListLayerVersionsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   LayerVersions: [ // LayerVersionsList
 * //     { // LayerVersionsListItem
 * //       LayerVersionArn: "STRING_VALUE",
 * //       Version: Number("long"),
 * //       Description: "STRING_VALUE",
 * //       CreatedDate: "STRING_VALUE",
 * //       CompatibleRuntimes: [ // CompatibleRuntimes
 * //         "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "python3.11" || "nodejs20.x" || "provided.al2023" || "python3.12" || "java21",
 * //       ],
 * //       LicenseInfo: "STRING_VALUE",
 * //       CompatibleArchitectures: [ // CompatibleArchitectures
 * //         "x86_64" || "arm64",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListLayerVersionsCommandInput - {@link ListLayerVersionsCommandInput}
 * @returns {@link ListLayerVersionsCommandOutput}
 * @see {@link ListLayerVersionsCommandInput} for command's `input` shape.
 * @see {@link ListLayerVersionsCommandOutput} for command's `response` shape.
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
export declare class ListLayerVersionsCommand extends $Command<ListLayerVersionsCommandInput, ListLayerVersionsCommandOutput, LambdaClientResolvedConfig> {
    readonly input: ListLayerVersionsCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: ListLayerVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLayerVersionsCommandInput, ListLayerVersionsCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
