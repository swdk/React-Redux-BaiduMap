
export default function (state=null,action){
  if (action!="USER_SELECTED"){
    return [
        {
            id:"1",
            lat: "39.915 ",
            lng: "116.404"
        }
      ]
  }else{
    return state;
  }
}
