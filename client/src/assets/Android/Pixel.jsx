import { useState, useEffect } from "react";
import './pixel.css'


function PixelClone() {
  // Declare state variables and their initial values using useState
  const [ispower, setIsPower] = useState(true);
  const [mlTask, setMlTask] = useState(false);
  const [isTask1, setIsTask1] = useState(false);
  const [isRecent, setIsRecent] = useState(false);
  const [isApp, setIsApp] = useState([]);
  const [backApp, setBackApp] = useState(false);
  const [imageCount, setImageCount] = useState(0);
  const [galleryBack, setGalleryBack] = useState(1);
  const [power, setPower] = useState(true);
  const [cursorStyle, setCursorStyle] = useState({ display: 'none' });
  const [lockScreen, setLockScreen] = useState(false);
  const [errorCount, setErrorCount] = useState(0);
  const [blockCount, setBlockCount] = useState(0);
  const [bootDisplay, setBootDisplay] = useState("block");

  const apps = {gallery = {img:}}
  
  const images = [
      // '', 
      // 'linear-gradient(to top, #ba28ff, #34b1e9',
      //tree
    '/img/tree-background',
    // //galaxy 1
    //   'https://i.imgur.com/pY7oXcf.jpg?1',
    // //chipmunk
    //   'https://i.imgur.com/3PNeJEF.jpg',
    // //galaxy
    //   'https://i.imgur.com/lAbkcgd.jpg?1',
    // //angry bird
    //   'https://i.imgur.com/4tl9iDn.jpg?1',
    // //candle
    //   'https://i.imgur.com/47P3XE2.jpg',
    // //heros
    //   'https://i.imgur.com/fTUf2IB.jpg?1',
    // //brain
    //   'https://i.imgur.com/dgspQ4H.jpg?1',
    // //batman gif
    //   'https://i.imgur.com/tfvkewq.gif',
    // //hanging light
    //   'https://i.imgur.com/cdIo6zN.gif',
    // //circle
    //   'https://i.imgur.com/TYkkUEZ.gif',
    // //galaxy2
    //   'https://i.imgur.com/IT0GNh8.jpg',
    // //joker
    //   'https://i.imgur.com/00kMu62.jpg?1',
    // //android-logo-background
    //   'https://i.imgur.com/yWBfb2N.png?1',
    // //hulk
    //   'https://i.imgur.com/hhoaJP3.jpg?1',
    // //flash lantern
    //   'https://i.imgur.com/kfHvcuI.jpeg',
    // //BabyBocca
    //   'https://i.imgur.com/ECc7mUt.jpg',
    // // wolf-landscape
    //   'https://i.imgur.com/HbPdiuK.jpg',
    // //tree-spirits
    //   'https://i.imgur.com/wKKIezT.jpg',
    // //android2-background
    //   'https://i.imgur.com/TPfGuM7.png?1',
    // //superheroloader (replace)
    //   'https://i.imgur.com/QNoDCqf.gif',
    // //santas-workshop
    //   'https://i.imgur.com/I2N4waK.gif',
    // //batmansuperman
    //   'https://i.imgur.com/CQdrRmc.gif',
    // //google loader
    //   'https://i.imgur.com/BJCdP6M.gif'
    ];
  

 //Initialize state variable `bootDisplay` using `useState` and set its default value to "block"
  useEffect(() => {
    //set a timeout using `setTimeout` that sets `bootDisplay` to "none" after 3000ms
    const timeout = setTimeout(() => {
      setBootDisplay("none");
    }, 3000);
    //clears the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
    //Pass an empty array `[]` as the second argument to `useEffect` to ensure that the effect runs only once on mount.
  }, []);

  // Handle touch hover events
  function handleTouchHover(e) {
    // Get the X and Y coordinates of the touch event
    const cX = e.touches[0].clientX;
    const cY = e.touches[0].clientY;

    // If power is true
    if (power) {
      // Update cursor style state
      setCursorStyle({
        ...cursorStyle,
        display: 'block',
        top: `${cY}px`,
        left: `${cX}px`,
      });
    }
  }

  // Handle touch hover end events
  function handleTouchHoverEnd() {
    // Update cursor style state
    setCursorStyle({ ...cursorStyle, display: 'none' });
  }

  // Handle mouse hover events
  function handleMouseHover(e) {
    // Get the X and Y coordinates of the mouse event
    const x = e.clientX;
    const y = e.clientY;

    // If power is true
    if (power) {
      // Update cursor style state
      setCursorStyle({
        ...cursorStyle,
        display: 'block',
        top: `${y}px`,
        left: `${x}px`,
      });
    }
  }

  // Handle mouse hover end events
  function handleMouseHoverEnd() {
    // Update cursor style state
    setCursorStyle({ ...cursorStyle, display: 'none' });
  }

  // Handle power button click events
  function handlePowerClick() {
    // If power is false
    if (!power) {
      // Update state variables to turn on the device
      setPower(true);
      setCursorStyle({ ...cursorStyle, display: 'none' });
      setLockScreen(false);
      setErrorCount(0);
      setBlockCount(0);
    } else {
      // Update state variables to turn off the device
      setPower(false);
      setCursorStyle({ ...cursorStyle, display: 'none' });
      setLockScreen(false);
      setErrorCount(0);
      setBlockCount(0);
    }
  }

  function Ins(props) {
    // Define a state variable "lIn" and its setter function "setLIn"
    const [lIn, setLIn] = useState("");

    // When a number button is clicked, concatenate the number to the "lIn" state
    function handleClick(n) {
      setLIn((prev) => prev + n);
      setLIn((prev) => prev.trim()); // Remove leading and trailing whitespaces
    }

    return (
      <div>
        <input type="text" className="lIn" value={lIn} readOnly />
        <button onClick={() => handleClick(props.n)}>{props.n}</button>
      </div>
    );
  }

  function IX() {
    // Define a state variable "lIn" and its setter function "setLIn"
    const [lIn, setLIn] = useState("");

    // When the "X" button is clicked, remove the last character from the "lIn" state
    function handleClick() {
      setLIn((prev) => prev.substring(0, prev.length - 1));
    }

    return (
      <div>
        <input type="text" className="lIn" value={lIn} readOnly />
        <button onClick={handleClick}>X</button>
      </div>
    );
  }

  function IK() {
    // Define state variables "lIn" and "disabled" and their setter functions "setLIn" and "setDisabled"
    const [lIn, setLIn] = useState("");
    const [disabled, setDisabled] = useState(false);

    // Define state variables "lockW", "lock", "lErr", and their selectors
    const lockW = document.querySelector(".lockW");
    const lock = document.querySelector(".lock");
    const lErr = document.querySelector(".lErr");

    // Define state variables "lockPass", "errorCount", "blockCount", and their values
    const lockPass = "1234";
    let errorCount = 0;
    let blockCount = 0;

    // When the "K" button is clicked
    function handleClick() {
      const inputValue = document.querySelector(".lIn").value;
      setLIn("");

      // If the input value is equal to the lock password
      if (inputValue === lockPass) {
        lockW.classList.add("locked");
        lock.style.transform = "translate(-50%,-50%) scale(0.3)";
        lock.style.opacity = "0";
        document.querySelector(".softkeys").style.bottom = "0";

        // Disable the button
        setDisabled(true);
      }
      // If the input value is empty
      else if (inputValue.length < 1) {
        setDisabled(true);
      }
      // If the input value is not equal to the lock password
      else {
        const lErr = document.querySelector('.lErr');
        lErr.innerHTML = 'Incorrect PIN entered';
        lErr.style.opacity = '1';
        setTimeout(function () {
          lErr.style.opacity = '0';
        }, 2000);
        errorCount++;
        // If the number of incorrect attempts is equal to 5
        if (errorCount === 5) {
          const lockEl = document.querySelector(".lock");
          const tryAgainEl = document.querySelector(".tryagain");

          lockEl.style.display = "none";
          tryAgainEl.style.display = "block";
          tryAgainEl.innerHTML = "<h4>Try again in 30 seconds</h4> <h5>Just kidding Password is <strong>1234</strong></h5> <h6>Please wait for 5 Seconds</h6>";

          setBlockCount(blockCount + 1);

          if (blockCount === 5) {
            alert("You have been locked out for 30 seconds. Please Wait and Try Again");
            setBlockCount(0);
          }

          setTimeout(function () {
            lockEl.style.display = "block";
            tryAgainEl.style.display = "none";
            setErrorCount(0);
          }, 5000);
        }
      }
      

        return (
          <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Page Title</title>
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            />
            <link
              rel="stylesheet"
              href="https://unpkg.com/swiper@6.4.11/swiper-bundle.min.css"
            />
            <link
              href="https://fonts.googleapis.com/css?family=Delius&display=swap"
              rel="stylesheet"
            />
            <div className="slides">
              <input
                type="range"
                className="in g"
                min="0.5"
                defaultValue={1}
                max="1.5"
                step="0.01"
                oninput="range()"
              />
            </div>
            <div className="bfg" />
            <div className="power" onclick="power()">
              <i className="material-icons">settings_power</i>
            </div>
            <div className="cursor" />
            {/* Android Body start*/}
            {/*2369ff ba28ff*/}
            <div className="body">
              {/*  Hardware Stufs Start  */}
              {/*  Hardware Stufs End    */}
              {/*  Screen Start  */}
              <div className="screen unlock">
                {/*  MainWindow Start  */}
                <div className="mainWindow">
                  <div className="sOverlay" />
                  <div className="topbar">
                    <div className="nTime" />
                    <div className="nSett nn" ripple="ripple">
                      <i className="material-icons">settings</i>
                    </div>
                    <div className="nMore nn" ripple="ripple">
                      <i className="material-icons">more_vert</i>
                    </div>
                    <div className="bright">
                      <div className="brightIcon" ripple="ripple">
                        <i className="material-icons bi">brightness_high</i>
                      </div>
                      <input
                        type="range"
                        className="op"
                        min="0.5"
                        defaultValue={1}
                        max={1}
                        step="0.01"
                        oninput="rangex()"
                      />
                    </div>
                    <ul className="nM">
                      <li className="nL">
                        <ul className="nU">
                          <li ripple="ripple">
                            <i className="material-icons nwifi ni">wifi</i>
                            <div className="nTitle">WIFI</div>
                          </li>
                          <li ripple="ripple">
                            <i className="material-icons ni">volume_up</i>
                            <div className="nTitle">Sound</div>
                          </li>
                          <li ripple="ripple">
                            <i className="material-icons ni">bluetooth</i>
                            <div className="nTitle">Bluetooth</div>
                          </li>
                          <li ripple="ripple">
                            <i
                              style={{ transform: "rotate(90deg)" }}
                              className="material-icons ncell ni"
                            >
                              sync_alt
                            </i>
                            <div className="nTitle">Mobile data</div>
                          </li>
                        </ul>
                      </li>
                      <li className="nL">
                        <ul className="nU">
                          <li ripple="ripple">
                            <i className="material-icons ni">highlight</i>
                            <div className="nTitle">Flashlight</div>
                          </li>
                          <li ripple="ripple">
                            <i className="material-icons ni">screen_rotation</i>
                            <div className="nTitle">Portrait</div>
                          </li>
                          <li ripple="ripple">
                            <i className="material-icons ni">airplanemode_active</i>
                            <div className="nTitle">Airplane mode</div>
                          </li>
                          <li ripple="ripple">
                            <i className="material-icons ni">battery_charging_full</i>
                            <div className="nTitle">Power saving</div>
                          </li>
                        </ul>
                      </li>
                      <li className="nL">
                        <ul className="nU">
                          <li ripple="ripple">
                            <i className="material-icons ni">crop_3_2</i>
                            <div className="nTitle">Smart Glow</div>
                          </li>
                          <li ripple="ripple">
                            <i className="material-icons ni">portable_wifi_off</i>
                            <div className="nTitle">Mobile Hotspot</div>
                          </li>
                          <li ripple="ripple">
                            <i className="material-icons ni">folder_special</i>
                            <div className="nTitle">Secure Folder</div>
                          </li>
                          <li ripple="ripple">
                            <i className="material-icons ni">my_location</i>
                            <div className="nTitle">Location</div>
                          </li>
                        </ul>
                      </li>
                      <li className="nL">
                        <ul className="nU">
                          <li ripple="ripple">
                            <i className="material-icons ni">remove_circle_outline</i>
                            <div className="nTitle">Do not disturb</div>
                          </li>
                          <li ripple="ripple">
                            <i className="material-icons ni">disc_full</i>
                            <div className="nTitle">Storage</div>
                          </li>
                          <li ripple="ripple">
                            <i className="material-icons ni">timeline</i>
                            <div className="nTitle">Ultra data saving</div>
                          </li>
                          <li ripple="ripple">
                            <i className="material-icons ni">sync</i>
                            <div className="nTitle">Sync</div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="drg" />
                    <div className="swipebar" />
                  </div>
                  {/*  StatusBar Start  */}
                  <div className="statusBar">
                    <ul>
                      <li>
                        <div className="sBT" />
                      </li>
                      <li>
                        <div className="bat">
                          <div className="bat1" />
                        </div>
                      </li>
                      <li>
                        <div className="sBB" />
                      </li>
                      <li>
                        <div className="sig">
                          <i className="material-icons sbi">signal_cellular_alt</i>
                        </div>
                      </li>
                      <li>
                        <div className="wif">
                          <i className="material-icons sbi wis">wifi</i>
                        </div>
                      </li>
                      <li>
                        <div className="g4 sbi">4G</div>
                      </li>
                      <li>
                        <i className="material-icons sbi bl">bluetooth</i>
                      </li>
                    </ul>
                  </div>
                  {/*  StatusBar End    */}
                  {/*  Menu Start  */}
                  <div className="swiper-container">
                    <div className="swiper-wrapper">
                      {/* Slide One Start*/}
                      <div className="swiper-slide">
                        {/* Widget One Start*/}
                        <div className="widget1">
                          <div className="wTime" />
                          <div className="wDate" />
                        </div>
                        {/* Widget One End*/}
                        {/* Widget Two Start*/}
                        <div className="googleS">
                          <img className="gs gi1" src="https://i.imgur.com/rKaLCdy.png" />
                          <input
                            type="text"
                            className="gt"
                            placeholder='Say "Hey Google"'
                          />
                          <img className="gs gi2" src="https://i.imgur.com/ojqFvmu.png" />
                        </div>
                        {/* Widget Two End*/}
                        {/* Menu One Start*/}
                        <ul className="m1">
                          <li onclick="app('gl')">
                            <img
                              className="menuIcon"
                              src="https://i.imgur.com/bytdIsW.png"
                              ripple="ripple"
                            />
                            <div className="appTitle">Gallery</div>
                          </li>
                          <li onclick="app('mf')">
                            <img
                              className="menuIcon"
                              src="https://i.imgur.com/lT6FyyP.png"
                              ripple="ripple"
                            />
                            <div className="appTitle">My Files</div>
                          </li>
                          <li onclick="app('ps')">
                            <img
                              className="menuIcon"
                              src="https://i.imgur.com/iXPpN9l.png"
                              ripple="ripple"
                            />
                            <div className="appTitle">Play Store</div>
                          </li>
                          <li onclick="appF()">
                            <img
                              className="menuIcon"
                              src="https://i.imgur.com/bytdIsW.png"
                              ripple="ripple"
                            />
                            <div className="appTitle">Google</div>
                          </li>
                        </ul>
                        {/* Menu One End*/}
                      </div>
                      {/* Slide One End*/}
                      {/* Slide Two Start*/}
                      <div className="swiper-slide">
                        {/* Menu Two Start*/}
                        <ul className="m1">
                          <li onclick="app('cl')">
                            <a href="https://code.sololearn.com/WF25yEnXKkWC/?ref=app">
                              <img
                                className="menuIcon"
                                src="https://i.imgur.com/ckc03G5.png"
                                ripple="ripple"
                              />
                            </a>
                            <div className="appTitle">Calendar</div>
                          </li>
                          <li onclick="app('fb')">
                            <img
                              className="menuIcon"
                              src="https://i.imgur.com/X3FGh8d.png"
                              ripple="ripple"
                            />
                            <div className="appTitle">Facebook</div>
                          </li>
                          <li onclick="app('ms')">
                            <img
                              className="menuIcon"
                              src="https://i.imgur.com/q4b4LY7.png"
                              ripple="ripple"
                            />
                            <div className="appTitle">Messenger</div>
                          </li>
                          <li onclick="app('ig')">
                            <img
                              className="menuIcon"
                              src="https://i.imgur.com/wsoJgF9.png"
                              ripple="ripple"
                            />
                            <div className="appTitle">Instagram</div>
                          </li>
                        </ul>
                        <ul className="m2">
                          <li onclick="app('ck')">
                            <a href="https://code.sololearn.com/WycpQepTrH8j/?ref=app">
                              <img
                                className="menuIcon"
                                src="https://i.imgur.com/XDykyIu.png"
                                ripple="ripple"
                              />
                            </a>
                            <div className="appTitle">Clock</div>
                          </li>
                        </ul>
                        {/* Menu Two End*/}
                      </div>
                      {/* Slide Two End*/}
                      <div className="swiper-slide">
                        <ul className="m1">
                          <li onclick="app('sl')">
                            <img
                              className="menuIcon"
                              src="https://i.imgur.com/8TJLZXf.png?1"
                              ripple="ripple"
                            />
                            <div className="appTitle">Sololearn</div>
                          </li>
                          <li onclick="app('tw')">
                            <img
                              className="menuIcon"
                              src="https://i.imgur.com/UbTNp5j.png"
                              ripple="ripple"
                            />
                            <div className="appTitle">Twitter</div>
                          </li>
                          <li onclick="app('gm')">
                            <a href="https://code.sololearn.com/WCtzXFsaYDhj/?ref=app">
                              <img
                                className="menuIcon"
                                src="https://i.imgur.com/XI1o6gf.png"
                                ripple="ripple"
                              />
                            </a>
                            <div className="appTitle">Game</div>
                          </li>
                          <li onclick="app('np')">
                            <img
                              className="menuIcon"
                              src="https://i.imgur.com/ZWd1glF.png"
                              ripple="ripple"
                            />
                            <div className="appTitle">NotePad</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                  {/*  Menu End        */}
                  {/* BottomMenu Start */}
                  <div className="bottomMenu">
                    <table className="ta1">
                      <tbody>
                        <tr>
                          <td>
                            <div className="a10 ph" onclick="app('ph')">
                              <img
                                ripple="ripple"
                                className="menuIcon"
                                src="https://i.imgur.com/fNzI8Nr.png"
                              />
                              <div className="appTitle">Phone</div>
                            </div>
                          </td>
                          <td>
                            <div className="a10 cn" onclick="app('cn')">
                              <img
                                className="menuIcon"
                                src="https://i.imgur.com/2g6dZmw.png"
                                ripple="ripple"
                              />
                              <div className="appTitle">Contacts</div>
                            </div>
                          </td>
                          <td>
                            <div className="a10 mg" onclick="app('mg')">
                              <img
                                className="menuIcon"
                                src="https://i.imgur.com/8Kt94Mk.png"
                                ripple="ripple"
                              />
                              <div className="appTitle">Messages</div>
                            </div>
                          </td>
                          <td>
                            <div className="a10 gm" onclick="app('pm')">
                              <img
                                className="menuIcon"
                                src="https://i.imgur.com/EZjG1JI.png"
                                ripple="ripple"
                              />
                              <div className="appTitle">Play Music</div>
                            </div>
                          </td>
                          <td>
                            <div className="a10 cm" onclick="app('cm')">
                              <img
                                className="menuIcon"
                                src="https://i.imgur.com/oOaGxZf.png"
                                ripple="ripple"
                              />
                              <div className="appTitle">Camera</div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* BottomMenu End   */}
                  {/* Softkeys Start   */}
                  <div className="softkeys">
                    <div className="recent sk" onclick="recent()" ripple="ripple">
                      <i className="material-icons ski">crop_square</i>
                    </div>
                    <div className="home sk" onclick="home()" ripple="ripple">
                      <i className="material-icons ski">radio_button_unchecked</i>
                    </div>
                    <div className="back sk" onclick="back()" ripple="ripple">
                      <i className="material-icons ski">details</i>
                    </div>
                  </div>
                  {/* Softkeys End     */}
                  {/*All App Modals Start*/}
                  {/*Gallery Modal Start*/}
                  <div className="appModal gallery">
                    <div className="appMTitle">Gallery</div>
                    <div className="allP">
                      <img className="thums" onclick="img('1')" />
                      <img className="thums" onclick="img('2')" />
                      <img className="thums" onclick="img('3')" />
                      <img className="thums" onclick="img('4')" />
                      <img className="thums" onclick="img('5')" />
                      <img className="thums" onclick="img('6')" />
                      <img className="thums" onclick="img('7')" />
                      <img className="thums" onclick="img('8')" />
                      <img className="thums" onclick="img('9')" />
                      <img className="thums" onclick="img('10')" />
                      <img className="thums" onclick="img('11')" />
                      <img className="thums" onclick="img('12')" />
                      <img className="thums" onclick="img('13')" />
                      <img className="thums" onclick="img('14')" />
                      <img className="thums" onclick="img('15')" />
                      <img className="thums" onclick="img('16')" />
                      <img className="thums" onclick="img('17')" />
                      <img className="thums" onclick="img('18')" />
                      <img className="thums" onclick="img('19')" />
                      <img className="thums" onclick="img('20')" />
                      <img className="thums" onclick="img('21')" />
                      <img className="thums" onclick="img('22')" />
                      <img className="thums" onclick="img('23')" />
                      <img className="thums" onclick="img('24')" />
                      <img className="thums" onclick="img('25')" />
                    </div>
                    <i onclick="galleryMore()" className="material-icons gin">
                      more_vert
                    </i>
                    <span className="gMore" onclick="gMore()">
                      Set as wallpaper
                    </span>
                    <span className="gMore2" onclick="gMore2()">
                      Set as lockscreen
                    </span>
                    <div className="preview" />
                  </div>
                  {/*Gallery Modal End */}
                  {/* Message Modal Start*/}
                  <div className="appModal message"></div>
                  {/* Message Modal End*/}
                  {/*Note Modal Start*/}
                  <div className="appModal noteM">
                    <div className="appMTitle">Notes</div>
                    <textarea
                      className="note"
                      defaultValue={
                        "I was working on a game. Next I will share it with you all. Thank you guys for supporting."
                      }
                    />
                  </div>
                  {/* Note Modal End*/}
                  {/* Error Things Start*/}
                  <div className="errorM" onclick="closeErr()">
                    <div className="errorMSG">Unfortunately, app has stopped.</div>
                  </div>
                  {/* Error Things End*/}
                  <div className="bgf" onclick="bgf()">
                    <div className="gFolder">
                      <div className="bg" />
                    </div>
                  </div>
                  {/* Multi Tasking Modal Start */}
                  <div className="mModal">
                    <input
                      type="range"
                      min={-140}
                      defaultValue={0}
                      max={140}
                      step={1}
                      className="mTask"
                      oninput="mTaskF()"
                      onchange="mTaskC()"
                    />
                    <div className="topX tmp" />
                    <div className="tomX tmp">
                      <ul className="m1">
                        <li onclick="j(1)" className="gal">
                          <img
                            className="menuIcon"
                            src="https://i.imgur.com/bytdIsW.png"
                            ripple="ripple"
                          />
                          <div className="appTitle">Gallery</div>
                        </li>
                        <li onclick="j(4)" className="fac">
                          <img
                            className="menuIcon"
                            src="https://i.imgur.com/X3FGh8d.png"
                            ripple="ripple"
                          />
                          <div className="appTitle">Facebook</div>
                        </li>
                        <li onclick="j(4)" className="mes">
                          <img
                            className="menuIcon"
                            src="https://i.imgur.com/q4b4LY7.png"
                            ripple="ripple"
                          />
                          <div className="appTitle">Messenger</div>
                        </li>
                        <li onclick="j(4)">
                          <img
                            className="menuIcon"
                            src="https://i.imgur.com/8Kt94Mk.png"
                            ripple="ripple"
                          />
                          <div className="appTitle">Message</div>
                        </li>
                        <li onclick="j(4)">
                          <img
                            className="menuIcon"
                            src="https://i.imgur.com/2g6dZmw.png"
                            ripple="ripple"
                          />
                          <div className="appTitle">Contacts</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Multi tasking Modal End  */}
                  {/* recent Modal Start */}
                  <div className="recentM">
                    <div className="nrua">No recently used apps</div>
                    <div className="tmcc" />
                    <div className="clear" onclick="clearA()">
                      Clear All
                    </div>
                  </div>
                  {/* Recent Modal End */}
                  {/* All App Modals End */}
                  {/* Screen Lock Start  */}
                  <div className="lockW">
                    <div className="lockScrn">
                      <div className="lcm">
                        <img
                          className="menuIcon i2"
                          src="https://i.imgur.com/oOaGxZf.png"
                        />
                      </div>
                      <div className="lph">
                        <img
                          className="menuIcon i2"
                          src="https://i.imgur.com/fNzI8Nr.png"
                        />
                      </div>
                    </div>
                    <div className="tryagain" />
                    <div className="lock">
                      <div className="lErr">
                        Use fingerprint or enter PIN
                        <div className="lAlert">Your PIN contains at least 4 digits.</div>
                      </div>
                      <div className="lNums">
                        <input type="password" className="lIn" />
                        <div className="num n1" onclick="ins(1)" ripple="ripple">
                          1
                        </div>
                        <div className="num n2" onclick="ins(2)" ripple="ripple">
                          2
                        </div>
                        <div className="num n3" onclick="ins(3)" ripple="ripple">
                          3
                        </div>
                        <div className="num n4" onclick="ins(4)" ripple="ripple">
                          4
                        </div>
                        <div className="num n5" onclick="ins(5)" ripple="ripple">
                          5
                        </div>
                        <div className="num n6" onclick="ins(6)" ripple="ripple">
                          6
                        </div>
                        <div className="num n7" onclick="ins(7)" ripple="ripple">
                          7
                        </div>
                        <div className="num n8" onclick="ins(8)" ripple="ripple">
                          8
                        </div>
                        <div className="num n9" onclick="ins(9)" ripple="ripple">
                          9
                        </div>
                        <div className="num nX" onclick="iX()" ripple="ripple">
                          <i className="material-icons lX" ripple="ripple">
                            backspace
                          </i>
                        </div>
                        <div className="num n0" onclick="ins(0)" ripple="ripple">
                          0
                        </div>
                        <div className="num nk" onclick="iK()" ripple="ripple">
                          OK
                        </div>
                        <div className="emBtn" ripple="ripple">
                          Emergency call
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Screen Lock End    */}
                </div>
                <div className="boot" />
                {/*  MainWindow End    */}
              </div>
              {/*  Screen End  */}
            </div>
            {/*  Android Body End */}
          </>
        )
      }
    }
  }

      

      export default PixelClone;