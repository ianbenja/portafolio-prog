import React, { useEffect, useState } from "react";
import Logo from "./Logo";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Switch,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ArgentinaIcon } from "./Argentina";
import { InglesIcon } from "./Inlges";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("Español");
  const [selectedItem, setSelectedItem] = useState(0); // Estado del ítem seleccionado

  const menuItems = ["home", "sobremi", "proyects", "contact"];

  const handleMenuItemClick = (index) => {
    setSelectedItem(index); // Actualiza el estado del ítem seleccionado
    setIsMenuOpen(false); // Cierra el menú cuando se hace clic en un elemento
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="sm:hidden"
        />
        <Switch
          defaultSelected
          size="lg"
          color="secondary"
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <ArgentinaIcon className={className} />
            ) : (
              <InglesIcon className={className} />
            )
          }
          onChange={() =>
            setLanguage(language === "Español" ? "Inglés" : "Español")
          }
        >
          {language}
        </Switch>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item}-${index}`}
            isActive={selectedItem === index}
          >
            <Link
              color={selectedItem === index ? "primary" : "foreground"}
              href={`#${item}`}
              size="lg"
              onClick={() => handleMenuItemClick(index)}
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={selectedItem === index ? "primary" : "foreground"}
              className="w-full"
              href={`#${item}`}
              size="lg"
              onClick={() => handleMenuItemClick(index)}
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
