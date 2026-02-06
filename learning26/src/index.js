import config from "./config/serverconfig.js"
import app from "./app.js";

app.listen(config.port, ()=>{
    console.log(`Server Running on port ${config.port} in ${config.env} mode`);
});
