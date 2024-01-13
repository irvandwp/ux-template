import { GridCategory, GridConfig, GridData } from "../models/grid-data.models"

export const DOCUMENTS_CONFIG: GridConfig = {
    showTitle: true,
    showSubtitle: false,
    showViewsCount: true,
}
export const DOCUMENTS_CATEGORY: GridCategory = {
    categoryName: 'DOCUMENTS',
    seeAllText: 'Browse All Documents'
}
export const DOCUMENTS_DATA: GridData[] = [
    {
        "id": "1z",
        "title": "Mobile UI/UX",
        "subtitle": "By Wiliiam Dafoe",
        "viewsCount": 12310,
        "imageUrl": "https://picsum.photos/200/300?random=41"
    },
    {
        "id": "1cx",
        "title": "Video Title 2",
        "subtitle": "",
        "viewsCount": 321321,
        "imageUrl": "https://picsum.photos/200/300?random=42"
    },
    {
        "id": "1c",
        "title": "Video Title 3",
        "subtitle": "",
        "viewsCount": 2310,
        "imageUrl": "https://picsum.photos/200/300?random=43"
    },
    {
        "id": "1a",
        "title": "Video Title 4",
        "subtitle": "",
        "viewsCount": 220,
        "imageUrl": "https://picsum.photos/200/300?random=45"
    },
    {
        "id": "1x",
        "title": "Video Title 5",
        "subtitle": "",
        "viewsCount": 1232310,
        "imageUrl": "https://picsum.photos/200/300?random=46"
    },
]
