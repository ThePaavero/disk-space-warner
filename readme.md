# Keeps an eye on your disk space situation

![Screenshot of alert](https://github.com/ThePaavero/disk-space-warner/blob/master/screenshot.png)

## Installing
- `git clone https://github.com/ThePaavero/disk-space-warner.git`

- `cd disk-space-warner`

- `npm i`

- `node main.js`

## How it works
- You edit the configuration JSON to suit your setup and needs
- You run the program, it will keep checking the situation with an interval that you configure (once an hour by default) 
- When the program notices that one or more of your drives have less free space than you're comfortable with, it will create an alert

## Todo
- [ ] Get a custom icon to work

- [ ] Figure out and write instructions on how to start the application in the background on start up

- [ ] Add a feature: STFU after one or two notice(s); don't keep nagging every X minutes

## Notes
- This "problem" has probably been solved in much better ways. I just wanted to create something. :)
- Tested on Windows only
- This library does all the tedious work, it's great: https://github.com/Alex-D/check-disk-space
- This library handles the alert part: https://github.com/mikaelbr/node-notifier

---

### Example config object
It's what I use. It runs under WSL, hence the funky directory paths.
```json
{
  "tickIntervalInMinutes": 60,
  "drives": [
    {
      "title": "C",
      "rootPath": "/mnt/c/",
      "warningThresholdInPercentage": 20
    },
    {
      "title": "D",
      "rootPath": "/mnt/d/",
      "warningThresholdInPercentage": 20
    },
    {
      "title": "E",
      "rootPath": "/mnt/e/",
      "warningThresholdInPercentage": 20
    }
  ]
}
```
