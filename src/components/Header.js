import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    flexGrow: 1,
    color: "rgb(0,0,0)",
    marginLeft: theme.spacing(2),
  },
  logo: {
    marginTop: theme.spacing(1),
    "&:hover": {
      cursor: "pointer",
    },
  },
  button: {
    color: "rgb(0,0,0)",
    padding: "10px 10px",
    marginRight: "10px",
    fontSize: 12,
    fontWeight: 400,
  },
  appBar: {
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function Header() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { items } = useContext(CartContext);
  const cartItems = () => {
    if (items.length > 0) {
      return items.length;
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.header}>
            <img
              className={classes.logo}
              onClick={() => navigate("/")}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/300px-Logo_NIKE.svg.png"
              width="70px"
              height="25px"
              alt="Nike"
            />
          </Typography>
          <Button className={classes.button} onClick={() => navigate("/")}>
            <strong>Home</strong>
          </Button>
          <Button
            className={classes.button}
            onClick={() => navigate("Products")}
          >
            <strong>Products</strong>
          </Button>
          <Button
            className={classes.button}
            onClick={() => navigate("LimitedEdition")}
          >
            <strong>Limited Edition</strong>
          </Button>
          <Button onClick={() => navigate("Login")}>
            <AccountCircleOutlinedIcon />
          </Button>
          <Button onClick={() => navigate("Cart")}>
            <Badge badgeContent={cartItems()} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
