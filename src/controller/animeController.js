import {Router} from 'express'
import res from 'express/lib/response';
import {InserirAnimes , DeletarAnime} from '../repository/animeRepository.js'

server.post('/anime' ,async (req,resp)=>{
    try{
        const anime=req.body.anime;
        const x=InserAnime(anime);
        resp.send({
            anime:x
        })
}
    catch(err){
        res.status(406).send({
            erro:err.message
        })
    }
})

server.delete('/anime/:id' , async(req,resp)=>{
    try {
        const {id}= req.params;
        const x=DeletarAnime(id);
        resp.status(206);
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
    }
})