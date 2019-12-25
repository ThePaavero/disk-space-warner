# Keeps an eye on your disk space situation

## Installing
``

## How it works
- You edit the configuration JSON to suit your setup and needs
- You run the program, it will keep checking the situation with an interval that you configure (once an hour by default) 
- When the program notices that one or more of your drives have less free space it will create an alert

## Notes
- This "problem" has probably been solved in much better ways. I just wanted to create something. :)
- Tested on Windows only
- This library does all the tedious work, it's great: https://github.com/Alex-D/check-disk-space
- This library handles the alert part: https://github.com/mikaelbr/node-notifier


## Todo
[] Get a custom icon to work
[] Figure out and write instructions on how to start the application in the background on start up
