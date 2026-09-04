export const MOVIELANDERWELCOMEBACKEMAIL =()=>{
    const EMAIL=`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>

        <body style="
            width:100%;
            height:100%;
            margin:0;
            padding:0;
            background:#f2f4f8;
            font-family:Arial, Helvetica, sans-serif;
            color:#222;
        ">
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
            style="background:#f2f4f8; padding:35px 15px;">
            <tr>
                <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" border="0"
                    style="
                        max-width:600px;
                        width:100%;
                        background:#ffffff;
                        border-radius:18px;
                        overflow:hidden;
                        box-shadow:0 5px 25px rgba(0,0,0,0.08);
                    ">
                    <tr>
                        <td align="center"
                            style="
                                background:linear-gradient(135deg,#111827,#312e81);
                                padding:45px 25px;
                                color:#ffffff;
                            ">

                            <img
                                style="width:100px;height:100px;font-size:38px;margin-bottom:12px"
                                src="https://deuelion.github.io/LIBRARY/ASSETS/DATABASE/CLOUDEMAIL/MovieLander.png"
                            />

                            <h1 style="
                                margin:0;
                                font-size:30px;
                                letter-spacing:1px;
                            ">
                                MOVIE LANDER
                            </h1>

                            <p style="
                                margin:12px 0 0;
                                font-size:15px;
                                color:#dbeafe;
                            ">
                                Account Security Alert
                            </p>

                        </td>
                    </tr>
                    <tr>
                        <td style="padding:40px 35px 20px;">

                            <p style="
                                margin:0 0 10px;
                                font-size:16px;
                                color:#6b7280;
                            ">
                                Hello,User Of Email Below:
                            </p>

                            <h2 style="
                                margin:0 0 18px;
                                font-size:27px;
                                color:#111827;
                            ">
                                ${sessionStorage.getItem("UserEmail")}
                            </h2>

                            <p style="
                                margin:0;
                                font-size:16px;
                                line-height:1.7;
                                color:#4b5563;
                            ">
                                We detected a new login to your
                                <strong>Movie Lander</strong> account.
                                If this was you, you can safely ignore this
                                message. If you don't recognize this activity,
                                please report it immediately.
                            </p>

                        </td>
                    </tr>
                    <tr>
                        <td style="padding:10px 35px 25px;">

                            <table width="100%" cellpadding="0" cellspacing="0"
                                style="
                                    background:#f8fafc;
                                    border-radius:12px;
                                    padding:20px;
                                ">

                                <tr>
                                    <td style="
                                        padding:8px 0;
                                        font-size:14px;
                                        color:#6b7280;
                                    ">
                                        <strong style="color:#111827;">
                                            Login Time:
                                        </strong>
                                        ${localStorage.getItem("USER_TIMEZONE")}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="
                                        padding:8px 0;
                                        font-size:14px;
                                        color:#6b7280;
                                    ">
                                        <strong style="color:#111827;">
                                            Device:
                                        </strong>
                                        ${localStorage.getItem("Device")}
                                    </td>
                                </tr>

                                <tr>
                                    <td style="
                                        padding:8px 0;
                                        font-size:14px;
                                        color:#6b7280;
                                    ">
                                        <strong style="color:#111827;">
                                            Location:
                                        </strong>
                                        ${localStorage.getItem("TIMEZONE")}
                                    </td>
                                </tr>

                            </table>

                        </td>
                    </tr>

                    <!-- SECURITY WARNING -->
                    <tr>
                        <td style="padding:5px 35px 25px;">

                            <div style="
                                background:#fef2f2;
                                border-left:4px solid #dc2626;
                                padding:18px;
                                border-radius:8px;
                            ">

                                <p style="
                                    margin:0;
                                    font-size:14px;
                                    line-height:1.6;
                                    color:#991b1b;
                                ">
                                    <strong>Wasn't you?</strong><br>
                                    If you did not make this login, your account
                                    may have been accessed by someone else.
                                    Report the login immediately so we can help
                                    protect your account.
                                </p>

                            </div>

                        </td>
                    </tr>

                    <!-- REPORT BUTTON -->
                    <tr>
                        <td align="center" style="padding:10px 35px 35px;">
                            <a href="https://eliterobustontologygroup.github.io"
                                target="_blank"
                                style="
                                    display:inline-block;
                                    padding:16px 32px;
                                    background:#dc2626;
                                    color:#ffffff;
                                    text-decoration:none;
                                    font-size:15px;
                                    font-weight:bold;
                                    border-radius:10px;
                                ">
                                Report This Login
                            </a>

                            <p style="
                                margin:15px 0 0;
                                font-size:12px;
                                color:#9ca3af;
                            ">
                                Only use this link if you do not recognize
                                the login activity.
                            </p>

                        </td>
                    </tr>

                    <!-- SECURITY MESSAGE -->
                    <tr>
                        <td style="padding:0 35px;">

                            <div style="
                                height:1px;
                                background:#e5e7eb;
                            "></div>

                        </td>
                    </tr>

                    <tr>
                        <td align="center"
                            style="padding:30px 35px;">

                            <h3 style="
                                margin:0 0 10px;
                                color:#111827;
                                font-size:19px;
                            ">
                                Keep Your Account Secure
                            </h3>

                            <p style="
                                margin:0;
                                font-size:14px;
                                line-height:1.6;
                                color:#6b7280;
                            ">
                                Never share your Movie Lander password or
                                verification codes with anyone. If you notice
                                suspicious activity, report it immediately.
                            </p>

                        </td>
                    </tr>

                    <!-- FOOTER -->
                    <tr>
                        <td align="center"
                            style="
                                background:#111827;
                                padding:25px 20px;
                                color:#9ca3af;
                            ">

                            <div style="
                                color:#ffffff;
                                font-size:15px;
                                font-weight:bold;
                                margin-bottom:8px;
                            ">
                                MOVIE LANDER
                            </div>

                            <p style="
                                margin:0;
                                font-size:11px;
                                line-height:1.6;
                            ">
                                This is an automated security email.
                                Please do not reply directly to this message.
                            </p>

                            <p style="
                                margin:10px 0 0;
                                font-size:11px;
                            ">
                                © 2026 Movie Lander. All rights reserved.
                            </p>

                        </td>
                    </tr>

                </table>

            </td>
        </tr>
        </table>
        </body>
        </html>
    `;
    SESSIONSTORE("WELCOMEMESSAGE",EMAIL);
};