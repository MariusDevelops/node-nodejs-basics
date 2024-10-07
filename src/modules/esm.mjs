import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import fs from "fs";

import "./files/c.js";

const random = Math.random();

let unknownObject;

try {
    if (random > 0.5) {
        const data = fs.readFileSync("./src/modules/files/a.json", "utf8");
        unknownObject = JSON.parse(data);
    } else {
        const data = fs.readFileSync("./src/modules/files/b.json", "utf8");
        unknownObject = JSON.parse(data);
    }
} catch (error) {
    console.error("Error loading JSON file:", error);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${path.dirname(import.meta.url)}`);

const myServer = createServerHttp((_, res) => {
    res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
