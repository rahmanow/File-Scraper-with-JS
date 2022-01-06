import Downloader from "nodejs-file-downloader";

const range = (max) => Array.from({ length: max }, (_, i) => 1 + i);

const fileScrap = (proxy, coreLink, filePrefix, fileSuffix, max, fileType, path, clone, savePrefix) => {
    let maxNum = range(max);
    for (let j = 0; j < maxNum.length; j++) {
       let i = (maxNum[j] < 10) ? String(maxNum[j]).padStart(2, '0') : maxNum[j];
        (async () => {
            const downloader = new Downloader({
                proxy: proxy,
                url: coreLink + filePrefix + i + fileSuffix + '.' + fileType,
                directory: (path) ? `./downloads/${path}` : './downloads',
                cloneFiles: (clone === 'yes') ? true : (clone === 'no') ? false : false,
                fileName: (savePrefix) ? savePrefix.replace(/ /g, "-").trim() + '-' + i + '.' + fileType: '',
                onProgress: function (percentage, chunk, remainingSize) {
                    console.clear();
                    console.log(`Downloading ${filePrefix + i + '.' + fileType} to ${this.directory} - %`, percentage);
                    //console.log("Current chunk of data: ", chunk);
                    //console.log("Remaining bytes: ", remainingSize);
                }
            });
            try {
                await downloader.download();
                console.log("Download complete");
            } catch (error) {
                //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
                //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
                console.log("Download failed", error);
            }
        })();

    }
}

export default fileScrap;