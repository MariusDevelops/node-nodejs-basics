import { access, readFile } from "node:fs/promises";

const read = async () => {
    const pathToFile = "src/fs/files/fileToRead.txt";
    const errorMessage = "FS operation failed";

    try {
        await access(pathToFile);
    } catch (error) {
        throw new Error(errorMessage);
    }

    const contents = await readFile(pathToFile, { encoding: "utf8" });
    console.log(contents);
};

await read();
