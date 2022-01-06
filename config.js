const cf = {
        //  the link is whole url without filename. basically the url of the folder where files exist.
        //  for example if the downloadable file link is https://example.com/some-name/04.mp3
        //  then url is: https://example.com/some-name/
        url: '',


        //  how many files does the link have?
        fileAmount: '',


        //  mp3, mkv, jpg, png, pdf ...
        fileType: '',


        //  default is in "downloads"
        downloadFolder: '',


        //  write if the filename has frequent char.
        //  don't change if the file name is ex: 01.mp3, 02.mp3, 03.mp3 etc.
        //  change to x if the filename is: x01.mp3, x02.mp3, x03.mp3 etc.
        prefix: '',


        // white if the files has a sequent char after numbers.
        // for example, change it fo x if the filename is: 01x.pdf, 02x.pdf, etc
        suffix: '',


        //  ex: http://username:password@some-proxy.com:22225
        proxy: '',


        // add prefix to downloaded filename
        // Example: Stefan Zweig Chess Audiobook
        // File name will be: Stefan-Zweig-Chess-Audiobook-01.mp3
        savePrefix: '',


        //  yes/no  default is "no"
        cloneFile: ''
}

export default cf;