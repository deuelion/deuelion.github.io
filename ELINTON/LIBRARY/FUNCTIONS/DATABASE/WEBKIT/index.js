export const WEBKIT=()=>{
    const style = document.createElement('style');
    style.textContent = `
        ::-webkit-scrollbar{
            display:none;
            width: 10px;
            background: transparent;
        }
        ::-webkit-scrollbar-thumb{
            display:block;
            width: 10px;
            height:10px;
            border:1px solid transparent;
            border-radius:50px;
            background: transparent;
        }
        audio::-webkit-media-controls-enclosure {
            border: none ;
            border-radius: 0 ;
            box-shadow: none ;
            outline: none;
        }
    `;
    document.head.appendChild(style);
};