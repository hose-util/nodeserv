var server = require("./server/server");
var router = require("./server/router");
var requestHandlers = require("./server/request_handlers/request_handlers.js");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
