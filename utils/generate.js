var fs = require('fs');


const TEMPLATE_FILE = '../utils/generateJson.Template.json'
const DATA_FILE = '../utils/generateJson.Data.json'

const findAndReplace = (dataString) => {
    const dataContext = JSON.parse(dataString)
    let templateString = JSON.stringify(dataContext.template)

    console.log(typeof (dataString))

    // Read data file and iterate over object
    dataContext.rows.forEach((row, rowIndex) => {
        // let dataToWrite;

        dataContext.columns.forEach((column, colIndex) => {
            // console.log(typeof dataString)
            // console.log(dataString.indexOf(`"{{${column}}}"`), column, row[colIndex])
            // console.log(dataString.indexOf(`{{${column}}}`), column, row[colIndex])

            // dataToWriteOne = dataString.replace(`"{{${column}}}"`, row[colIndex])
            // dataToWriteTwo = dataToWriteOne.replace(`{{${column}}}`, row[colIndex])
            // dataToWriteThree = dataToWriteTwo.replace(column, row[colIndex])

            dataContext.template.name = `Hockey Labs Stick ${rowIndex + 1}`
            dataContext.template.image = `${rowIndex}.png`
            dataContext.template.attributes = [
                {
                    trait_type: "offense",
                    value: row[1]
                },
                {
                    trait_type: "defense",
                    value: row[2]
                },
                {
                    trait_type: "hockey sense",
                    value: row[3]
                },
                // {
                //     traitType: "total",
                //     value: row[4]
                // },
                {
                    trait_type: "material",
                    value: row[5]
                }
            ]

            dataContext.template.properties = {
                ...dataContext.template.properties,
                files: [{
                    type: 'image/png',
                    uri: `${rowIndex}.png`
                }]
            }

        })

        fs.writeFile(`../assets/${rowIndex}.json`,
            // JSON.stringify(JSON.parse(dataToWriteTwo).template, null, "\t"), 'utf8',
            JSON.stringify(dataContext.template, null, "\t"), 'utf8',
            (err, data) => {
                if (err) console.log(err)
                else console.log(`Success: ${rowIndex}.json`)
            })
    })


}


fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        findAndReplace(data)
    }
})

