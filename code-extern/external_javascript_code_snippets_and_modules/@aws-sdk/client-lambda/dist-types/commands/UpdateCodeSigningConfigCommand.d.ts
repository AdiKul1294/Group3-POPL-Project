import { EndpointParameterInstructions } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@smithy/types";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { UpdateCodeSigningConfigRequest, UpdateCodeSigningConfigResponse } from "../models/models_0";
/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateCodeSigningConfigCommand}.
 */
export interface UpdateCodeSigningConfigCommandInput extends UpdateCodeSigningConfigRequest {
}
/**
 * @public
 *
 * The output of {@link UpdateCodeSigningConfigCommand}.
 */
export interface UpdateCodeSigningConfigCommandOutput extends UpdateCodeSigningConfigResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Update the code signing configuration. Changes to the code signing configuration take effect the next time a
 *       user tries to deploy a code package to the function. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateCodeSigningConfigCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateCodeSigningConfigCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // UpdateCodeSigningConfigRequest
 *   CodeSigningConfigArn: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   AllowedPublishers: { // AllowedPublishers
 *     SigningProfileVersionArns: [ // SigningProfileVersionArns // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   CodeSigningPolicies: { // CodeSigningPolicies
 *     UntrustedArtifactOnDeployment: "Warn" || "Enforce",
 *   },
 * };
 * const command = new UpdateCodeSigningConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCodeSigningConfigResponse
 * //   CodeSigningConfig: { // CodeSigningConfig
 * //     CodeSigningConfigId: "STRING_VALUE", // required
 * //     CodeSigningConfigArn: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     AllowedPublishers: { // AllowedPublishers
 * //       SigningProfileVersionArns: [ // SigningProfileVersionArns // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CodeSigningPolicies: { // CodeSigningPolicies
 * //       UntrustedArtifactOnDeployment: "Warn" || "Enforce",
 * //     },
 * //     LastModified: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCodeSigningConfigCommandInput - {@link UpdateCodeSigningConfigCommandInput}
 * @returns {@link UpdateCodeSigningConfigCommandOutput}
 * @see {@link UpdateCodeSigningConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateCodeSigningConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 */
export declare class UpdateCodeSigningConfigCommand extends $Command<UpdateCodeSigningConfigCommandInput, UpdateCodeSigningConfigCommandOutput, LambdaClientResolvedConfig> {
    readonly input: UpdateCodeSigningConfigCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: UpdateCodeSigningConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LambdaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCodeSigningConfigCommandInput, UpdateCodeSigningConfigCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
