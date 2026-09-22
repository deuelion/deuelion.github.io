export const FUNCTIONED=(HOLDER,ASSIGNMENT,CALLBACK)=>{
    HOLDER.addEventListener(ASSIGNMENT,()=>{
        CALLBACK(HOLDER);
    });
};