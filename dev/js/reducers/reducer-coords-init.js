  export default function (state=null,action){

   if (action.type ==='USER_SELECTED'){

        console.log("USER_SELECTED !@redcuer")
        return action.payload;

    }else if(action.type ==='INIT_MAP'){
      //initalse map
       console.log("initialised map");
       return action.payload;

    }else {

      return state;
    }





}
