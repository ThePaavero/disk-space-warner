const checkDiskSpace = require('check-disk-space')
const notifier = require('node-notifier')
const path = require('path')
const config = require('./config')

const tick = () => {
  config.drives.forEach(drive => {
    checkDiskSpace(drive.rootPath)
      .then((diskSpace) => {
        const percentageFree = diskSpace.free / diskSpace.size * 100
        console.log(`Drive "${diskSpace.diskPath}" > ${percentageFree}% FREE`)
        if (percentageFree > drive.warningThresholdInPercentage) {
          // We're good.
          return
        }
        // We're not good. Alert.
        console.log('Not enough free space. Alerting user.')
        notifier.notify({
          appID: 'what?',
          title: 'DISK SPACE WARNING',
          message: `Drive "${drive.title}" is starting to fill up.\nUnder ${drive.warningThresholdInPercentage} % remaining.`,
          icon: path.join(__dirname, '/alert-icon.png'),
        })
      })
  })

  setTimeout(tick, config.tickIntervalInMinutes * 60000)
}

tick()
