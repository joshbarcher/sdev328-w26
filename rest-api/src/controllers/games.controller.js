import * as service from './../services/games.service.js';

export const allGames = (req, res) => {
    const games = service.getAll();

    if (games) return res.status(200).json(games);
    else return res.status(404).json({ message: "No games found!" });
}

export const gameById = (req, res) => {
    const { id } = req.query;
    const game = service.getById(id);
    console.log(game)
    
    if (game) return res.status(200).json(game);
    else return res.status(404).json({ message: "No game found!" });
}

export const getGenres = (req, res) => {

}