import { con } from "./connection"

export default function InserirAnime(anime){
    const comando='insert into tb_anime( id_anime, nm_anime) values( ? , ? )';
    const resp =await con.query(comando)
    return resp;
}

export default function DeletarAnime(anime){
    const comando=
    'delete id_anime , nm_anime from tb_anime'
    const resp=await con.query (comando,[id,nome]);
    return resp;
}