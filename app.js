import Downloader from "nodejs-file-downloader";

const range = (max) => Array.from({ length: max }, (_, i) => 1 + i);

const readableBytes = (bytes) => {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let i = 0;
    while (bytes >= 1024) { bytes /= 1024; i++; }
    return bytes.toFixed(1) + ' ' + units[i];
}

const isPromise = (obj) => { return (obj && typeof obj.then === 'function');}

const zeroFilledNumber = (arrayLength, i) => {
    return arrayLength < 100 ? String(i).padStart(2, '0') : arrayLength < 1000 ? String(i).padStart(3, '0') : String(i).padStart(4, '0');
}

const fileScrap = (proxy, coreLink, filePrefix, fileSuffix, max, fileType, path, clone, savePrefix) => {
    const maxNum = range(max);
    const maxNumLength = maxNum.length;
    const cloneFile = (clone === 'yes') ? true : (clone === 'no') ? false : false;
    const filePath = path ? './downloads/' + path : './downloads';

    const download = async (i) => {
        let fileName = filePrefix + zeroFilledNumber(maxNumLength, i) + fileSuffix + fileType;
        let fileLink = coreLink + fileName;
        let fileSave = savePrefix + fileName;
        let file = new Downloader({
            url: fileLink,
            directory: filePath,
            proxy: proxy,
            cloneFiles: cloneFile,
            onProgress: (percentage, chunk, remainingSize) => {
                console.clear();
                console.log(`Downloading ${fileSave} to ${filePath} - %`, percentage + ' / Remaining: ' + readableBytes(remainingSize));
            }
        });
        try {
            await file.download().then(r => {
                console.log(`${fileName} downloaded to ${fileSave}`);
            }).catch(e => {
                console.log(e);
            });
        } catch (error) {
            console.log("Download failed", error);
        }
    };
    const runSerial = () => {
        if (maxNumLength < 15) {
            maxNum.forEach(i => {
                download(i).then(r => {console.log(r);});
            });
        } else {
            let result = Promise.resolve();
            maxNum.forEach(task => {
                result = result.then(() => download(task))
            });
            return result;
        }
    }
    isPromise(runSerial()) ? runSerial().then(r => {console.log(r);}) : runSerial();
};

export default fileScrap;