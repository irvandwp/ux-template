export class ActivityData {
    id: string;
    thumbnailUrl: string;
    timestamp: number;
    activityType: string;
    subtitle: string;
    description: string;
    iconUrl: string;

    constructor() {
        this.id = '';
        this.thumbnailUrl = '';
        this.timestamp = 0;
        this.activityType = '';
        this.subtitle = '';
        this.description = '';
        this.iconUrl = '';
    }
}