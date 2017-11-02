
class Backend {
    static async loadTaxonTree(taxonId) {
        return new Promise((resolve, reject) => {
        fetch(`https://artskart.artsdatabanken.no/appapi/api/data/GetTaxonTree?parentTaxonId=${taxonId}`)
        .then(result=>result.json())
        .then(json => resolve(json))
        })
    }
}

export default Backend