export class BlogPageInfo {
    title: string;
    text: string;
    image: string;
    path: string;

    constructor(title: string, text: string, image: string) {
        this.title = title;
        this.text = text;
        this.image = image;
        this.path = encodeURI(title);
    }
}