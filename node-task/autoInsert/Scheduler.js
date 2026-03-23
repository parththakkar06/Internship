const cron = require("node-cron")
const fetchAndInsert = require("./FetchGhArchive")

const getPreviousUTCDateHour = () => {
    const now = new Date()
    now.setUTCHours(now.getUTCHours() - 1)

    const year = now.getUTCFullYear()
    const month = String(now.getUTCMonth() + 1).padStart(2,"0")
    const day = String(now.getUTCDay()).padStart(2,"0")
    const hour = String(now.getUTCHours())

    return `${year}-${month}-${day}-${hour}`;
}

const startScheduler = () => {
    cron.schedule("43 * * * *", async() => {
        try{
            const dateHour = getPreviousUTCDateHour()
            await fetchAndInsert(dateHour)
        }catch(err){
            console.error("Scheduler error : ",err.message)
            console.log("here")

        }
    })

    console.log("Scheduler started. Running every hour")
}


module.exports = {startScheduler}