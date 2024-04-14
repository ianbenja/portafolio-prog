import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

const Proyecto = () => {
  const handleEntrarApp = () => {
    window.open(
      "http://jugadores-futbol.s3-website-sa-east-1.amazonaws.com",
      "_blank"
    );
  };
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Proyecto Portafolio
          </p>
          <h4 className="text-black font-medium text-2xl">
            Portafolio de los pibardos
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="/images/card-example-6.jpeg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Disponible pronto.</p>
            <p className="text-black text-tiny">Si queres apurame .</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Apurar
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Proyecto Futbol
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Crea tu mejor equipo de futbol
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="/images/card-example-5.jpeg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Futbol App</p>
              <p className="text-tiny text-white/60">
                Entra a darle un vistazo.
              </p>
            </div>
          </div>
          <Button onClick={handleEntrarApp} radius="full" size="sm">
            Entrar a la app
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Proyecto;
