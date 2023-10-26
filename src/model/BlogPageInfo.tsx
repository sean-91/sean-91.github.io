export class BlogPageInfo {
    title: string;
    text: string;
    images: ImageWithInfo[];
    path: string;

    constructor(title: string, text: string, images: ImageWithInfo[]) {
        this.title = title;
        this.text = text;
        this.images = images;
        this.path = encodeURIComponent(title);
    }
}

export class ImageWithInfo {
    image: string;
    date: string;
    location: string;

    constructor(image: string, date: string, location: string) {
        this.image = image;
        this.date = date;
        this.location = location;
    }
}
