import { Stream } from './stream';

export class FeaturedStream {
    image: string;
    priority: number;
    scheduled: boolean;
    sponsored: boolean;
    stream: Stream;
    text: string;
    title: string;
}