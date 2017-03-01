# Capítulo 3: Node.js

## 3.1 ¿Qué es Node.js?

[**Node.js**](https://nodejs.org/es/) es un entorno de ejecución para JavaScript, escrito en C++.  
Es de código abierto, asíncrono y orientado a eventos para la capa del servidor \(pero no limitándose a ello\) basado en el estándar ECMAScript.

## 3.2 ¿Cómo instalar Node.js?

En una terminal, escribimos:

```
 curl -sL https://deb.nodesource.com/setup_Y.x | sudo -E bash -
 sudo apt-get install -y nodejs
```

_donde **Y** es la versión que queremos instalar._

## 3.3 NPM

### 3.3.1 ¿Qué es NPM?

El ecosistema de paquetes de Node.js por defecto, npm, es uno de los ecosistemas más grandes de librerías de código abierto del mundo. npm está escrito en JavaScript y consiste en una línea de comandos que permite a los usuarios utilizar y distribuir módulos.

Además, cuando se utiliza para proyectos locales, permite instalar todas las dependencias necesarias para dicho proyecto, de forma local o global, utilizando la información contenida en el archivo package.json con un solo comando.

### 3.3.2 ¿Cómo usar NPM?

* Para crear el archivo package.json en nuestro proyecto y especificar en él dependencias y metadatos del mismo:

```
npm init
```

* Para instalar dependencias desde un archivo package.json:

```
npm install
```

* Para instalar un paquete de forma **local** en nuestro proyecto:

```
npm install < nombre_paquete >
```

* Para instalar un paquete de forma **global** en nuestra máquina:

```
npm install -g < nombre_paquete >
```

* Si lo que queremos es, además de instalar dependencias, añadirlas al fichero package.json:

  ```
  npm install < nombre_paquete > --save
  ```

  * Para incluirlas como dependencias de desarrollo:

  ```
  npm install < nombre_paquete > --save-dev
  ```



