// const navItems = ["Home", "About", "Contact"];

import { useNavigate } from "react-router-dom";

// const navugate = useNavigate()

export const navItems = [
  {
    label: "Home",
    link: "/",
    both: true,
  },
  {
    label: "Products",
    link: "/products",
    both: true,


  },
  {
    label: "Login",
    link: "/login",
    auth_required: false,
  },
  {
    label: "Signup",
    link: "/signup",
    auth_required: false,
  },
  {
    label: "Cart",
    link: "/cart",
    auth_required: true,
  },
  {
    label: "Wishlist",
    link: "/wishlist",
    auth_required: true,
  },
  {
    label: "Dashboard",
    link: "/dashboard",
    auth_required: true,
  },

];




export const navItem = [
  {
    label: "Home",
    link: "/",
    both: true,
  },
  {
    label: "Products",
    link: "/products",
    both: true,


  },
  {
    label: "Login",
    link: "/login",
    auth_required: false,
  },
  {
    label: "Signup",
    link: "/signup",
    auth_required: false,
  },
  {
    label: "Cart",
    link: "/cart",
    auth_required: true,
  },
  {
    label: "Wishlist",
    link: "/wishlist",
    auth_required: true,
  },
  {
    label: "Dashboard",
    link: "/dashboard",
    auth_required: true,
  },

];

