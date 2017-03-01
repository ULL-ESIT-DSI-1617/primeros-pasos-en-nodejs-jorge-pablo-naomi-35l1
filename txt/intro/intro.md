# Introduccion a Markdown

## ¿Qué es Markdown?

[**Markdown**](https://guides.github.com/features/mastering-markdown/) es un lenguaje de marca ligero que pretende ser fácil de usar, de leer y de exportar la salida.
Entre sus usos destaca la creación de documentación y la creación de páginas web que gracias a lo sencillo que 
resulta su sintaxis y a los conversores de Markdown a HTML, convierten a este lenguaje una buena opción para aquellos 
principiantes que quieren comenzar a hacer páginas web sencillas.

## Sintaxis

```
# Esto es una cabecera
## Titulo
### Subtitulo

Ejemplo de lista no numerada:

* Elemento 1
* Elemento 2
* Elemento 3

Ejemplo de lista numerada:

1. Elemento 1
2. Elemento 2
3. Elemento 3

```

_este código tendrá una salida tal que:_  

---

# Esto es una cabecera
## Titulo
### Subtitulo

Ejemplo de lista no numerada:

* Elemento 1
* Elemento 2
* Elemento 3

Ejemplo de lista numerada:

1. Elemento 1
2. Elemento 2
3. Elemento 3

---


### - Cabeceras:

```
# Cabecera 1
## Cabecera 2
### Cabecera 3
#### Cabecera 4
##### Cabecera 5
###### Cabecera 6

```
_este código tendrá una salida tal que:_  

---

# Cabecera 1
## Cabecera 2
### Cabecera 3
#### Cabecera 4
##### Cabecera 5
###### Cabecera 6

---

### - Listas:

```
Lista sin numerar:

* Elemento
* Elemento
+ Elemento
+ Elemento
- Elemento
- Elemento

Lista numerada:

1. Elemento 1
2. Elemento 2
2. Elemento 3

```
_este código tendrá una salida tal que:_  

---
Lista sin numerar:

* Elemento
* Elemento
+ Elemento
+ Elemento
- Elemento
- Elemento

Lista numerada:

1. Elemento 1
2. Elemento 2
2. Elemento 3

_**NOTA:** como podemos observar, aunque en la lista ordenada no pongamos los numeros que corresponden, Markdown sigue ordenando 
la lista correctamente_

---

También podemos anidar listas:

```
* Elemento
    * Elemento
        + Elemento
        
1.  Elemento
    1. Elemento
        1. Elemento

```

_este código tendrá una salida tal que:_  

---

* Elemento
    * Elemento
        + Elemento
        
1.  Elemento
    1. Elemento
        1. Elemento
        
_**NOTA:** Se puede observar que dependiendo de la profundidad en la que esté posicionado el elemento de la lista, cambia
el símbolo con el que es tabulado_

---

### - Códigos de Bloque:

Podemos integrar en nuestro código Markdown bloques de código a fin de ilustrar con ejemplos.

Para ello usaremos o bien una comilla invertida `, o si queremos que sea más grande el bloque, usaremos tres para abrir y tres para cerrar

\```  
esto es un bloque de codigo

\```

_este código tendrá una salida tal que:_  

---

```  
esto es un bloque de codigo
```

---

Markdown nos da la posibilidad de mostrar el bloque de codigo con subrayado dependiendo del lenguaje:

\```ruby  
class MiClase  
    def initialize(cosas)  
        @cosas = cosas  
    end        
end  
\```

_este código tendrá una salida tal que:_  

---

```ruby
class MiClase  
    def initialize(cosas)  
        @cosas = cosas  
    end        
end  
```

---

### - Enfasis:

|Markdown|Resultado|  
|:---:|:---:|
|\*cursiva*|*cursiva*|  
|\_cursiva_|_cursiva_|  
|\*\*negrita**|**negrita**|  
|\_\_negrita__|__negrita__|  

También podemos juntar ambos estilos:

|Markdown|Resultado|  
|:---:|:---:|
|\*\*\*negrita-cursiva***|***negrita-cursiva***|  
|\_\_\_negrita-cursiva___|___negrita-cursiva___|  

### - Enlaces:

En Markdown también podemos crear enlaces, y sean páginas web, o bien a otros documentos en general.

La sintaxis que sigue es:
```
[nombre que quieres ponerle al enlace](ruta al recurso que quieres enlazar)

Ej:

[Repositorio donde esta alojado este libro](https://ull-esit-dsi-1617.github.io/tareas-iniciales-jorge-pablo-naomi/)

```

_este código tendrá una salida tal que:_  

---

[nombre que quieres ponerle al enlace](ruta al recurso que quieres enlazar)

Ej:

[Repositorio donde esta alojado este libro](https://ull-esit-dsi-1617.github.io/tareas-iniciales-jorge-pablo-naomi/)

_**NOTA:** Si el recurso enlazado no está disponible, nos dará un error cuando hagamos click en él._

---

Otra manera de añadir enlaces es la siguiente:

```
[enlace a mi página][identificador]

[identificador]: URL-pagina

Ej:

[GitHub][gh]

[gh]: https://github.com/

```

_este código tendrá una salida tal que:_  

---

[enlace a mi página][identificador]


[identificador]: URL-pagina

Ej:

[GitHub][gh]

[gh]: https://github.com/

_**NOTA:** Esto nos permite especificar la dirección del enlace en cualquier sitio del codigo para así
facilitar la lectura del mismo._

---

### - Imágenes:

Podemos añadir imágenes de manera sencilla:

```
![Texto alternativo](link a la imagen)

Ej:

![Imagen ejemplo desde Web](https://i.github-camo.com/49795e7aa84c3510ca7a56c903d1c3ecb42e896d/68747470733a2f2f636c6f75642e67697468756275736572636f6e74656e742e636f6d2f6173736574732f3337383032332f31303031333038362f32346361643233652d363134392d313165352d393065362d3636333030393231303231382e706e67)

![Imagen ejemplo desde carpeta](img/love-md.png)

```

_este código tendrá una salida tal que:_  

---

![Texto alternativo](link a la imagen)

Ej:

![Imagen ejemplo desde Web](https://i.github-camo.com/49795e7aa84c3510ca7a56c903d1c3ecb42e896d/68747470733a2f2f636c6f75642e67697468756275736572636f6e74656e742e636f6d2f6173736574732f3337383032332f31303031333038362f32346361643233652d363134392d313165352d393065362d3636333030393231303231382e706e67)

![Imagen ejemplo desde carpeta](img/love-md.png)

_**NOTA:** Como el enlace a la primera imagen no es válido, nos mostrará como si hubiese un error en la imagen ya que no la encuentra._

---

