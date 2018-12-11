## Instalar y ejecutar

Para correr la aplicación se necesita docker. Instrucciones para instalar docker para distintas plataformas las puede encontrar en [Docker](https://www.docker.com/get-started).

Una vez instalado docker, ejecutar `docker-compose build`. Este comando le permitirá ejecutar tanto la api, como los tests.

Una vez hecho el build de la aplicación es necesario ejecutar `docker-compose up`, lo cual levantará los diferentes servicios.

Para correr las migraciones sobre el contenedor de persistencia es necesario ingresar al contenedor con `docker exec -it bruno_app bash` y al interior de éste ejecutar `node_modules/.bin/sequelize db:migrate`.

Para ejecutar los test es necesario correr `npm run test`. Esto es posible hacerlo afuera del contenedor.
