import { Image } from "react-native";

function Reelfield ({size}){
 return(
    <Image 
    style={{width:size,height:size}} 
    source={require("./../assets/Reels.png")}/>
 )   
}

function Avatar ({size}){
    <Image 
    source={require("./../assets/Avatar.png")}
     style ={{width:size,height:size}} />
}
function Logo({size}) {
   return (
      <Image source={require("./../assets/logo.png")}
   style={{height:44, width:150 ,marginTop:15,marginLeft:10, backgroundColor:"white"}}/>
   )
}
function Messenger() {
   return (
      <Image source={require("./../assets/messenger.png")}
   style={{width:30,height:30}}
   />
   )
}
// function Logo({size}) {
//    return (
//       <Image source={require("./../assets/logo.png")}
//    style={{height:30, width:104 , backgroundColor:"white"}}/>
//    )
// }
export {Reelfield,Avatar,Logo,Messenger}