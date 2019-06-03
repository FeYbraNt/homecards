import axios from 'axios'

const baseDomain = "https://frontend-interview.spotahome.com"
const baseURL = `${baseDomain}/api/public/listings/search`

const MAX_HOMECARDS = 30;

const getHomeCards = async () => {
    let homecards = []
    try {
        const data = await axios.get(baseURL + "/markers/madrid").then(response => {
            return response.data["data"].slice(0, MAX_HOMECARDS)
        })
        const listIDs = data.map(item => item["id"])
        if (listIDs.length > 0) { homecards = await getHomeCardsByIds(listIDs) }
    } catch (error) { console.log(error) }
    return homecards
}

const getHomeCardsByIds = async (ids) => {
    // Add all IDs for only one API call
    const request = { params: { "ids": ids } }
    let result = []
    await axios.get(baseURL + "/homecards_ids", request)
        .then(response => {
            const data = response.data["data"]
            result = data["homecards"].map((item) => ({ 
                adId: item["adId"],
                currencySymbol: item["currencySymbol"],
                pricePerMonth: item["pricePerMonth"],
                photoUrls: {
                    homecardHidpi: item["mainPhotoUrl"]
                },
                title: item["title"]
            }))
        })
        .catch(error => console.log(error))
    return result
}

export default { getHomeCards }