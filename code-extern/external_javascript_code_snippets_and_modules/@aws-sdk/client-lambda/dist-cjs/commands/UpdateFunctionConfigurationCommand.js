"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFunctionConfigurationCommand = exports.$Command = void 0;
const middleware_endpoint_1 = require("@smithy/middleware-endpoint");
const middleware_serde_1 = require("@smithy/middleware-serde");
const smithy_client_1 = require("@smithy/smithy-client");
Object.defineProperty(exports, "$Command", { enumerable: true, get: function () { return smithy_client_1.Command; } });
const types_1 = require("@smithy/types");
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
class UpdateFunctionConfigurationCommand extends smithy_client_1.Command {
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
        this.middlewareStack.use((0, middleware_serde_1.getSerdePlugin)(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use((0, middleware_endpoint_1.getEndpointPlugin)(configuration, UpdateFunctionConfigurationCommand.getEndpointParameterInstructions()));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "LambdaClient";
        const commandName = "UpdateFunctionConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateFunctionConfigurationRequestFilterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.FunctionConfigurationFilterSensitiveLog,
            [types_1.SMITHY_CONTEXT_KEY]: {
                service: "AWSGirApiService",
                operation: "UpdateFunctionConfiguration",
            },
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return (0, Aws_restJson1_1.se_UpdateFunctionConfigurationCommand)(input, context);
    }
    deserialize(output, context) {
        return (0, Aws_restJson1_1.de_UpdateFunctionConfigurationCommand)(output, context);
    }
}
exports.UpdateFunctionConfigurationCommand = UpdateFunctionConfigurationCommand;
