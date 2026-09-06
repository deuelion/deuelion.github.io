const HOMEPAGE=()=>{

    INJECTCSS("./Library/STYLES/One.css");

    DISPLAY("",`
    
        <h1 class="Test">MOVIE </h1>

        <footer>

            Hello
        
        </footer>
        
    `);

    const HOMEPAGESTYLES=`


    
    `
    INJECTCSS(HOMEPAGESTYLES);

    const Test=document.querySelector(".Test");

    Test.addEventListener("click",()=>{

        alert("Working");

    });
  
};
HOMEPAGE();