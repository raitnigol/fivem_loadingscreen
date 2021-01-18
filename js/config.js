/*
        Array of music id's to play in the loadscreen. Enter your youtube video id's here. In order to obtain the video ID
        Take whats after the watch?v= on a youtube link. https://www.youtube.com/watch?v=<videoid>
        Do not include the playlist id or anything, it should be a 11 digit code.
       
        Do not use videos that:
        - Do not allow embedding.
        - Copyrighted music (youtube actively blocks this).
*/

/*
	Update the config according to your needs. Two songs are added by default to show how to use the configuration.
	Note: JavaScript arrays do not end with comma (,). That means, when ending an array, do not use a comma.
	Right format should be something like this:
	music: ["cqwmDWCRuCU", "9yplucq49zs"]
	And this should not work:
    music: ["cqwmDWCRuCU", "9yplucq49zs", ]
*/

var config = {
    music: ["VpZk0l6LV5s", "56sxLl-jXc4"],
    songnames: ["Mati Nuude - No Oota Sa!", "lilbubblegum - af1"],
    musicVolume: 40, // volume should be under 50% to not cause earrape
    enableMusic: true
}

/*
    TODO: the loading screen crashes when only one song is present in the array.
    Also, when you want to test out the config in your browser, these browsers do not work (atleast for me):
    - Opera GX
    Tested and working browsers
    - Google Chrome
    - Microsoft Edge
    - Mozilla Firefox
*/