const axios = require("axios");
const localUrl = 'http://localhost:3000'
const igdbUrl = 'https://api.igdb.com/v4'


class ControllerGames {
    
    //? ALL GAMES
    // GET https://api.igdb.com/v4/games
    // GET /games
    // LIMIT 20 GAMES
    static async readAllGames (req, res, next){
        try {
            const games = await axios({
                url: `${igdbUrl}/games`,
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Client-ID' : process.env.TWITCH_CLIENT_ID,
                    'Authorization' : `Bearer ${process.env.TWITCH_ACCESS_TOKEN}`,
                },
                data: "fields name, genres, category, release_dates, summary, cover, involved_companies, url, storyline, tags, videos; limit 20;"
              })

        } catch (error) {
            next(error)
            console.log('ERROR FROM GET ALL GAMES CONTROLLER : ', error);
        }
    }
}

module.exports = ControllerGames