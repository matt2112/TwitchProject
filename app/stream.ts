import { Channel } from './channel';

export class Stream {
    _id: number;
    _links: Object;
    average_fps: number;
    channel: Channel;
    created_at: string;
    delay: number;
    game: string;
    is_playlist: boolean;
    preview: Object;
    video_height: number;
    viewers: number;
}