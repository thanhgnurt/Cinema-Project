const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 320,
    border: "1px solid rgba(0, 0, 0, 0.2)",
    boxShadow: "0 2px 2px 2px rgba(0, 0, 0, 0.1)",
  },
  root2: {
    display: "flex",
    
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width:"100%"
  },
  tabPanel : {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 318,
    overflowX:'hidden',
    overflowY:'auto',
  },

});

export default styles;
