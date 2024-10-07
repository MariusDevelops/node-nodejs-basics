import { Worker } from "worker_threads";
import os from "os";

const performCalculations = async () => {
    const numCores = os.cpus().length;
    const workers = [];
    const results = new Array(numCores).fill(null);

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(new URL("./worker.js", import.meta.url));

        const n = 10 + i;

        workers.push(
            new Promise((resolve) => {
                worker.on("message", (data) => {
                    results[i] = { status: "resolved", data };
                    resolve();
                });

                worker.on("error", (error) => {
                    results[i] = { status: "error", data: null };
                    resolve();
                });

                worker.on("exit", (code) => {
                    if (code !== 0) {
                        console.error(`Worker ${i} exited with code ${code}`);
                    }
                });

                worker.postMessage(n);
            })
        );
    }

    await Promise.all(workers);
    console.log("All calculations completed:", results);
};

await performCalculations();
