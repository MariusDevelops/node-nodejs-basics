const parseEnv = () => {
    const env = {
        RSS_host: "app.rs.school",
        APP_host: "db.app.com",
        RSS_port: "7070",
        APP_port: "3030",
        RSS_user: "user",
        APP_user: "admin",
    };

    const envVariables = [];

    Object.keys(env).forEach((key) => {
        if (key.startsWith("RSS_")) {
            envVariables.push(`${key}=${env[key]}`);
        }
    });

    console.log(envVariables.join("; "));
};

parseEnv();
