import Request from './Request';

describe('Request', () => {
    let request: Request;

    beforeEach(() => {
        request = new Request();
    });

    it('should create a URL with the correct path and query parameters', async () => {
        const args = ['anime', 1];
        const params = { page: 1, limit: 10 };
        const expectedUrl = 'https://api.jikan.moe/v4/anime/1?page=1&limit=10';

        const url = request['createUrl'](args, params);

        expect(url).toEqual(expectedUrl);
    });
});