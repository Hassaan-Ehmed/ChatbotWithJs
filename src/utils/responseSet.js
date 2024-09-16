const userMsgSet = {

    welcomeMsgs:["hello","hi","salam","assalam o aliukum"],
    optionsMsgs:[{no:1,option:"Water"},{no:2,option:"Lift"},{no:3,option:"Sewerage"},{no:4,option:"Seapage"},{no:5,option:"Electrical"}],
}



export function BotReply(myMsg){

    // bot will reply according to my msg 
    
    // Checking msg type that Welcome msg from user OR It's a Selected option by user.  
    
    let msg = +myMsg; //parse into integer.
    
    if(isNaN(msg)){ // it's a msg
        
    
        for(let index = 0; index < userMsgSet.welcomeMsgs.length; index++){

            if(myMsg.toLowerCase() === userMsgSet.welcomeMsgs[index]){
                
                // Welcome template + options to select 
                
                const welcomeTemplate = "Welcome UVdesk Support, I'm your Assistant !   If any problem or any issue,  I'm here to help you   Please select your complain type :    1.Water 2.Lift 3.Sewerage 4.Seapage 5.Electrical"
                

                return welcomeTemplate;
                

        }else if(index === 3 && myMsg.toLowerCase() === "okay"){

            const byeByeTemplate = "Yeah , Is there anything else you'd like to discuss or ask? Feel free to ask me anything.  I'm here to help & resolve your issue !";

                return  byeByeTemplate ;
        
        }else if(index === 3 && myMsg.toLowerCase() !== "okay"){
            
            const complainRegisterTemp = `Your complain is successfully submited, in our UVDesk Support Center.  Your issue is resolved ASAP  Here is your Ticket no:  Ticket #${Math.floor(Math.random()*3999)}   Thank you for contacting !`;

                return complainRegisterTemp;  // Waiting + Generating your Ticket Number'
        }else{

            return "Sorry, I didn't understand your message.";
        }




        }
 
            
    
    }else{ // selected option by user

        for(let index = 0; index < userMsgSet.optionsMsgs.length; index++){

            if(msg === userMsgSet.optionsMsgs[index].no){
                
                const templateMsg = `Please write your complain below against your ${userMsgSet.optionsMsgs[index].option} issue.`
                
                return templateMsg;
            }
            
        }

    }



}