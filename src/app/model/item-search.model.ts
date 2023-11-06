export class ItemSearch {

    constructor(
        public id: number,
        public title: string,
        public poster: string,
        public overview: string,
        public release_date: Date,
    ) { }


}

export interface ResponseMeilisearch {
    estimatedTotalHits: number,
    facetDistribution: any,
    hits: ItemSearch[],
    limit: number,
    offset: number,
    processingTimeMs: number 
    query: string
}

