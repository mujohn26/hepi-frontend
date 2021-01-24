 
export const Styles = theme => ({
    TextField:{
        height:"2px",
        
    },
    Button:{
        height:"50px",
        ['@media (max-width:780px)']: {
          width: '100px',
          height:"30px"
        },
    },
    StaffButton:{
      height:"30px",
      marginLeft:"35%",
      backgroundColor:"#e6ecfe",
      color:"#3660FB"
    },
    root: {
        width: '100%',
      },
      button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
 
      },
      actionsContainer: {
        marginBottom: theme.spacing(2),
      },
      resetContainer: {
        padding: theme.spacing(3),
      },
      drawer:{
        width:"540",
        backgroundColor:"red"
      }

});