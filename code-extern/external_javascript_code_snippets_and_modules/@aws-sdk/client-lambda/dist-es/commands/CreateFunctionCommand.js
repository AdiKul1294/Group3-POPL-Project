import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { SMITHY_CONTEXT_KEY, } from "@smithy/types";
import { CreateFunctionRequestFilterSensitiveLog, FunctionConfigurationFilterSensitiveLog, } from "../models/models_0";
import { de_CreateFunctionCommand, se_CreateFunctionCommand } from "../protocols/Aws_restJson1";
export { $Command };
export class CreateFunctionCommand extends $Command {
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
        this.middlewareStack.use(getEndpointPlugin(configuration, CreateFunctionCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "LambdaClient";
        const commandName = "CreateFunctionCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: CreateFunctionRequestFilterSensitiveLog,
            outputFilterSensitiveLog: FunctionConfigurationFilterSensitiveLog,
            [SMITHY_CONTEXT_KEY]: {
                service: "AWSGirApiService",
                operation: "CreateFunction",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_CreateFunctionCommand(input, context);
    }
    deserialize(output, context) {
        return de_CreateFunctionCommand(output, context);
    }
}
