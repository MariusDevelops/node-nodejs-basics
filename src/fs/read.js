import * as fs from "node:fs/promises";

const read = async () => {
    const pathToFile = "src/fs/files/fileToRead.txt";
    const errorMessage = "FS operation failed";

    try {
        await fs.access(pathToFile);
    } catch (error) {
        throw new Error(errorMessage);
    }

    const contents = await fs.readFile(pathToFile, { encoding: "utf8" });
    console.log(contents);
};

await read();
