## Instalar y ejecutar

Para correr la aplicación se necesita docker. Instrucciones para instalar docker para distintas plataformas las puede encontrar en [Docker](https://www.docker.com/get-started).

Una vez instalado docker, ejecutar `docker-compose build`.

Una vez hecho el build de la aplicación es necesario ejecutar `docker-compose up`, lo cual levantará los diferentes servicios.

Para correr las migraciones sobre el contenedor de persistencia es necesario ingresar al contenedor con `docker exec -it bruno_app bash` y al interior de éste ejecutar `node_modules/.bin/sequelize db:migrate`.

Para ejecutar los test es necesario correr `npm run test`. Esto es posible hacerlo afuera del contenedor.

Para que los servicios puedan comunicarse es necesario modificar el archivo hosts:

```
sudo /etc/hosts
```

Y mapear lo siguiente:

```
127.0.0.1 bruno_app
127.0.0.1 auth_service
```

## Dependencias extras utilizadas.

La aplicación utiliza las siguientes dependencias no exigidas:

- **concurently**: permite correr dos instancias de servidores de express de manera paralela. Se esta utilizando para generar le microservicio de autenticación.
- **node-fetch**: se utiliza tanto para testear endpoints como para comunicarse con el microservicio.
- **nock**: se utiliza para testear endpoints de la aplicación.
- **nodemon**: se utiliza para tener un hot-reloading de la aplicación en tiempo real.

## Estado de las tareas por programar.

- el microservicio no se encuentra terminado.
- la estrategia de autenticación JWT no se encuentra implementada en la aplicación.
- no es posible cambiar los estados de los tickets siendo usuario administrador.
- el endpoint que recibe mayor información para los tickets no esta implementado. Tampoco el modelo es capaz de recepcionar en uno de sus atributos mayor informacion como campo opcional, a la creación de tickets ya expuesta por el endpoint.
