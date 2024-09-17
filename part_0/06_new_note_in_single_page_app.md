```mermaid
sequenceDiagram
    participant browser as "Speedy Browser"
    participant server as "Wise Server"

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>browser: Redirection message (Don’t go anywhere!)
    deactivate server

    Note right of browser: "The browser wonders if it did the right thing sending the note."

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document (The key to the content!)
    deactivate server

    Note right of server: "Server: ‘Hope you find this HTML delightful.’"

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file (Making sure it doesn’t look too dull!)
    deactivate server

    Note right of browser: "The browser starts feeling the page is getting stylish."

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: JavaScript file (Let’s make the page come alive!)
    deactivate server

    Note right of browser: "The browser gets into action mode to run the JavaScript."

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON file (Here’s the data you asked for!)
    deactivate server

    Note right of server: "Server: ‘Don’t worry, here’s your JSON. Ready to be used!’"

    browser->>server: GET https://studies.cs.helsinki.fi/favicon.ico
    activate server
    server-->>browser: Favicon file (The final touch for the page!)
    deactivate server

    Note right of browser: "The browser feels complete with the favicon; the page now has style!"
    ```
