# fivem_loadingscreen
FiveM loadingscreen with youtube audio support, being able to skip/pause audio. Shows song name.
## Requirements
No previous requirements are needed. Just install this resource and you are good to go!

## Downloading
### Git
```
cd resources
git clone https://github.com/raitnigol/fivem_loadingscreen resources/fivem_loadingscreen
```

### Manually Downloading
- Download https://github.com/raitnigol/fivem_loadingscreen/archive/master.zip
- Put it in your resources folder

# Installing
- Add the resource to your `server.cfg`:
```
start fivem_loadingscreen
```

# Customization
Feel free to customize this file as you like. You can translate it, modify it to make it run even better.
I am not the best at using HTML and JavaScript, so the code might be a bit clunky or weirdly built up.

## Logo
You can change the logo by replacing the `img/Logo.png` file with your own logo. It can be in any shape.
It does not have to be in a round shape, but that is the best looking in my opinion.
The resolution should be 480x480 pixels, or you can adjust it according to your liking.

# Adding songs / song names

## Adding songs
To add songs, you must open the file `js/config.js at line 12:`
```
music: ["videoID", "videoID"],
```
You have to make an array of YouTube video ID-s.

### How to find Youtube Video ID
YouTube video ID is a 11 digit code after the URL parameter `v=`
Lets take this video for example: [Dynoro & Gigi D’Agostino - In My Mind](https://www.youtube.com/watch?v=W9P_qUnMaFg).
The video URL is https://www.youtube.com/watch?v=W9P_qUnMaFg and after the `v=` parameter we see a 11 digit code `W9P_qUnMaFg`.
This is the code you need to add songs to your music array. So now we can add songs like this:
`js/config.js at line 12:`
```
music: ["W9P_qUnMaFg", "67RsNGnpsDA"],
```

## Adding song names
To add a corresponding song name to a video ID, we need to add the song name in the same position.
JavaScript arrays start from integer 0. We added the song [Dynoro & Gigi D’Agostino - In My Mind](https://www.youtube.com/watch?v=W9P_qUnMaFg)
to our music array, now we can add a songname value to it.
`js/config.js at line 14:`
```
songnames: ["Dynoro & Gigi D’Agostino - In My Mind", "Mati Nuude - See Väike Neiu"],
```

### Changing the song volume
You can change the volume of the songs from 0 to 100. Volume should be below 50% to avoid earraping people.
To change the volume of the songs, you can do it in `js/config.js at line 17`
```
musicvolume = 40
```

### Useful links
- [JavaScript arrays](https://www.javatpoint.com/javascript-array)
- [Get the video ID of a YouTube video](https://gist.github.com/jakebellacera/d81bbf12b99448188f183141e6696817)
