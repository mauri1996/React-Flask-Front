import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FoundYears from '../FoundYears';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../img/back_3.jpg'
import Typography from '@material-ui/core/Typography';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {           
      //paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
      display: 'flex',
      //backgroundImage: `url(${Image})`          
    },
    containerTotal: {           
      paddingTop: theme.spacing(4),
      //paddingBottom: theme.spacing(4),      
      backgroundImage: `url(${Image})`,
      textAlign:'center',         
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      'max-height': '420px',
    },
    fixedHeight: {
      height: 240,
    },
  }));

export const Page1 = ({params}) =>{

    const verificarTitulo = () =>{
      switch (tipo){
        case 'consulta1':
          return (
            <h2>                      
              Retrasos por Ruta
            </h2>                
          );
        case 'consulta2':
            return (
              <h2>                      
                Retrasos por Aerolínea
              </h2>                
            );
        case 'consulta3':
          return (
            <h2>                      
              Retrasos por Aerolínea + clima + ruta
            </h2>                
          );
        case 'consulta4':
          return (
            <h2>                      
              Retrasos por Aerolínea + Mes
            </h2>                
          );
        case 'consulta5':
          return (
            <h2>                      
              Número de vuelos por año
            </h2>                
          );
      default:
        return( <div>Datos no encontrados</div>);
    }
  } 
    const {tipo} = params

    ////console.log({tipo})
    const classes = useStyles();
    const anios = [1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997 ,1998,1999,2000, 2001, 2002,2003,2004,2005,2006,2007,2008 ]
    
    return(
      <Container maxWidth="lg" className={classes.containerTotal} >
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {verificarTitulo()}
        </Typography>
        

        <Container maxWidth="lg" className={classes.container} > 
            <Grid container spacing={3}> 
            {
                anios.map((anio,index) => 
                    <Grid item xs={6} key={index} >
                      <Paper className={classes.paper}  >                          
                          <FoundYears 
                                  año={anio} 
                                  consulta= {tipo}
                          />                
                      </Paper>                           
                    </Grid>                    
                )
            }
          </Grid>
        </Container>
      </Container>
        
    );
}