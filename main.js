const checkDiskSpace = require('check-disk-space')

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

drives.forEach(drive => {
  checkDiskSpace(drive.rootPath)
    .then((diskSpace) => {
      const percentageFree = diskSpace.free / diskSpace.size * 100
      console.log(`Drive "${diskSpace.diskPath}" > ${percentageFree}% FREE`)
    })
})
