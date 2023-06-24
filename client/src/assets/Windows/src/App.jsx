import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useDispatch, useSelector } from "react-redux";
import "./i18nextConf";
import "./index.css";
// import Modal from "../../Mac/src/components/modal/modal";
// import { getfromAPI } from "../../../network-request";
import ActMenu from "./components/menu";
import {
  BandPane,
  CalnWid,
  DesktopApp,
  SidePane,
  StartMenu,
  WidPane,
} from "./components/start";
import Taskbar from "./components/taskbar";
import { Background, BootScreen, LockScreen } from "./containers/background";

import { loadSettings } from "./actions";
import * as Applications from "./containers/applications";
import * as Drafts from "./containers/applications/draft";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <meta charSet="UTF-8" />
      <title>404 - Page</title>
      <script src="https://win11.blueedge.me/script.js"></script>
      <link rel="stylesheet" href="https://win11.blueedge.me/style.css" />
      {/* partial:index.partial.html */}
      <div id="page">
        <div id="container">
          <h1>:(</h1>
          <h2>
            Your PC ran into a problem and needs to restart. We're just
            collecting some error info, and then we'll restart for you.
          </h2>
          <h2>
            <span id="percentage">0</span>% complete
          </h2>
          <div id="details">
            <div id="qr">
              <div id="image">
                <img src="https://win11.blueedge.me/img/qr.png" alt="QR Code" />
              </div>
            </div>
            <div id="stopcode">
              <h4>
                For more information about this issue and possible fixes, visit
                <br />{" "}
                <a href="https://https://github.com/SEV9-Capstone/Mouse-Mastery/issues">
                  https://https://github.com/SEV9-Capstone/Mouse-Mastery/issues
                </a>{" "}
              </h4>
              <h5>
                If you call a support person, give them this info:
                <br />
                Stop Code: {error.message}
              </h5>
              <button onClick={resetErrorBoundary}>Try again</button>
            </div>
          </div>
        </div>
      </div>
      {/* partial */}
    </div>
  );
}

function Windows11() {
  const apps = useSelector((state) => state.apps);
  const wall = useSelector((state) => state.wallpaper);
  const dispatch = useDispatch();
  //  //Fetch list of all modules from backend
  //  const [modules, setModules] = useState()
  //  const [currentModule, setCurrentModule] = useState()
  //  const [step, setCurrentStep] = useState(0)
  //  const [modalOpen, setModalOpen] = useState(true)
   
  //  useEffect(()=>{
  //    getfromAPI('getAllModules')
  //      .then(data => {
  //        console.log(data)
  //        setModules(data)
  //        setCurrentModule(data[0])
  //      })
  //  },[])
  //  //create a function that listens to every click request on clone
  //  const onClick = e => {
  //    if(modalOpen)return
  //    let correctTarget = e.target.closest(currentModule?.steps[step]?.active_element)
  //    if (!correctTarget) {
  //      console.log('wrong answer')
  //      setHintCount(hintCount+1)
  //      if(hintCount >= 2){
  //        setModalOpen(true)
  //        document.querySelector(currentModule?.steps[step]?.active_element)?.classList.add(bounceAnimation)
  //      }
  //      return
  //    }
  //    console.log('correct answer')
  //    setModalOpen(true)
  //    setCurrentStep(step + 1)
  //    // if (!active_element){
       
  //      // }
  //    }
     
  //    const onModalContinue = e => {
  //      setModalOpen(false)
  //      document.querySelector(currentModule?.steps[step]?.active_element)?.classList.remove(bounceAnimation)
  //  }

  const afterMath = (event) => {
    let ess = [
      ["START", "STARTHID"],
      ["BAND", "BANDHIDE"],
      ["PANE", "PANEHIDE"],
      ["WIDG", "WIDGHIDE"],
      ["CALN", "CALNHIDE"],
      ["MENU", "MENUHIDE"],
    ];

    let actionType = "";
    try {
      actionType = event.target.dataset.action || "";
    } catch (err) {}

    let actionType0 = getComputedStyle(event.target).getPropertyValue(
      "--prefix"
    );

    ess.forEach((item, i) => {
      if (!actionType.startsWith(item[0]) && !actionType0.startsWith(item[0])) {
        dispatch({
          type: item[1],
        });
      }
    });
  };

  window.oncontextmenu = (e) => {
    afterMath(e);
    e.preventDefault();
    // dispatch({ type: 'GARBAGE'});
    let data = {
      top: e.clientY,
      left: e.clientX,
    };

    if (e.target.dataset.menu != null) {
      data.menu = e.target.dataset.menu;
      data.attr = e.target.attributes;
      data.dataset = e.target.dataset;
      dispatch({
        type: "MENUSHOW",
        payload: data,
      });
    }
  };

  window.onclick = afterMath;

  window.onload = (e) => {
    dispatch({ type: "WALLBOOTED" });
  };

  useEffect(() => {
    if (!window.onstart) {
      loadSettings();
      window.onstart = setTimeout(() => {
        // console.log("prematurely loading ( ﾉ ﾟｰﾟ)ﾉ");
        dispatch({ type: "WALLBOOTED" });
      }, 5000);
    }
  });

  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* {!wall.booted ? <BootScreen dir={wall.dir} /> : null} */}
        {/* {wall.locked ? <LockScreen dir={wall.dir} /> : null} */}
        <div className="appwrap">
          <Background />
          <div className="desktop" data-menu="desk">
            <DesktopApp />
            {Object.keys(Applications).map((key, idx) => {
              let WinApp = Applications[key];
              return <WinApp key={idx} />;
            })}
            {Object.keys(apps)
              .filter((x) => x != "hz")
              .map((key) => apps[key])
              .map((app, i) => {
                if (app.pwa) {
                  let WinApp = Drafts[app.data.type];
                  return <WinApp key={i} icon={app.icon} {...app.data} />;
                }
              })}
            <StartMenu />
            <BandPane />
            <SidePane />
            <WidPane />
            <CalnWid />
              {/* <Modal open={modalOpen} text={currentModule?.steps[step]?.modal_text || 'You Did It! 🤪'} onModalContinue={onModalContinue} /> */}
          </div>
          <Taskbar />
          <ActMenu />
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default Windows11;
