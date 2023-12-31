import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { SMITHY_CONTEXT_KEY, } from "@smithy/types";
import { InvokeWithResponseStreamRequestFilterSensitiveLog, InvokeWithResponseStreamResponseFilterSensitiveLog, } from "../models/models_0";
import { de_InvokeWithResponseStreamCommand, se_InvokeWithResponseStreamCommand } from "../protocols/Aws_restJson1";
export { $Command };
export class InvokeWithResponseStreamCommand extends $Command {
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
        this.middlewareStack.use(getEndpointPlugin(configuration, InvokeWithResponseStreamCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "LambdaClient";
        const commandName = "InvokeWithResponseStreamCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: InvokeWithResponseStreamRequestFilterSensitiveLog,
            outputFilterSensitiveLog: InvokeWithResponseStreamResponseFilterSensitiveLog,
            [SMITHY_CONTEXT_KEY]: {
                service: "AWSGirApiService",
                operation: "InvokeWithResponseStream",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return se_InvokeWithResponseStreamCommand(input, context);
    }
    deserialize(output, context) {
        return de_InvokeWithResponseStreamCommand(output, context);
    }
}
