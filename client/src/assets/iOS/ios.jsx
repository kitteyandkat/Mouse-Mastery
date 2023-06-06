import { useState } from "react";
import '../ios/ios.css';
import { IonIcon } from '@ionic/react'
import {
  cellularOutline,
  wifiOutline,
  batteryHalfOutline,
  flashlight,
  camera,
  videocam,
  star,
  logoAppleAppstore,
  call,
  logoXbox,
  logoPlaystation,
  logoSnapchat,
  musicalNotes,
  chatbubbleOutline,
  mailOutline,
  bookOutline,
  tvOutline,
  homeOutline,
  heart,
  logoFacebook,
  logoInstagram,
  logoTwitter,
  logoYoutube,
  logoPinterest,
  logoGithub,
  logoWhatsapp,
} from 'ionicons/icons';

function iOSClone() {
  const left = () => {
    document.querySelector('.applications').classList.toggle('active-slide');
    document.querySelector('.span1').classList.add('active-screen');
    document.querySelector('.span2').classList.remove('active-screen');
  };

  const right = () => {
    document.querySelector('.applications').classList.toggle('active-slide');
    document.querySelector('.span1').classList.remove('active-screen');
    document.querySelector('.span2').classList.add('active-screen');
  };

  const openMenu = () => {
    document.querySelector('.lock-screen').classList.replace('active', 'animate-lock-screen');
    document.querySelector('.lock-screen').style.height = '0';
    document.querySelector('.application-menu').classList.add('active');
  };

  //grab current date
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  
  const currentDayOfWeek = date.getDay();
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentMonth = months[month];
  
 let phoneDate = `${weekdays[currentDayOfWeek]}, ${currentMonth} ${day}`;
  
//grab current time 
let hour = date.getHours();
const minutes = date.getMinutes();

// Convert to 12-hour format
hour = hour % 12;
hour = hour ? hour : 12;

// Add leading zeros
const currentHour = hour.toString().padStart(2, '0');
const currentMinutes = minutes.toString().padStart(2, '0');

let time = `${currentHour}:${currentMinutes}`

  return (
    <div className="iphone-frame">
      <div className="norch">
        <div className="rounded"></div>
      </div>
      <div className="nav">
        <div className="left"></div>
        <div className="right">
          <IonIcon icon={cellularOutline} />
          <IonIcon icon={wifiOutline} />
          <IonIcon icon={batteryHalfOutline} />

        </div>
      </div>

      <div className="app-container">
        <div className="bg-img">
          <div className="bg-frame">
            <div className="extra"></div>
            <div className="extra_2"></div>
          </div>
        </div>
        <div className="lock-screen active">
          <div className="time">
            <h1>{time}</h1>
            <span>{phoneDate}</span>
          </div>
          <div className="scr-lock-nav">
            <div className="left">
              <button className="r-deg command-utility">
                <IonIcon icon={flashlight} />
              </button>
            </div>
            <div className="right ">
              <button className="command-utility">
                <IonIcon icon={camera} />
              </button>
            </div>
          </div>
          <div className="open-button" onClick={openMenu}>
            click me to open
          </div>
        </div>
        <div className="application-menu">
          <div className="applications">
            <div id="slide_1" className="slide-1">
              <div className="icon-sect">
                <div className="icon">
                  <button className="facetime green-icon">
                    <IonIcon icon={videocam} />
                  </button>
                  <label>FaceTime</label>
                </div>

                <div className="icon">
                  <button className="camera">
                    <IonIcon icon={camera} />
                  </button>
                  <label>Camera</label>
                </div>

                <div className="icon">
                  <button className="bi-envelope-fill mail">
                    <IonIcon icon={mailOutline} />
                  </button>
                  <label>Mail</label>
                </div>

                <div className="icon">
                  <button className="bi-book-fill ibook">
                    <IonIcon icon={bookOutline} />
                  </button>
                  <label>iBooks</label>
                </div>

              </div>

              <div className="icon-sect">

                <div className="icon">
                  <button className="itunestore">
                    <IonIcon icon={star} />
                  </button>
                  <label className="itunes">iTunes Store</label>
                </div>

                <div className="icon">
                  <button className="bi-apple apple-tv">
                    <IonIcon icon={tvOutline} />
                  </button>
                  <label>Apple TV</label>
                </div>

                <div className="icon">
                  <button className="appstore">
                    <IonIcon icon={logoAppleAppstore} />
                  </button>
                  <label>App Store</label>
                </div>

                <div className="icon">
                  <button className="green-icon">
                    <IonIcon icon={call} />
                  </button>
                  <label>Phone</label>
                </div>

              </div>

              <div className="icon-sect">

                <div className="icon">
                  <button className="bi-house-fill home">
                    <IonIcon icon={homeOutline} />
                  </button>
                  <label>Home</label>
                </div>

                <div className="icon">
                  <button className="itune music">
                    <IonIcon icon={musicalNotes} />
                  </button>

                  <label>itune</label>
                </div>

                <div className="icon">
                  <button className="green-icon">
                    <IonIcon icon={chatbubbleOutline} />
                  </button>
                  <label>Message</label>
                </div>

                <div className="icon">
                  <button className="bi-heart-fill health">
                    <IonIcon icon={heart} />
                  </button>
                  <label>Health</label>
                </div>

              </div>

              <div className="icon-sect">

                <div className="icon">
                  <button className="xbox-app">
                    <IonIcon icon={logoXbox} />
                  </button>
                  <label>Xbox</label>
                </div>

                <div className="icon">
                  <button className="playstation-app">
                    <IonIcon icon={logoPlaystation} />
                  </button>
                  <label>Playstation</label>
                </div>

                <div className="icon">
                  <button className="messenger-app  ">
                    <span className="bi-messenger"></span>
                    <img className="icon-svgs" src='/img/iOS/messenger_icon.svg'></img>
                  </button>
                  <label>Messenger</label>
                </div>

                <div className="icon">
                  <button className="bi-spotify spotify-app">
                    <img className="icon-svgs" src='/img/iOS/Spotify_icon.svg'></img>
                  </button>
                  <label>Spotify</label>
                </div>

              </div>
            </div>
            <div id="slide_2" className="slide-1  active-slide">
              <div className="icon-sect">

                <div className="icon">
                  <button className="green-icon facebook-app bi-facebook">
                    <IonIcon icon={logoFacebook} />
                  </button>
                  <label>Facebook</label>
                </div>

                <div className="icon">
                  <button className="instagram-app bi-instagram">
                    <IonIcon icon={logoInstagram} />
                  </button>
                  <label>Instagram</label>
                </div>

                <div className="icon">
                  <button className="twitter-app  bi-twitter  ">
                    <IonIcon icon={logoTwitter} />
                  </button>
                  <label>Twitter</label>
                </div>

                <div className="icon">
                  <button className="bi-pinterest pinterest-app">
                    <IonIcon icon={logoPinterest} />
                  </button>
                  <label>Pinterest</label>
                </div>

              </div>
              <div className="icon-sect">

                <div className="icon">
                  <button className="facetime github-app bi-github">
                    <IonIcon icon={logoGithub} />
                  </button>
                  <label>Github</label>
                </div>

                <div className="icon">
                  <button className="youtube-app bi-youtube">
                    <IonIcon icon={logoYoutube} />
                  </button>
                  <label>YouTube</label>
                </div>

                <div className="icon">
                  <button className="whatsapp-app  bi-whatsapp  ">
                    <IonIcon icon={logoWhatsapp} />
                  </button>
                  <label>WhatsApp</label>
                </div>

                <div className="icon">
                  <button className=" snapchat-app">
                    <IonIcon icon={logoSnapchat} />
                  </button>
                  <label>Snapchat</label>
                </div>

              </div>
            </div>
          </div>
          <div className="indicators">
            <span onClick={left} className="active-screen span1"></span>
            <span onClick={right} className=" span2"></span>
          </div>
          <div className="bottom-navigation">
            <div className="button-app phone-log">
              <IonIcon icon={call} />
            </div>
            <div className="button-app music ">
              <IonIcon icon={musicalNotes} />
            </div>
            <div className="button-app message">
              <IonIcon icon={chatbubbleOutline} />
            </div>
            <div className="button-app appstore">
              <IonIcon icon={logoAppleAppstore} />
            </div>
          </div>
        </div>
      </div>

      <div className="button"></div>

    </div>
  )

}

export default iOSClone;