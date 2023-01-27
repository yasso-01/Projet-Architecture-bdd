const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path')
const logger = async (newArticle, logFileName) => {
    try {
        // Checking if the file exists
        if(!fs.existsSync(path.join(__dirname, '..', logFileName))) {
            await fsPromises.writeFile(path.join(__dirname, '..', logFileName), '', 'utf8', (err) => {
                if(err) throw err;
                console.log({ err })
            });
        }

        const fileData = fs.readFileSync(path.join(__dirname, '..', logFileName), 'utf8');
        // If the file is empty we init it with articles array;
        let data = fileData ? JSON.parse(fileData) : { articles: [] }

        //Pushing new registered user
        data.articles.push(newArticle)

        //Updating the JSON 
        fs.writeFile(path.join(__dirname, '..', logFileName), JSON.stringify(data, null, 4), 'utf8', err => {
            if (err) {
                console.log(`Error writing file: ${err}`)
                throw err
            }
        })
    } catch(err) {
        console.log(err);
        throw err
    }
}

module.exports = logger