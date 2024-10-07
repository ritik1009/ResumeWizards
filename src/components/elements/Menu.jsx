import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NavLink, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../../Firebase/firebase";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArticleIcon from "@mui/icons-material/Article";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import HelpIcon from "@mui/icons-material/Help";
import HomeIcon from "@mui/icons-material/Home";

export default function Menu() {
  const data = useSelector((state) => state.user.currentUser);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function logout() {
    setLoading(true);
    await logoutRedux(dispatch);
    setLoading(false);
    navigate("/login");
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {Object.keys(data).length === 0 ? (
          <>
            <NavLink to="login">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
            </NavLink>

            <NavLink to="signUp">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AddCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="SignUp" />
                </ListItemButton>
              </ListItem>
            </NavLink>
            </>
        ) : (
          <ListItem disablePadding>
            <ListItemButton onClick={logout}>
              {loading ? (
                <ListItemText primary="Loading.." />
              ) : (
                <>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </>
              )}
            </ListItemButton>
          </ListItem>
        )}
        <NavLink to="#">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon/>
              </ListItemIcon>
              <ListItemText primary="Templates" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to="#">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NewspaperIcon />
              </ListItemIcon>
              <ListItemText primary="Blogs" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to="#">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <NavLink to="/home">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
    </Box>
  );

  return (
    <div>
      {/* For mobile screen */}
      
        <React.Fragment key={"right"}>
          <Button onClick={toggleDrawer("right", true)}>
            <MenuIcon className="text-green-600 " />
          </Button>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            className="sm:hidden"
          >
            <div className="flex flex-start items-center p-2 ">
              <ArrowForwardIcon
                onClick={toggleDrawer("right", false)}
                className="cursor-pointer"
              />
            </div>
            {list("right")}
          </Drawer>
        </React.Fragment>
    </div>
  );
}
