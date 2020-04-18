# Manya Vote Automate
### This project was made to rig the voting system of a website design to collect votes with different IP without a CAPTCHA

Url for the original Website is: http://www.speakforindiadelhi.com/speaker.php  (yep, no https support). Which probably by now is down so here's the [Screenshot](screencapture-speakforindiadelhi-speaker-php-2020-04-19-00_01_14.png) of how it looked at the time.

Now since the website used IP address to track vote, I used Tor's Sock5 Proxies to get new IPs every time.
Then used Selenium to automate the voting process.

You can watch the video here:

<a href="https://www.loom.com/share/84ec8b8889704ac290bdefab19c4aa34"> <p>Speak For India Automated Voting - Watch Video</p> <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/84ec8b8889704ac290bdefab19c4aa34-with-play.gif"> </a>

CAUTION: geckodriver should be latest and in windows PATH environment variable.

It was fun project :smile:, learned a lot about python and OS interactions using OS and subprocess module.
