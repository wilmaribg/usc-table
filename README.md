<<<<<<< HEAD
# usc-model-component

Paquete de tareas gulp para la creación de componentes Vue.js

## Instalación

Para desccargar y empezar a trabajar seguir los siguientes comandos

1. $ git clone https://github.com/wilmaribg/usc-model-component.git usc-my-component
2. $ cd usc-my-component
3. $ npm install
4. $ gulp 

## Uso

Todo el paquete es manejado desde la carpeta **scr** donde:

* **src/component.js:**  contiene la lógica del componente 
* **src/component.scss:**  contiene los estilos del componente
* **src/template.html:**  contiene el html del componente
* **src/index.html:**  archivo para pruebas
=======
# usc-table

VueJS Component, para la reprensentación de tablas.

### Constucción del componente
```javascript
/**
 *  Estos son los valores que seran enviados en la petición para formar la consulta sql
 *  [ q, orderBy, initFrom ] Estos datos son bidireccionales
 *  Nota: todos estos campos son requeridos por el component
 */
{
	"dataSource": "[]", // array de datos
	"q": { "value": "some value", "field" : "name" }, // Buscar
	"orderBy": {"field": "name", "type": "DESC"}, // Campo por el cual se va a ordenar
	"initFrom": 0, // Número de registros por peticion
	"totalRecords" : 10000, // Cantidad de registros en la base de datos para la paginacion
	"records2show" : 10 // Cantidad de registros a mostar por cada pagina
	"changePage": "function("prev" || "next", obj)"
}
```

### Datos por campo
```javascript
/**
 * Estos son los valores para cada campo de la tabla
 * Nota: Solo "value" es requerido
 */
{
	"type": "text || select || checkbok",  // Tipo del campo
	"value": "some value", // Valor del campo
	"event": "function(obj)", // Eventos "Esta parte esta por definir"
	"enum" : [ { "value":"some value", "display": "text" } ] // Select options o checkox value 
}

```

### Nota: 
La palabra obj hace referencia al objeto del primer JSON que son los datos que recibe el componente sin el "dataSource" y el "changePage"
>>>>>>> cb4a2465f9346014ef86927ac34c18d31f9374cd
