const parseEnv = () => {
    const env = process.env;
    const envVariables = [];

    Object.keys(env).forEach((key) => {
        if (key.startsWith("RSS_")) {
            envVariables.push(`${key}=${env[key]}`);
        }
    });

    console.log(envVariables.join("; "));
};

parseEnv();
