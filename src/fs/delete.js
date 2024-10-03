import * as fs from "node:fs/promises";

const remove = async () => {
    const pathToRemoveFile = "src/fs/files/fileToRemove.txt";
    const errorMessage = "FS operation failed";

    try {
        await fs.access(pathToRemoveFile);
    } catch (error) {
        throw new Error(errorMessage);
    }

    await fs.unlink(pathToRemoveFile);
};

await remove();
