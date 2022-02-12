const log = (msg) => { 
    console.log(`LogCommonJS: ${msg} - ${abc}`)
}

const info = (msg) => { 
    console.log(`Info: ${msg}`)
}

module.exports = { log, info };