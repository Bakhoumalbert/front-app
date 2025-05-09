export interface publicationsListInterface {
    status: publicationStatusTypes
    title: string,
    listImg: imagesPubliInterface[],
    description: string,
    url: string
    stack: string[],
}

export interface imagesPubliInterface {
    imagePath: string,
    imageAlt: string,
}
export type publicationStatusTypes = "publier" | "brouillon"
