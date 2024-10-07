import { createWriteStream } from "node:fs";

const write = async () => {
    const stream = createWriteStream("src/streams/files/fileToWrite.txt");

    process.stdin.pipe(stream);

    stream.on("finish", () => {
        console.log("Text written successfully!");
    });
};

await write();
