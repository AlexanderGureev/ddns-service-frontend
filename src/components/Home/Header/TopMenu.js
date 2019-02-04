import React, { useState } from "react";
import { useStore, useAction } from "easy-peasy";
import { Menu } from "./styles";

const TopMenu = props => {
  const { isAuth } = useStore(state => state.session);
  const { logoutUserAction } = useAction(dispatch => dispatch.session);
  const [loading, setLoading] = useState(false);

  const logout = async e => {
    if (loading) return e.preventDefault();
    setLoading(true);
    e.preventDefault();
    await logoutUserAction();
    setLoading(false);
  };

  return (
    <Menu>
      <Menu.Item to="/managed">Dynamic DNS</Menu.Item>
      <Menu.Item to="/managed">Managed DNS</Menu.Item>
      <Menu.Item to="/managed">Domains</Menu.Item>
      <Menu.Item to="/managed">Services</Menu.Item>

      {isAuth ? (
        <Menu.Button onClick={logout} loading={loading}>
          Log out
        </Menu.Button>
      ) : (
        <Menu.ButtonLink to="/login">Log in</Menu.ButtonLink>
      )}
    </Menu>
  );
};
export default TopMenu;
