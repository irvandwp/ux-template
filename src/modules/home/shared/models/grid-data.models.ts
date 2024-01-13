export class GridData {
    id: string;
    title: string;
    subtitle: string;
    viewsCount: number;
    imageUrl: string;

    constructor() {
        this.id = '';
        this.title = '';
        this.subtitle = '';
        this.viewsCount = 0;
        this.imageUrl = '';
    }
}

export class GridCategory {
    categoryName: string;
    seeAllText: string;

    constructor() {
        this.categoryName = '';
        this.seeAllText = '';
    }
}


export class GridConfig {
    showTitle: boolean;
    showSubtitle: boolean;
    showViewsCount: boolean

    constructor() {
        this.showTitle = true;
        this.showSubtitle = true;
        this.showViewsCount = true;
    }
}