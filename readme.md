# File Scraper with JavaScript

File Scraper is for downloading multiple files from the link which have sequent filenames.

Example:

https://example.com/some-name/file-01name.mp3

https://example.com/some-name/file-02name.mp3

https://example.com/some-name/file-03name.mp3

...


## Installation

Go to the folder from terminal

```bash
npm install
```

## Usage
Edit config.js and run:
```bash
npm run start
```

config.js file:
```python
const cf = {

# url without filename. https://example.com/some-name/
url: '',


#how many remote files?
fileAmount: '',


#default is "downloads"
downloadFolder: '',


# remote filenames have xxxx prefix char other than numbers. (ex: xxxx01.pdf)
prefix: '',


# remote filenames have yyy suffix char other than numbers. (ex: xxxx02yyy.pdf)
suffix: '',


# ex: http://username:password@some-proxy.com:22225
proxy: '',


#Save downloaded file with prefix
savePrefix: '',


# default is "no"
cloneFile: ''

}

```



## License
No License, free for all.