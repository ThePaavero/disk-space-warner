const checkDiskSpace = require('check-disk-space')

const drives = [
  '/mnt/c/',
  '/mnt/d/',
  '/mnt/e/',
]

drives.forEach(rootPath => {
  checkDiskSpace(rootPath)
    .then((diskSpace) => {
      const percentageFree = diskSpace.free / diskSpace.size * 100
      console.log(`Drive "${diskSpace.diskPath}" > ${percentageFree}% FREE`)
    })
})
