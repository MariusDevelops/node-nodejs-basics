import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
    const child = spawn("node", ["src/cp/files/script.js", ...args], {
        stdio: ["pipe", "pipe", "pipe"],
    });

    process.stdin.pipe(child.stdin);

    child.stdout.pipe(process.stdout);

    child.stderr.on("data", (data) => {
        console.error(`Child stderr: ${data}`);
    });

    child.on("exit", (code) => {
        console.log(`Child process exited with code ${code}`);
        process.exit(code);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg1", "arg2", "arg3"]);
