import { Request, Response } from 'express';

import pool from '../database';

class GamesController{

    public list (req: Request, res: Response){
        const games = "SELECT * FROM games";
        pool.query(games, (err, rows) =>{
            if (err) throw err;
            else{
                res.json(rows)
            }
        })
    }

    public async getOne(req: Request, res:Response): Promise <void> {
        const games =  pool.query('SELECT * FROM games WHERE id = ?', [req.params.id], (err, rows) => {
            if (err) throw err;
            else {
                console.log(rows)
                res.json(rows[0])
            }
          })
    }

    public  async create (req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message:'Game Saved'});
    }

    public async update(req:Request, res:Response): Promise <void>{
        const {id} = req.params;
        pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The game was update'});
    }

    public delete(req: Request, res:Response){
        pool.query('DELETE FROM games WHERE id = ?', [req.params.id]);
        res.json({message: 'The game was deleted'});
    }
}

const gamesController = new GamesController();
export default gamesController;