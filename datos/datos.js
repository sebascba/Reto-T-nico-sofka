export const datos = [
    {
        'categoria': 1,
        'pregunta': 'Una clase es una agrupación de',
        'opciones': ['Datos y funciones', 'Separadores y símbolos', 'Objetos y literales', 'Miembros'],
        'respuesta': 'Datos y funciones' 
    },
    {
        'categoria': 1,
        'pregunta': '¿Qué clases son accesibles desde otras clases, bien sea directamente o por herencia?',
        'opciones': ['Final', 'Abstract', 'Public', 'Miembros'],
        'respuesta': 'Public'
    },
    {
        'categoria': 1,
        'pregunta': '¿Qué clase se utiliza como base para la herencia',
        'opciones': ['Final', 'Abstract', 'Public', 'Miembros'],
        'respuesta': 'Abstract'
    },
    {
        'categoria': 1,
        'pregunta': '¿Qué clase se declara como la clase que termina una cadena de herencia',
        'opciones': ['Final', 'Abstract', 'Public', 'Miembros'],
        'respuesta': 'Final'
    },
    {
        'categoria': 1,
        'pregunta': 'Una interface es un conjunto de:',
        'opciones': ['Declaraciones de funciones', 'Objetos', 'Literales', 'Miembros'],
        'respuesta': 'Declaraciones de funciones'
    },
    {
        'categoria': 2,
        'pregunta': 'En java todas las clases tiene',
        'opciones': ['Interfaces', 'Miembros', 'Una superclase', 'Simbolos'],
        'respuesta': 'Una superclase'
    },
    {
        'categoria': 2,
        'pregunta': 'Cada objeto que se crea tiene su propia:',
        'opciones': ['Declaracion por uno de los modificadores de acceso', 'Objetos creados de la clase', ' Constante', 'Copias de las variables miembro'],
        'respuesta': 'Copias de las variables miembro'
    },
    {
        'categoria': 2,
        'pregunta': 'Los nombres de los packages son separados por:',
        'opciones':['Puntos', 'Coma', 'Puntos y coma', 'Diagonales'],
        'respuesta': 'Puntos'
    },
    {
        'categoria': 2,
        'pregunta': '¿En dónde se almacena los packages?',
        'opciones': ['Ficheros', 'Documentos', 'Directorios', 'Internet'],
        'respuesta': 'Directorios'
    },
    {
        'categoria': 2,
        'pregunta': '¿Cuál es el dominio de nombres de java',
        'opciones': ['Ficheros', 'Documentos', 'Directorios', 'Internet'],
        'respuesta': 'Internet',
    },
    {
        'categoria': 3,
        'pregunta': ' En java, la entrada desde teclado y la salida a pantalla están reguladas a traves de la clase: ',
        'opciones': ['System', 'Abstract', 'Final', 'Public'],
        'respuesta': 'System'
    },
    {
        'categoria': 3,
        'pregunta': 'La clase System pertenece al package:',
        'opciones': ['Java.applet', 'Java.io', 'Java.net', 'Java.lang'],
        'respuesta': 'Java.lang'
    },
    {
        'categoria': 3,
        'pregunta': 'La ejecucion siempre comienza por el programa o método:',
        'opciones': ['main()', 'classpath', '(mensaje)', '(string mensaje)' ],
        'respuesta': 'main()'
    },
    {
        'categoria': 3,
        'pregunta': 'Qué es un array en java',
        'opciones': ['Un fichero','Un objeto', 'Un directorio', 'Una interface'],
        'respuesta': 'Un objeto'
    },
    {
        'categoria': 3,
        'pregunta': '¿Qué es la clase file?',
        'opciones': ['Un array', 'Un miembro', 'Una representación abstracta de ficheros y directorios', 'Una interface'],
        'respuesta': 'Una interface'
    },
    {
        'categoria': 4,
        'pregunta': '¿A cuales métodos los arrays se pasan como argumento?',
        'opciones': ['Por indice', 'Por referencia', 'Por internet', 'Ninguna de las anteriores'],
        'respuesta': 'Por referencia'
    },
    {
        'categoria': 4,
        'pregunta': 'A qué clase pertenece la siguiente definición: "lee bytes y los transforma en caracteres"',
        'opciones': ['OutputStreamWriter', 'InputStreamReader', 'Ninguna de las anteriores', 'PublicStreamReader'],
        'respuesta':  'InputStreamReader',
    },
    {
        'categoria': 4,
        'pregunta': 'A qué clase pertenece la siguiente definición: "los caracteres escritos se transforman previamente en bytes"',
        'opciones': ['Ninguna de las anteriores','OutputStreamWriter', 'InputStreamReader', 'PublicStreamReader'],
        'respuesta': 'OutputStreamWriter',
    },
    {
        'categoria': 4,
        'pregunta': '¿Que clase es una representación abstracta de ficheros y directorios',
        'opciones': ['final', 'booblean', 'File', 'Nothin'],
        'respuesta': 'File'
    },
    {
        'categoria': 4,
        'pregunta': 'A qué clase pertenece la siguiente definición: " abre un fichero de texto en modo lectura',
        'opciones': ['FileReader', 'Ninguna de las anterires', 'FileWriter', 'FileOutput'],
        'respuesta': 'FileReader'
    },
    {
        'categoria': 5,
        'pregunta': 'A qué clase pertenece la siguiente definición: "abre un fichero de texto en modo escritura"',
        'opciones': ['FileReader','FileWriter', 'FileOutput', 'Ningun de las anteriores'],
        'respuesta': 'FileWriter'
    },
    {
        'categoria': 5,
        'pregunta': 'Que hace el metodo void write (int car) en la clase BufferedWriter',
        'opciones': ['Escribe un carácter en el fichero', 'Escribe una porcion de un array de caracteres en el fichero', 'Ninguna de las anteriores', 'Escribe una porción de una cadena de caracteres en el fichero'],
        'respuesta': 'Escribe un carácter en el fichero'
    },
    {
        'categoria': 5,
        'pregunta': '¿Qué hace el método void writer (char []buffer, in offset, int len) en la clase BufferedWriter:',
        'opciones': ['Escribe un carácter en el fichero', 'Ninguna de las anteriores', 'Escribe una porción de un array de caracteres en el fichero', 'Escribe una porción de una cadena de caracteres en el fichero'],
        'respuesta': 'Escribe una porción de un array de caracteres en el fichero'
    },
    {
        'categoria': 5,
        'pregunta': 'Qué hace el método void Writer(String cadena, int offset, int len) en la clase bufferedWriter', 
        'opciones': ['Escribe un carácter en el fichero', 'Escribe una porción de un array de caracteres', 'Escribe una porción de un array de caracteres en el fichero', 'Escribe una porción de una cadena de caracteres en el fichero'],
        'respuesta': 'Escribe una porción de una cadena de caracteres en el fichero'
    },
    {
        'categoria': 5,
        'pregunta':'¿Qué hace el método void close() de la clase brufferedWriter?',
        'opciones': ['Ninguna de las anteriores', 'cierra el flujo de escritura(cierra el fichero)', 'vuelca el contenido del buffer al fichero', ' Escribe un salto de línea en el fichero'],
        'respuesta': 'cierra el flujo de escritura(cierra el fichero)'
    },
]