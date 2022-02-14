import fs from 'fs/promises'
import path from 'path'


class SortFiles { 
    constructor(dist) { 
        this.dist = dist
    }
    async copyFile(file) { 

    }
    async readFolder (base) { 
        const items = await fs.readdir(base)
    for (const item of items) { 
        const localBase = path.join(base, item)
        const state = await fs.stat(localBase)
        if (state.isFile()) {
            console.log(item)
        } else { 
            console.log(localBase);
            await readFolder(localBase)
        }
        
    }
}
}

export default SortFiles
// readFolder('./picture')
