import { request } from 'graphql-request'

class Backend {
    static async loadTaxonTree(taxonId) {
        const taxonTreeQuery = `
        query treeNodes($ids: [Int]!) {
            taxonTreeNodes(taxonIds: $ids) {
            id
            #count
            popularName
            scientificName
            scientificNameAuthor
            parentId
            children {
              id
            #count
              aggreggatedCount
            #parentId
              scientificName
            #scientificNameAuthor
              popularName
            }
          }
        }`;
        const variables = {
            ids: [ taxonId ]
        };

        return new Promise((resolve, reject) => {
        request('//ogapi.artsdatabanken.no/graph', taxonTreeQuery, variables)
            .then(json => resolve(json))
        })
    }

    static async searchTaxons(searchStr) {
        return new Promise((resolve, reject) => {
            fetch(`//artskart.artsdatabanken.no/appapi/api/data/SearchTaxons?maxCount=15&name=${searchStr}`)
                .then(result=>result.json())
                .then(json => resolve(json))
        })
    }

    static getTaxonPhotoUrl(taxonId) {
        return `http://nodeyoda.westeurope.cloudapp.azure.com/taxonPhoto/${taxonId || 0}.jpg`;
    }
}

export default Backend