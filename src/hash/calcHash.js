import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";
import { stdout } from "node:process";

const calculateHash = async () => {
    const hash = createHash("sha256");

    const input = createReadStream("src/hash/files/fileToCalculateHashFor.txt");
    input.pipe(hash).setEncoding("hex").pipe(stdout);
};

await calculateHash();
