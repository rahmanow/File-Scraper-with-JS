import cf from "./config.js";
import fileScrap from "./module.js";

fileScrap(cf.proxy,
    cf.url,
    cf.prefix,
    cf.fileAmount,
    cf.fileType,
    cf.downloadFolder,
    cf.cloneFile,
    cf.savePrefix
);