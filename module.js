import Downloader from "nodejs-file-downloader";

const range = (max) => Array.from({ length: max }, (_, i) => 1 + i);

const fileScrap = (proxy, coreLink, filePrefix, max, fileType, path, clone) => {
    let maxNum = range(max);
    for (let j = 0; j < maxNum.length; j++) {
        let i = (maxNum[j] < 10) ? String(maxNum[j]).padStart(2, '0') : maxNum[j];
        let link = coreLink + filePrefix + i + '.' + fileType;
        const folder = (path) ? `./${path}` : './downloads';
        const cloneFile = (clone === 'yes') ? true : (clone === 'no') ? false : false;

        (async () => {
            const downloader = new Downloader({
                proxy: proxy,
                url: link, //If the file name already exists, a new file with the name 200MB1.zip is created.
                directory: folder, //This folder will be created, if it doesn't exist.
                cloneFiles: cloneFile,
                onProgress: function (percentage, chunk, remainingSize) {
                    //Gets called with each chunk.
                    console.log("% ", percentage);
                    console.log("Current chunk of data: ", chunk);
                    console.log("Remaining bytes: ", remainingSize);
                }
            });
            try {
                await downloader.download(); //Downloader.download() returns a promise.
                console.log(`${filePrefix + i + '.' + fileType} is downloaded`);
            } catch (error) {
                //IMPORTANT: Handle a possible error. An error is thrown in case of network errors, or status codes of 400 and above.
                //Note that if the maxAttempts is set to higher than 1, the error is thrown only if all attempts fail.
                console.log("Download failed", error);
            }
        })();
    }
}

export default fileScrap;