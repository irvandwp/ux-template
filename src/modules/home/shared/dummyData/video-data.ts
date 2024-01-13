import { GridCategory, GridConfig, GridData } from "../models/grid-data.models"

export const VIDEO_CONFIG: GridConfig = {
    showTitle: false,
    showSubtitle: true,
    showViewsCount: true,
}

export const VIDEO_CATEGORY: GridCategory = {
    categoryName: 'Videos',
    seeAllText: 'Browse All Videos'
}
export const VIDEO_DATA: GridData[] = [
    {
        "id": "1ca",
        "title": "How to improve your skill",
        "subtitle": "Author 1",
        "viewsCount": 56789,
        "imageUrl": "https://picsum.photos/200/300?random=1"
    },
    {
        "id": "1cb",
        "title": "Video Title 2",
        "subtitle": "Author 2",
        "viewsCount": 23456,
        "imageUrl": "https://picsum.photos/200/300?random=2"
    },
    {
        "id": "1cc",
        "title": "Video Title 3",
        "subtitle": "Author 3",
        "viewsCount": 78901,
        "imageUrl": "https://picsum.photos/200/300?random=3"
    },
    {
        "id": "1cd",
        "title": "Video Title 4",
        "subtitle": "Author 4",
        "viewsCount": 12345,
        "imageUrl": "https://picsum.photos/200/300?random=4"
    },
    {
        "id": "1b",
        "title": "Video Title 5",
        "subtitle": "Author 5",
        "viewsCount": 45678,
        "imageUrl": "https://picsum.photos/200/300?random=5"
    },
]
