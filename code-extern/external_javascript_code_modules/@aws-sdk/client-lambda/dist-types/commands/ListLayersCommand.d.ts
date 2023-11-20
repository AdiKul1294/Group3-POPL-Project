import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListLayersRequest, ListLayersResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLayersCommand}.
 */
export interface ListLayersCommandInput extends ListLayersRequest {
}
/**
 * @public
 *
 * The output of {@link ListLayersCommand}.
 */
export interface ListLayersCommandOutput extends ListLayersResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-layers.html">Lambda
 *         layers</a> and shows information about the latest version of each. Specify a
 *         <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime
 *         identifier</a> to list only layers that indicate that they're compatible with that
 *       runtime. Specify a compatible architecture to include only layers that are compatible with
 *       that  <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListLayersCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListLayersCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // ListLayersRequest
 *   CompatibleRuntime: "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "python3.11" || "nodejs20.x" || "provided.al2023" || "python3.12" || "java21",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   CompatibleArchitecture: "x86_64" || "arm64",
 * };
 * const command = new ListLayersCommand(input);
 * const response = await client.send(command);
 * // { // ListLayersResponse
 * //   NextMarker: "STRING_VALUE",
 * //   Layers: [ // LayersList
 * //     { // LayersListItem
 * //       LayerName: "STRING_VALUE",
 * //       LayerArn: "STRING_VALUE",
 * //       LatestMatchingVersion: { // LayerVersionsListItem
 * //         LayerVersionArn: "STRING_VALUE",
 * //         Version: Number("long"),
 * //         Description: "STRING_VALUE",
 * //         CreatedDate: "STRING_VALUE",
 * //         CompatibleRuntimes: [ // CompatibleRuntimes
 * //           "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "python3.11" || "nodejs20.x" || "provided.al2023" || "python3.12" || "java21",
 * //         ],
 * //         LicenseInfo: "STRING_VALUE",
 * //         CompatibleArchitectures: [ // CompatibleArchitectures
 * //           "x86_64" || "arm64",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListLayersCommandInput - {@link ListLayersCommandInput}
 * @returns {@link ListLayersCommandOutput}
 * @see {@link ListLayersCommandInput} for command's `input` shape.
 * @see {@link ListLayersCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
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
export declare class ListLayersCommand extends $Command<ListLayersCommandInput, ListLayersCommandOutput, LambdaClientResolvedConfig> {
    readonly input: ListLayersCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: ListLayersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLayersCommandInput, ListLayersCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
