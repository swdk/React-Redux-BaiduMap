
export default function (state={},action){

 if (action.type ==='SEARCHED'){
   console.log("action.payload",action.payload);
   return action.payload;

 }else if(action.type ==='INIT_SEARCH'){
    //initalse search
     console.log("initialised search");
     return action.payload;

  }else{
      //redux@@INIT
      return state;

  }

}
