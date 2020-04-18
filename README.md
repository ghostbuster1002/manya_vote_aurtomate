# Manya Vote Automate
### This project was made to rig the voting system of a website design to collect votes with different IP without a CAPTCHA

Url for the original Website is: http://www.speakforindiadelhi.com/speaker.php  (yep, no https support). Which probably by now is down so here's the [Screenshot](screencapture-speakforindiadelhi-speaker-php-2020-04-19-00_01_14.png) of how it looked at the time.

Now since the website used IP address to track vote, I used Tor's Sock5 Proxies to get new IPs every time.
Then used Selenium to automate the voting process.

CAUTION: geckodriver should be latest and in windows PATH environment variable.

It was fun project :smile:, learned a lot about python and OS interactions using OS and subprocess module.
