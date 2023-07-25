import JikanNode from '../src/jikan-node';
import Request from '../src/lib/Request';

jest.mock('./lib/Request');

describe('JikanNode', () => {
    let jikan: JikanNode;

    beforeEach(() => {
        jikan = new JikanNode();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('findAnime', () => {
        it('should call Request.send with the correct arguments', async () => {
            const mockResponse = { id: 1, title: 'Cowboy Bebop' };
            const mockSend = jest.spyOn(Request.prototype, 'send').mockResolvedValueOnce(mockResponse);

            const id = 1;
            const request = 'stats';
            const page = 1;

            const response = await jikan.findAnime(id, request, page);

            expect(mockSend).toHaveBeenCalledWith(['anime', id, request, page]);
            expect(response).toEqual(mockResponse);
        });
    });

    describe('findManga', () => {
        it('should call Request.send with the correct arguments', async () => {
            const mockResponse = { id: 1, title: 'Death Note' };
            const mockSend = jest.spyOn(Request.prototype, 'send').mockResolvedValueOnce(mockResponse);

            const id = 1;
            const request = 'reviews';
            const page = 2;

            const response = await jikan.findManga(id, request, page);

            expect(mockSend).toHaveBeenCalledWith(['manga', id, request, page]);
            expect(response).toEqual(mockResponse);
        });
    });

    describe('findPerson', () => {
        it('should call Request.send with the correct arguments', async () => {
            const mockResponse = { id: 1, name: 'Spike Spiegel' };
            const mockSend = jest.spyOn(Request.prototype, 'send').mockResolvedValueOnce(mockResponse);

            const id = 1;
            const request = 'pictures';

            const response = await jikan.findPerson(id, request);

            expect(mockSend).toHaveBeenCalledWith(['person', id, request]);
            expect(response).toEqual(mockResponse);
        });
    });

    describe('findCharacter', () => {
        it('should call Request.send with the correct arguments', async () => {
            const mockResponse = { id: 1, name: 'Edward Elric' };
            const mockSend = jest.spyOn(Request.prototype, 'send').mockResolvedValueOnce(mockResponse);

            const id = 1;
            const request = 'pictures';

            const response = await jikan.findCharacter(id, request);

            expect(mockSend).toHaveBeenCalledWith(['character', id, request]);
            expect(response).toEqual(mockResponse);
        });
    });

    describe('search', () => {
        it('should call Request.send with the correct arguments', async () => {
            const mockResponse = { results: [{ id: 1, title: 'Attack on Titan' }] };
            const mockSend = jest.spyOn(Request.prototype, 'send').mockResolvedValueOnce(mockResponse);

            const type = 'anime';
            const title = 'Attack on Titan';
            const param = { page: 1, score: 8 };

            const response = await jikan.search(type, title, param);

            expect(mockSend).toHaveBeenCalledWith(['search', type], { q: title, ...param });
            expect(response).toEqual(mockResponse);
        });
    });

    describe('findSeason', () => {
        it('should call Request.send with the correct arguments', async () => {
            const mockResponse = { season_name: 'Summer', season_year: 2021 };
            const mockSend = jest.spyOn(Request.prototype, 'send').mockResolvedValueOnce(mockResponse);

            const season = 'summer';
            const year = 2021;

            const response = await jikan.findSeason(season, year);

            expect(mockSend).toHaveBeenCalledWith(['season', year, season]);
            expect(response).toEqual(mockResponse);
        });
    });

    describe('findSchedule', () => {
        it('should call Request.send with the correct arguments', async () => {
            const mockResponse = { monday: [{ id: 1, title: 'Naruto' }] };
            const mockSend = jest.spyOn(Request.prototype, 'send').mockResolvedValueOnce(mockResponse);

            const day = 'monday';

            const response = await jikan.findSchedule(day);

            expect(mockSend).toHaveBeenCalledWith(['schedule', day]);
            expect(response).toEqual(mockResponse);
        });
    });

    describe('findTop', () => {
        it('should call Request.send with the correct arguments', async () => {
            const mockResponse = { top: [{ id: 1, title: 'Fullmetal Alchemist: Brotherhood' }] };
            const mockSend = jest.spyOn(Request.prototype, 'send').mockResolvedValueOnce(mockResponse);

            const type = 'anime';
            const page = 1;
            const subtype = 'upcoming';

            const response = await jikan.findTop(type, page, subtype);

            expect(mockSend).toHaveBeenCalledWith(['top', type, page, subtype]);
            expect(response).toEqual(mockResponse);
        });
    });

    describe('findGenre', () => {
        it('should call Request.send with the correct arguments', async () => {
            const mockResponse = { anime: [{ id: 1, title: 'One Piece' }] };
            const mockSend = jest.spyOn(Request.prototype, 'send').mockResolvedValueOnce(mockResponse);

            const type = 'anime';
            const id = 1;
            const page = 2;

            const response = await jikan.findGenre(type, id, page);

            expect(mockSend).toHaveBeenCalledWith(['genre', type, id, page]);
            expect(response).toEqual(mockResponse);
        });
    });

    describe('findProducer', () => {
        it('should call Request.send with the correct arguments', async () => {
            const mockResponse = { position: 'Producer', anime: [{ id: 1, title: 'Cowboy Bebop' }] };
            const mockSend = jest.spyOn(Request.prototype, 'send').mockResolvedValueOnce(mockResponse);

            const id = 1;
            const page = 1;

            const response = await jikan.findProducer(id, page);

            expect(mockSend).toHaveBeenCalledWith(['producer', id, page]);
            expect(response).toEqual(mockResponse);
        });
    });

    describe('findMagazine', () => {
        it('should call Request.send with the correct arguments', async () => {
            const mockResponse = { manga: [{ id: 1, title: 'Death Note' }] };
            const mockSend = jest.spyOn(Request.prototype, 'send').mockResolvedValueOnce(mockResponse);

            const id = 1;
            const page = 1;

            const response = await jikan.findMagazine(id, page);

            expect(mockSend).toHaveBeenCalledWith(['producer', id, page]);
            expect(response).toEqual(mockResponse);
        });
    });

    describe('findUser', () => {
        it('should call Request.send with the correct arguments', async () => {
            const mockResponse = { username: 'john_doe', anime: [{ id: 1, title: 'Attack on Titan' }] };
            const mockSend = jest.spyOn(Request.prototype, 'send').mockResolvedValueOnce(mockResponse);

            const username = 'john_doe';
            const request = 'animelist';
            const data = 'completed';
            const param = { page: 1, sort: 'score', search: 'attack' };

            const response = await jikan.findUser(username, request, data, param);

            expect(mockSend).toHaveBeenCalledWith(['user', username, request, data], param);
            expect(response).toEqual(mockResponse);
        });
    });

    describe('findClub', () => {
        it('should call Request.send with the correct arguments', async () => {
            const mockResponse = { id: 1, name: 'Anime Club' };
            const mockSend = jest.spyOn(Request.prototype, 'send').mockResolvedValueOnce(mockResponse);

            const id = 1;
            const request = 'members';

            const response = await jikan.findClub(id, request);

            expect(mockSend).toHaveBeenCalledWith(['club', id, request]);
            expect(response).toEqual(mockResponse);
        });
    });
});