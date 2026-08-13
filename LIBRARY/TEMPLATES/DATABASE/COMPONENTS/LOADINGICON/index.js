export const LOADINGICON=(HOLDER,CALLBACK)=>{
    ICONS(HOLDER,LOADER,LOADER,(DATA)=>{
        WIDTH(DATA,"50px");
        HEIGHT(DATA,"50px");
        BACKGROUND(DATA,"transparent");
        MARGINTOP(DATA,"40vh");
        DATA.classList.add("spinner");
        const CSS=`
            .spinner {
                width: 100px;
                height: 100px;
                background: tomato;
                animation: spin 0.8s linear infinite;
            }
            @keyframes spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
        `;
        INJECTCSS(CSS);
        CALLBACK(DATA);
    });
};