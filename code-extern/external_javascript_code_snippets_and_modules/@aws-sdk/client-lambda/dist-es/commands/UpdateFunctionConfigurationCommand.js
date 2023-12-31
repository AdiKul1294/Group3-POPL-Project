import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { SMITHY_CONTEXT_KEY, } from "@smithy/types";
import { FunctionConfigurationFilterSensitiveLog, UpdateFunctionConfigurationRequestFilterSensitiveLog, } from "../models/models_0";
import { de_UpdateFunctionConfigurationCommand, se_UpdateFunctionConfigurationCommand, } from "../protocols/Aws_restJson1";
export { $Command };
export class UpdateFunctionConfigurationCommand extends $Command {
    static getEndpointParameterInstructions() {
        return {
            UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
            Endpoint: { type: "builtInParams", name: "endpoint" },
            Region: { type: "builtInParams", name: "region" },
            UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
        };
    }
    constructor(input) {
        super();
        this.input = input;
    }
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getEndpointPlugin(configuration, UpdateFunctionConfigurationCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "LambdaClient";
        const commandName = "UpdateFunctionConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: UpdateFunctionConfigurationRequestFilterSensitiveLog,
            outputFilterSensitiveLog: FunctionConfigurationFilterSensitiveLog,
            [SMITHY_CONTEXT_KEY]: {
                service: "AWSGirApiService",
                operation: "UpdateFunctionConfiguration",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_UpdateFunctionConfigurationCommand(input, context);
    }
    deserialize(output, context) {
        return de_UpdateFunctionConfigurationCommand(output, context);
    }
}
