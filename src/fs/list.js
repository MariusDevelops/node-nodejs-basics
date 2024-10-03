import * as fs from "node:fs/promises";

const list = async () => {
    const pathToFilesFolder = "src/fs/files/";
    const errorMessage = "FS operation failed";

    try {
        await fs.access(pathToFilesFolder);
    } catch (error) {
        throw new Error(errorMessage);
    }

    const files = await fs.readdir(pathToFilesFolder);

    files.forEach((file) => {
        console.log(file);
    });
};

await list();
