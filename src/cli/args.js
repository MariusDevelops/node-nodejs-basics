import { argv } from "node:process";

const parseArgs = () => {
    argv.forEach((val, index) => {
        if (val.startsWith("--")) {
            const propName = val.replace("--", "");
            const value = argv[index + 1];
            console.log(`${propName} is ${value}`);
        }
    });
};

parseArgs();
