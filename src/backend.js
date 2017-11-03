class Backend {
    static async loadTaxonTree(taxonId) {
        return new Promise((resolve, reject) => {
        fetch(`https://artskart.artsdatabanken.no/appapi/api/data/GetTaxonTree?parentTaxonId=${taxonId}`)
            .then(result=>result.json())
            .then(json => resolve(json))
        })
    }

    static async searchTaxons(searchStr) {
        return new Promise((resolve, reject) => {
            fetch(`https://artskart.artsdatabanken.no/appapi/api/data/SearchTaxons?maxCount=15&name=${searchStr}`)
                .then(result=>result.json())
                .then(json => resolve(json))
        })
    }

    static getTaxonLocationsUrl(taxonId) {
        return `http://nodeyoda.westeurope.cloudapp.azure.com/observation/${taxonId}.png`;
    }

    static getTaxonPhotoUrl(taxonId) {
        return `http://nodeyoda.westeurope.cloudapp.azure.com/taxonPhoto/${taxonId}.jpg`;
    }
}

export default Backend