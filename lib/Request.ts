import fetch from 'cross-fetch';
import { URL } from 'url';


export default class Request {
    private readonly baseURL: string;

    constructor() {
        this.baseURL = "https://api.jikan.moe/v4";
    }

    async send(args: (string | number)[], params?: { [key: string]: string | number }): Promise<any> {
        const res = await fetch(this.createUrl(args, params));
        const data = await res.json();
        if (res.status !== 200) throw new Error(`Response: ${res.status}`);
        else return data;
    }

    private createUrl(args: (string | number)[], params?: { [key: string]: string | number }): string {
        const url = new URL(this.baseURL);
        url.pathname += `/${args.filter(a => a).join("/")}`;
        for (const p in params) {
            url.searchParams.set(p, params[p].toString());
        }
        return url.href;
    }
}
