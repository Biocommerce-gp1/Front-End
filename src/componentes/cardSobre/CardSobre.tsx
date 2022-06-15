import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <><Card sx={{ maxWidth: 300 }}>

            <CardMedia
                component="img"
                height="194"
                image="https://i.imgur.com/hnfCyqF.jpg"
                alt="Amanda Lobo" />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Desenvolvedora Full Stack Java Jr.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="LinkedIn">
                <a href="https://www.linkedin.com/in/bruna-leitao/" target='_blank'></a>
                    <LinkedIn />
                </IconButton>
                <IconButton aria-label="GitHub">
                    <GitHub />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Amanda Lobo</Typography>
                    <Typography paragraph>
                        Amante da tecnologia, estou sempre em constante busca
                        por evolução e aprendizagem para melhor desenvoltura
                        pessoal e profissional.
                        Detalhista, focada, comunicativa, apaixonada pelo
                        conhecimento, insaciável por novos desafios e irrefreável
                        na resolução de problemas, procuro me alocar na área
                        da Tecnologia afim de desenvolver minhas habilidades
                        técnicas, transmitir e absorver novos aprendizados
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
        
        <Card sx={{ maxWidth: 300 }}>

                <CardMedia
                    component="img"
                    height="194"
                    image="https://i.imgur.com/ZykQ5kF.jpg"
                    alt="Bruna Leitão" />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Desenvolvedora Full Stack Java Jr.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="LinkedIn">
                    <a href="https://www.linkedin.com/in/bruna-leitao/" target='_blank'></a>
                        <LinkedIn />
                    </IconButton>
                    <IconButton aria-label="GitHub">
                        <GitHub />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Bruna Leitão</Typography>
                        <Typography paragraph>
                            Amante da tecnologia, estou sempre em constante busca
                            por evolução e aprendizagem para melhor desenvoltura
                            pessoal e profissional.
                            Detalhista, focada, comunicativa, apaixonada pelo
                            conhecimento, insaciável por novos desafios e irrefreável
                            na resolução de problemas, procuro me alocar na área
                            da Tecnologia afim de desenvolver minhas habilidades
                            técnicas, transmitir e absorver novos aprendizados
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card></>
    );
}
