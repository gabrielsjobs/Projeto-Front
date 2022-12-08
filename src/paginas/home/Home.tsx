import React, { useEffect } from 'react';
import './Home.css'
import { Grid, Typography, Button } from '@material-ui/core'
import { Box } from '@mui/material'
import TabPostagem from '../../components/postagem/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagem/modalPostagem/ModalPostagem';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    useEffect(() => {
        if (token == '') {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='caixa '>
                <Grid alignItems='center' item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='titulo mtop' >Seja bem vindo(a)!</Typography>
                        <Typography variant='h5' gutterBottom color='textPrimary' component='h5' align='center' className='titulo' >Aproveite para explorar o site!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
            <Grid container direction='row' justifyContent='center' alignItems='center' className='caixa2' >
                <Grid item xs={6}>
                    <Box>
                        <Typography variant='h4'>Encontre usuarios que estão passando por situações similiares para que possam ajudar um ao outro e profissionais dispostos à ajudar.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} className='caixa2'>
                    <img src='https://cdn.discordapp.com/attachments/1023722354892869694/1048246433234563182/Sem_titulo-removebg-preview.png' alt="" width='500px' height='500px'></img>
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
