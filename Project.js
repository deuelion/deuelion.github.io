const HOMEPAGE=()=>{

    DISPLAY("",`
    
        <h1 class="Test">MOVIE </h1>
        
    `);

    const HOMEPAGESTYLES=`

        h1{

            color:red;
        }
    
    `
    INJECTCSS(HOMEPAGESTYLES);

    const Test=document.querySelector(".Test");

    Test.addEventListener("click",()=>{

        alert("Working");

    });
  
};
HOMEPAGE();