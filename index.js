import fileScrap from "./module.js";

const cf = {
    proxy: '',              //  ex: http://username:password@some-proxy.com:22225
    url: '',               //  the link is whole url without filename. basically the url of the folder where files exist.
                            //  for example if the downloadable file link is https://example.com/some-name/04.mp3 then url is: https://example.com/some-name/
    prefix: '',             //  write if the filename has frequent char.
                            //  don't change if the file name is ex: 01.mp3, 02.mp3, 03.mp3 etc.
                            //  change to x if the filename is: x01.mp3, x02.mp3, x03.mp3 etc.
    fileAmount: '3',        //  how many files does the link have?
    fileType: 'mp3',        //  without comma
    downloadFolder: '',     //  default is "downloads"
    cloneFile: 'yes'           //  yes/no  default is "no"
}

fileScrap(cf.proxy, cf.url, cf.prefix, cf.fileAmount, cf.fileType, cf.downloadFolder, cf.cloneFile);