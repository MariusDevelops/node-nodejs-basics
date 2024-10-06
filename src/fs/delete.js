import { access, unlink } from "node:fs/promises";

const remove = async () => {
    const pathToRemoveFile = "src/fs/files/fileToRemove.txt";
    const errorMessage = "FS operation failed";

    try {
        await access(pathToRemoveFile);
    } catch (error) {
        throw new Error(errorMessage);
    }

    await unlink(pathToRemoveFile);
};

await remove();
