export const ROUTE = (NEWPAGE, FUNCTION, FUNCTIONBACK) => {
    sessionStorage.setItem("PreviousPage", FUNCTIONBACK);
    CONDITION(NEWPAGE,()=>{
        history.pushState({ data: FUNCTION() }, "", "");
    },()=>{
        history.replaceState({ data: FUNCTION() }, "", "");
    });
    FUNCTIONED(window,"popstate",(x)=>{
        const previousPageFunction = sessionStorage.getItem("PreviousPage");
        CHECK(previousPageFunction,()=>{
            const func = new Function("return " + previousPageFunction)();
            func();
        });
    });
};