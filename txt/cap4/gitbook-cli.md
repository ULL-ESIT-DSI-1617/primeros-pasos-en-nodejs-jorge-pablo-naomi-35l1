# Capítulo 4: Gitbook-cli

## 3.1 ¿Qué es Gitbook-cli?

[**Gitbook-cli**](https://www.npmjs.com/package/gitbook-cli) es un paquete implementado en Node.js disponible desde el gestor de paquetes 'npm' mencionado en el capítulo anterior. Nos proporciona herramientas con el fin de facilitar la creación, gestión y publicación de un libro en la plataforma GitBook también mencionada.

## 3.2 ¿Cómo instalar Gitbook-cli?

Podemos hacerlo de dos maneras:

**1. Para un proyecto**

```
npm install gitbook-cli --save
```

**2. De manera global**

```
npm install -g gitbook-cli
```

## 3.3 ¿Cómo usar Gitbook-cli?

El primer uso que nos puede interesar es el crear un libro. Para ello utilizaremos:

```
gitbook init <book_name>
```

_donde **book_name** es el nombre del libro que queremos crear_

Además podemos 'publicar' el libro de manera local con el fin de testear el libro como si estuviese publicado en Internet. Para ello utilizaremos:

```
gitbook serve
```

_**Nota:** una vez hecho esto, podremos visualizar nuestro libro desde el navegador en la URL que nos especifique la salida por pantalla del comando_


Otra de las herramientas interesantes que pone este paquete a nuestra disposición es la posibilidad de obtener el código de una página estática (implementada en HTML, CSS, JavaScript) con el fin de poder visualizar nuestro libro desde el navegador. Podremos hacer uso de esta herramienta de la siguiente manera:

```
gitbook build
```

_de esta manera obtendremos dentro del directorio donde se encuentre nuestro libro, un subdirectorio **_book** que contendrá todo el código correspondiente a la página desde la que podemos ver nuestro libro.
**Nota:** Este paso se automatiza cuando realizemos `gitbook serve` de modo que si ya hemos desplegado nuestro libro en local, no necesitamos hacer el `gitbook build` de nuevo_