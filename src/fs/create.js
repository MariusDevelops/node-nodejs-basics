import * as fs from "node:fs/promises";

const create = async () => {
    const path = "src/fs/files/fresh.txt";
    const content = "I am fresh and young";
    const errorMessage = "FS operation failed";

    try {
        await fs.access(path);
        throw new Error(errorMessage);
    } catch (error) {
        if (error.code === "ENOENT") {
            await fs.writeFile(path, content);
        } else {
            throw new Error(errorMessage);
        }
    }
};

await create();
