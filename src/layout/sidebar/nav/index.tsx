import { memo, useCallback } from "react";

import React from "react";
import { Menu, MenuProps } from "antd";
import { AppRoutes } from "@route/AppRoutes";
import Restaurent from "@assets/restaurent.svg";
import UserGroup from "@assets/usergroup.svg";
import Catalog from "@assets/catalog.svg";
import Dish from "@assets/dish.svg";
import Cash from "@assets/cash.svg";
import Dashboard from "@assets/dashboard.svg";
import { useNavigate } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem(
    "DashBoard",
    AppRoutes.dashboard,
    <img src={Dashboard} width={20} height={"auto"} />
  ),
  getItem(
    "Restaurent",
    "1",
    <img src={Restaurent} width={20} height={"auto"} />,
    [
      getItem("Restaurent Management", AppRoutes.restaurent.index),
      getItem("Option 2", "Option 2"),
    ]
  ),

  getItem(
    "Users",
    "Users",
    <img src={UserGroup} width={20} height={"auto"} />,
    [
      getItem("User Management", "User Management"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]
  ),

  getItem("Catalog", "3", <img src={Catalog} width={20} height={"auto"} />, [
    getItem("Option 9", "9"),
    // getItem("Option 10", "10"),
  ]),
  getItem("Dishes", "4", <img src={Dish} width={20} height={"auto"} />, [
    getItem("Dishes Managament", "10"),
    // getItem("Option 10", "10"),
    // getItem("Option 11", "11"),
    // getItem("Option 12", "12"),
  ]),
  getItem("ShipFree", "5", <img src={Cash} width={20} height={"auto"} />, [
    getItem("ShipFree Managament", "11"),
    // getItem("Option 10", "10"),
    // getItem("Option 11", "11"),
    // getItem("Option 12", "12"),
  ]),
  { type: "divider" },
  getItem(
    "Group",
    "grp",
    null,
    [getItem("Option 13", "13"), getItem("Option 14", "14")],
    "group"
  ),
];

const NavParent = memo(() => {
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = useCallback(
    (e: any) => {
      navigate(e?.keyPath[0]);
      //   console.log("click ", navigate(e?.keyPath[0]));
    },
    [navigate]
  );
  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: 260 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["Restaurent"]}
        mode="inline"
        items={items}
      />
    </>
  );
});
export default NavParent;
