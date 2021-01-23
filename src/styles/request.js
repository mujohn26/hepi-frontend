export const Styles = theme => ({
    root: {
      width: "100%",
      overflowX: "auto"
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(1)
    },
    table: {
      minWidth: 750
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1
    },
    cancelButton: {
      marginTop: "10px",
      color: "white",
      "@media (max-width:780px)": {
        marginLeft: "-50px"
      },
      "@media (min-width:769px) and (max-width:1024px) ": {
        marginLeft: "-130px"
      }
    },
    updateButton: {
      marginTop: "10px",
      "@media (max-width:780px)": {
        marginLeft: "10px"
      },
      "@media (max-width:320px)": {
        marginLeft: "10px"
      },
      "@media (min-width:769px) and (max-width:1024px)": {
        marginLeft: "-90px"
      }
    },
    tableHeader: {
      fontSize: "30px",
      height: "56px"
    },
  
    Snackbar: {
      margin: "48% 40%",
      width: "800px",
      "@media (max-width:780px)": {
        margin: "150% -20%",
        width: "600px"
      }
    },
    tableCell: {
      backgroundColor: "#3660FB",
      color: "white",
      height: "50px",
      borderBottom: "  15px solid #FFFFFF"
    },
    tableCellContainer: {
      height: "40px",
      backgroundColor:"#F9FBFF",
      borderBottom: "  15px solid #FFFFFF"

    },
    Autocomplete: {
      width: "150px"
    },
    modal: {
      width: 400,
      height: 600,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
      "@media (min-width:312px) and (max-width:780px)": {
        width: 300
      }
    },
    modalHeader: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "#5d00ff",
      width: "464px",
      height: " 110px",
      marginLeft: "-8%",
      marginTop: "-4%"
    },
    photoContainer: {
      height: " 100px",
      width: "100px",
      borderRadius: " 50%",
      marginLeft: "4%",
      marginTop: "1%",
      backgroundColor: "white"
    },
    image: {
      borderRadius: "50%",
      height: " 100px",
      width: "100px"
    },
    CloseIcon: {
      color: "white",
      cursor: "pointer",
      "&:hover": {
        color: "red"
      }
    },
    hospitalTitle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      color: "white",
      textAlign: "center",
      fonteWeight: "bold",
      marginTop:'10%',
      marginLeft:'-4%'
    },
    statusBar: {
      height: "20px",
      width: "20px",
      borderRadius: "50%"
    },
    popUp: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    buttonContaier:{
      display: "flex",
      flexDirection: "row",
    justifyContent: "space-around",
    marginTop:'-40%',
  
    },
    Button:{
      // backgroundColor: "#5d00ff",
      // color:'white'
  },
  bodyContainer:{
  display:'flex',
  flexDirection:'column',
  marginBottom:'50%'
  },
  subContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  marginBottom:'2%',
  // backgroundColor:'red',
  height:'50px',
  alignItems:'center',
  boxShadow: '0.8px 0.8px 10px rgba(0, 0, 0, 0.25)',
  width:'450px',
  marginLeft:'-6%',
  borderRadius:'5px',
  "&:hover": {
    // background: "linear-gradient(180deg, #D9E8FF 0%, rgba(217, 232, 255, 0) 100%);"
    border:' 1px solid #5d00ff'
  },
  cursor:'pointer'
    
  },
  subContainer1:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'130px',
    marginLeft:'5%',
    color:'#C4C4C4',
  
  },
  subContainer2:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'150px',
    marginLeft:'5%',
    color:'#C4C4C4',
  },
  subContainer3:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'140px',
    marginLeft:'5%',
    color:'#C4C4C4',
  },
  subContainer4:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'100px',
    marginLeft:'5%',
    color:'#C4C4C4',
  },
  subContainer5:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'90px',
    marginLeft:'5%',
    color:'#C4C4C4',
  },
  subContainer6:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    width:'85px',
    marginLeft:'5%',
    color:'#C4C4C4',
  },
  infoSection:{
    marginRight:'6%',
    color:'#616161',
  },
  modalBodyTitle:{
    color:'#616161',
    fontSize:'20px'
  },
  modal: {
    width: 400,
    height: 550,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    "@media (min-width:312px) and (max-width:780px)": {
      width: 300
    }
  },
  modalService: {
    width: 400,
    height: 450,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    "@media (min-width:312px) and (max-width:780px)": {
      width: 300
    }
  },
  popUp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  TextField: {
    width: "400px",
  },
  Button:{
    width:'400px'
  },
  CloseIcon: {
    color: "#3e77fa",
    cursor: "pointer",
    marginLeft:"95%",
    "&:hover": {
      color: "red"
    }
  },
  });
  