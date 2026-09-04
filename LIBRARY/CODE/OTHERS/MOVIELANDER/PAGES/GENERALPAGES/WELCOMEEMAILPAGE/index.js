export const MOVIELANDERWELCOMEEMAIL =()=>{

    const EMAIL=`

        <!DOCTYPE html>

        <html>

        <head>

            <meta charset="UTF-8">

        </head>

        <body style="
            margin:0;
            padding:0;
            background:#050505;
            font-family:Arial,sans-serif;
        ">

            <div style="
                max-width:650px;
                margin:auto;
                padding:40px;
                background:#111;
                color:white;
                border-radius:20px;
            ">

                <h1 style="
                    color:#7c5cff;
                    font-size:40px;
                ">
                    Hello
                </h1>

                <p style="
                    color:#ccc;
                    font-size:18px;
                ">
                    Welcome to Elite Robust Ontology.
                </p>

                <div style="
                    padding:20px;
                    background:#222;
                    border-radius:12px;
                ">

                    Your account is now active.

                </div>

                <br>

                <a href="https://example.com"
                style="
                    display:inline-block;
                    padding:14px 25px;
                    background:#7c5cff;
                    color:white;
                    text-decoration:none;
                    border-radius:10px;
                ">

                    Continue

                </a>

            </div>

        </body>

        </html>
    
    `;
    SESSIONSTORE("WELCOMEMESSAGE",EMAIL);
};