const checkDiskSpace = require('check-disk-space')
const notifier = require('node-notifier')
const path = require('path')

const intervalInMinutes = 0.2

const drives = [
  {
    title: 'C',
    rootPath: '/mnt/c/',
    warningThresholdInPercentage: 20,
  },
  {
    title: 'D',
    rootPath: '/mnt/d/',
    warningThresholdInPercentage: 20,
  },
  {
    title: 'E',
    rootPath: '/mnt/e/',
    warningThresholdInPercentage: 20,
  }
]

const tick = () => {
  drives.forEach(drive => {
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
          title: 'DISK SPACE WARNING',
          message: `Drive "${drive.title}" is starting to fill up\n(under ${drive.warningThresholdInPercentage} %)!`,
          icon: path.join(__dirname, 'alert-icon.png'),
        })
      })
  })

  setTimeout(tick, intervalInMinutes * 60000)
}

tick()
