import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Categoria';
import { buscaId, post, put } from '../../../services/Service';


function CadastroCategoria() {
  
    return (
        <Container maxWidth="sm" className="topo">
            <form>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de Cadastro Categoria</Typography>
                <TextField id="secao" label="secao" variant="outlined" name="secao" margin="normal" fullWidth />
                <TextField id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroCategoria;