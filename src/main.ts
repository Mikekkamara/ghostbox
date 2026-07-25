import readline from "node:readline";
import http from "http";
import Gun from "gun";


const webServer = http.createServer().listen(8765);

Gun({ web: webServer, radisk: true });