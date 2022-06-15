import React, { useEffect } from 'react'
import { Typography, Box, Grid, Button, Card, CardContent, CardActions } from '@material-ui/core';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import './SobreNos.css';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CardSobre from '../../componentes/cardSobre/CardSobre';

function SobreNos() {

  const navigate = useNavigate()

  return (
    <>
     <CardSobre />
   </>
  );
}

export default SobreNos