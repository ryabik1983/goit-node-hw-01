const fs = require('fs/promises')

const fileName = './main.js'

const copyFile = async (fileName) => { 
    const file = await fs.readFile(fileName, 'utf8')
    await fs.mkdir('./temp', {recursive: true})
    await fs.writeFile('./temp/temp.js', `${file}console.log('Hello')`)

}
copyFile(fileName).then(
    async () => { 
        // await fs.unlink('./temp/temp.js')
        // await fs.rmdir('./temp')
    }) 