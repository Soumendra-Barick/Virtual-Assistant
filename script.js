let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice")

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.pitch = 1;
  text_speak.volume = 1;
  text_speak.lang = "hi-GB";
  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  let day = new Date();
  let hours = day.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good Morning Sir");
  } else if (hours >= 12 && hours < 16) {
    speak("Good Afternoon Sir");
  } else {
    speak("Good Evening Sir");
  }
}

window.addEventListener('load', () => {
    wishMe();
});
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
   let currentIndex = event.resultIndex
   let transcript = event.results[currentIndex][0].transcript
   content.innerText = transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display = "none"
    if(message.includes("hello") || message.includes("hey")){
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who are you")){
        speak("I am virtual assistant ,created by Soumendra Sir")
    }
    else if(message.includes("who is your owner")){
        speak("soumendra sir is my owner")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube....")
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google....")
        window.open("https://www.google.co.in","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram....")
        window.open("https://www.instagram.com/","_blank")
    }
    else if(message.includes("open twitter")){
        speak("opening twitter....")
        window.open("https://x.com","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook....")
        window.open("https://www.facebook.com","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator....")
        window.open("calculator://")
    }
    else if(message.includes("open chatgpt")){
        speak("opening chatgpt....")
        window.open("https://openai.com/chatgpt/","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp....")
        window.open("https://web.whatsapp.com/","_blank")
    }
    else if(message.includes("open spotify")){
        speak("opening spotify....")
        window.open("https://open.spotify.com/","_blank")
    }
    else if(message.includes("open playstore")){
        speak("opening playstore....")
        window.open("https://play.google.com/","_blank")
    }
    else if(message.includes("open contact")){
        speak("opening contact....")
        window.open("https://contacts.google.com/","_blank")
    }
    else if(message.includes("open chrome")){
        speak("opening chrome....")
        window.open("https://chrome.google.com/","_blank")
    }
    else if(message.includes("open phone")){
        speak("opening phone....")
        window.open("https://www.google.com/phone/","_blank")
    }
    else if(message.includes("open map")){
        speak("opening map....")
        window.open("https://www.google.com/maps","_blank")
    }
    else if(message.includes("open gmail")){
        speak("opening gmail....")
        window.open("https://mail.google.com/","_blank")
    }
    else if(message.includes("open file")){
        speak("opening file....")
        window.open("https://files.google.com/","_blank")
    }
    else if(message.includes("open telegram")){
        speak("opening telegram....")
        window.open("https://telegram.org/","_blank")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube....")
        window.open("https://music.youtube.com/","_blank")
    }
    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
        let finalText = "this is what i found on internet regarding" + message.replace("shifra","") || message.replace("shipra","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra","")}`,"_blank")
    }
}
