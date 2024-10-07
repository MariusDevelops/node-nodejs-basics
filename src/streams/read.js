import { createReadStream } from "node:fs";

const read = async () => {
    const stream = createReadStream("src/streams/files/fileToRead.txt");

    stream.on("data", (chunk) => {
        process.stdout.write(chunk + "\n");
    });
};

await read();
