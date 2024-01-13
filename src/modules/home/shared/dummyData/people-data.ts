import { GridCategory, GridConfig, GridData } from "../models/grid-data.models"

export const PEOPLE_CONFIG: GridConfig = {
    showTitle: false,
    showSubtitle: true,
    showViewsCount: false,
}

export const PEOPLE_CATEGORY: GridCategory = {
    categoryName: 'People',
    seeAllText: 'View All'
}
export const PEOPLE_DATA: GridData[] = [
    {
        "id": "1zas",
        "title": "Mark Markiplier",
        "subtitle": "People 1",
        "viewsCount": 1230,
        "imageUrl": "https://picsum.photos/200/300?random=7"
    },
    {
        "id": "1zs",
        "title": "Video Title 2",
        "subtitle": "People 2",
        "viewsCount": 0,
        "imageUrl": "https://picsum.photos/200/300?random=8"
    },
    {
        "id": "1z",
        "title": "Video Title 3",
        "subtitle": "People 3",
        "viewsCount": 0,
        "imageUrl": "https://picsum.photos/200/300?random=9"
    },
    {
        "id": "1zz",
        "title": "Video Title 4",
        "subtitle": "People 4",
        "viewsCount": 0,
        "imageUrl": "https://picsum.photos/200/300?random=10"
    },
    {
        "id": "1z3",
        "title": "Video Title 5",
        "subtitle": "People 5",
        "viewsCount": 0,
        "imageUrl": "https://picsum.photos/200/300?random=11"
    },
]
