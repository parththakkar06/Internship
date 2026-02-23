const axios = require("axios")
const zlib = require("zlib")
const readline = require("readline")
const { getDb } = require("./db")

const fetchAndInsert = async (dateHour) => {
    const db = getDb()
    const collection = db.collection("gh_events")

    const url = `https://data.gharchive.org/${dateHour}.json.gz`

    console.log("Fetching : ", url)

    const res = await axios({
        method: "GET",
        url,
        responseType: "stream"
    })

    const gunzip = zlib.createGunzip()
    const stream = res.data.pipe(gunzip)

    const rl = readline.createInterface({
        input: stream,
        crlfDelay: Infinity
    })

    let batch = []
    const batch_size = 1000

    for await (const line of rl) {
        try {
            const json = JSON.parse(line)
            batch.push(json)

            if (batch.length >= batch_size) {
                const result = await collection.insertMany(batch, { ordered: false });
                console.log("Inserted:", result.insertedCount);
                // await collection.insertMany(batch,{ordered : false})
                batch = []
            }
        } catch (err) {
            console.error("Invalid JSON File skipped")
        }
    }

    if (batch.length > 0) {
        // await collection.insertMany(batch, { ordered: false })
        const result = await collection.insertMany(batch, { ordered: false });
        console.log("Inserted:", result.insertedCount);
    }

    console.log("Finishing inserting : ", dateHour)
}


module.exports = fetchAndInsert