import React, { useEffect } from "react";
import { useState } from "react";
import Logo from "./Logo";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Switch,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import { ArgentinaIcon } from "./Argentina";
import { InglesIcon } from "./Inlges";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lenguajes, setLenguajes] = useState("Español");

  const menuItems = ["Sobre Mi", "Habilidades", "Proyectos", "Contacto"];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Switch
          defaultSelected
          size="lg"
          color="secondary"
          thumbIcon={({ isSelected, className }) =>
            isSelected
              ? (setLenguajes("Español"),
                (<ArgentinaIcon className={className} />))
              : (setLenguajes("Inglish"),
                (<InglesIcon className={className} />))
          }
        >
          {lenguajes}
        </Switch>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Sobre Mi
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Habilidades
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Proyectos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Switch
            defaultSelected
            size="lg"
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <SunIcon className={className} />
              ) : (
                <MoonIcon className={className} />
              )
            }
          >
            Dark mode
          </Switch>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Menu;
