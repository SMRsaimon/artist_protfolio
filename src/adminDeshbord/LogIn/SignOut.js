



// signOut user 
export const signOut=(cb)=>{

        if(typeof window !== "undefined"){

            localStorage.removeItem("token")
            cb()
        }
}