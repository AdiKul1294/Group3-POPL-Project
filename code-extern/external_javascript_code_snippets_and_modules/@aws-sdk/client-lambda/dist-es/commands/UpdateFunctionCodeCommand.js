import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { SMITHY_CONTEXT_KEY, } from "@smithy/types";
import { FunctionConfigurationFilterSensitiveLog, UpdateFunctionCodeRequestFilterSensitiveLog, } from "../models/models_0";
import { de_UpdateFunctionCodeCommand, se_UpdateFunctionCodeCommand } from "../protocols/Aws_restJson1";
export { $Command };
export class UpdateFunctionCodeCommand extends $Command {
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
        this.middlewareStack.use(getEndpointPlugin(configuration, UpdateFunctionCodeCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "LambdaClient";
        const commandName = "UpdateFunctionCodeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: UpdateFunctionCodeRequestFilterSensitiveLog,
            outputFilterSensitiveLog: FunctionConfigurationFilterSensitiveLog,
            [SMITHY_CONTEXT_KEY]: {
                service: "AWSGirApiService",
                operation: "UpdateFunctionCode",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_UpdateFunctionCodeCommand(input, context);
    }
    deserialize(output, context) {
        return de_UpdateFunctionCodeCommand(output, context);
    }
}
