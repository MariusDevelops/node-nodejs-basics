import { access, cp } from "node:fs/promises";

const copy = async () => {
    const copyFrom = "src/fs/files/";
    const copyTo = "src/fs/files_copy/";
    const errorMessage = "FS operation failed";

    try {
        await access(copyFrom);

        try {
            await access(copyTo);
            throw new Error(errorMessage);
        } catch (error) {
            if (error.code === "ENOENT") {
                await cp(copyFrom, copyTo, { recursive: true });
            } else {
                throw new Error(errorMessage);
            }
        }
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await copy();
