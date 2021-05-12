import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({

  container: {
    minWidth: "3rem",
    marginBottom: "3rem",
  },

  titulo: {
    fontSize: "1.2rem",
  },

  data: {
    marginBottom: "1rem",
  },
});


export function CardTheme({theme}) {
  const classes = useStyles();


  const bull = <span>•</span>
  return (
          <Card className={classes.container}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom className={classes.titulo}>
              {theme.titulo}
              </Typography>
              <Typography color="textSecondary" className={classes.data}>
                {theme.dataInicio} {bull} {theme.dataFim}
              </Typography>
              <Typography color="textPrimary" variant="body2" component="p">
              {theme.requisitos}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                Learn More
              </Button>
            </CardActions>
          </Card>
  );
}