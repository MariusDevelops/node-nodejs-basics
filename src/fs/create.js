import { promises as fs } from "fs";

const create = async () => {
    const path = "src/fs/files/fresh.txt";
    const content = "I am fresh and young";
    const errMessage = "FS operation failed";

    try {
        await fs.access(path);
        throw new Error(errMessage);
    } catch (err) {
        if (err.code === "ENOENT") {
            await fs.writeFile(path, content);
        } else {
            throw new Error(err.message);
        }
    }
};

await create();
