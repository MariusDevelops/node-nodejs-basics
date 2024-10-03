import * as fs from "node:fs/promises";

const rename = async () => {
    const renamePathFrom = "src/fs/files/wrongFilename.txt";
    const renamePathTo = "src/fs/files/properFilename.md";
    const errorMessage = "FS operation failed";

    try {
        await fs.access(renamePathFrom);
        try {
            await fs.access(renamePathTo);
            throw new Error(errorMessage);
        } catch (error) {
            if (error.code === "ENOENT") {
                await fs.rename(renamePathFrom, renamePathTo);
            } else {
                throw new Error(errorMessage);
            }
        }
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await rename();
