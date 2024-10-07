import { Transform } from "node:stream";

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            this.push(
                chunk.toString().replace(/\n$/, "").split("").reverse().join("")
            );
            callback();
        },
    });

    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();
