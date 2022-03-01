import cf from "./config.js";
import fileScrap from "./app.js";

fileScrap(cf.proxy,
    cf.url,
    cf.prefix,
    cf.suffix,
    cf.fileAmount,
    cf.fileType,
    cf.downloadFolder,
    cf.cloneFile,
    cf.savePrefix
);