```mermaid
sequenceDiagram
    participant browser as "Navegador Rápido"
    participant server as "Servidor Sabio"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: Mensaje de redirección (¡No te vayas!)
    deactivate server

    Note right of browser: "El navegador se pregunta si hizo lo correcto enviando la nota."

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: Documento HTML (¡La clave del contenido!)
    deactivate server

    Note right of server: "Servidor: 'Espero que este HTML te guste.'"

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: Archivo CSS (¡Para que no se vea todo tan aburrido!)
    deactivate server

    Note right of browser: "El navegador empieza a notar que la página se está poniendo elegante."

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: Archivo JavaScript (¡Vamos a darle vida a la página!)
    deactivate server

    Note right of browser: "El navegador se prepara para ejecutar el JavaScript."

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: Archivo JSON (¡Aquí tienes los datos que pediste!)
    deactivate server

    Note right of server: "Servidor: 'No te preocupes, aquí está tu JSON. ¡Listo para usar!'"

    browser->>server: GET https://studies.cs.helsinki.fi/favicon.ico
    activate server
    server-->>browser: Archivo favicon (¡El toque final para la página!)
    deactivate server

    Note right of browser: "El navegador se siente completo con el favicon; ¡la página ahora tiene estilo!"
    ```
