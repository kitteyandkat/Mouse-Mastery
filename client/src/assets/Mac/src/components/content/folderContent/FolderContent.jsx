import styles from "./FolderContent.module.css";

const FolderContent = ({ isFolderOpen, closeFolderContent }) => {
  return (
    <>
      <div
        className={styles.wrapper}
        style={{
          visibility: isFolderOpen ? "visible" : "hidden",
        }}
      >
        <div className={styles.left_inner_wrapper}>
          <div className={styles.left_corner_buttons}>
            <img
              onClick={closeFolderContent}
              className={styles.left_corner_button_img}
              src="/img/mac/icons/close.png"
              alt="icns"
            />
            <img
              className={styles.left_corner_button_img}
              src="/img/mac/icons/minimise.png"
              alt="icns"
            />
            <img
              className={styles.left_corner_button_img}
              src="/img/mac/icons/zoom.png"
              alt="icns"
            />
          </div>
          <div className={styles.left_menu_wrapper}>
            <h5 className={styles.menu_title}>Favorites</h5>
            <ul className={styles.left_ul}>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/img/mac/blueicons/star.png"
                  alt="star"
                />
                <p className={styles.left_li_text}>Inbox</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/img/mac/blueicons/file.png"
                  alt="file"
                />
                <p className={styles.left_li_text}>AirDrop</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/img/mac/blueicons/clock.png"
                  alt="clock"
                />
                <p className={styles.left_li_text}>Recents</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/img/mac/blueicons/file.png"
                  alt="file"
                />
                <p className={styles.left_li_text}>Applications</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/img/mac/blueicons/files.png"
                  alt="files"
                />
                <p className={styles.left_li_text}>Documents</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/img/mac/blueicons/folder.png"
                  alt="folder"
                />
                <p className={styles.left_li_text}>Folder</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/img/mac/blueicons/download.png"
                  alt="download"
                />
                <p className={styles.left_li_text}>Downloads</p>
              </li>
            </ul>
            <h5 className={styles.menu_title}>iCloud</h5>
            <ul className={styles.left_ul}>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/img/mac/blueicons/cloud.png"
                  alt="cloud"
                />
                <p className={styles.left_li_text}>iCloud Drive</p>
              </li>
            </ul>
            <h5 className={styles.menu_title}>Tags</h5>
            <ul className={styles.left_ul}>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/img/mac/blueicons/orangeTag.png"
                  alt="orangeTag"
                />
                <p className={styles.left_li_text}>Orange Tag</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/img/mac/blueicons/blueTag.png"
                  alt="blueTag"
                />
                <p className={styles.left_li_text}>Blue Tag</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/img/mac/blueicons/greenTag.png"
                  alt="greenTag"
                />
                <p className={styles.left_li_text}>Green Tag</p>
              </li>
              <li className={styles.left_li}>
                <img
                  className={styles.blue_icon_img}
                  src="/img/mac/blueicons/allTags.png"
                  alt="allTags"
                />
                <p className={styles.left_li_text}>All Tags</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.right_inner_wrapper}>
          <div className={styles.right_top_bar}>
            <div className={styles.right_top_bar_left}>
              <img src="/img/mac/icons/left_arrow.png" alt="left_arrow" />
              <img src="/img/mac/icons/right_arrow.png" alt="right_arrow" />
              <p className={styles.left_text}>Downloads</p>
            </div>
            <div className={styles.right_top_bar_right}>
              <img src="/img/mac/icons/windows.png" alt="windows" />
              <img src="/img/mac/icons/menu.png" alt="menu" />
              <img src="/img/mac/icons/cols.png" alt="cols" />
              <img src="/img/mac/icons/dots.png" alt="dots" />
              <img src="/img/mac/icons/exp.png" alt="exp" />
              <img src="/img/mac/icons/badge.png" alt="badge" />
              <img src="/img/mac/icons/right_arrow2.png" alt="right_arrow2" />
              <img src="/img/mac/icons/search_icon.png" alt="search_icon" />
            </div>
          </div>
          <div className={styles.right_inner_content}>
            <div className={styles.row}>
              <div className={styles.folderWrapper}>
                <img src="/img/mac/folder.png" alt="folder" />
                <span>Apps</span>
              </div>
              <div className={styles.folderWrapper}>
                <img src="/img/mac/folder.png" alt="folder" />
                <span>Education</span>
              </div>
              <div className={styles.folderWrapper}>
                <img src="/img/mac/folder.png" alt="folder" />
                <span>React JS</span>
              </div>
              <div className={styles.folderWrapper}>
                <img src="/img/mac/folder.png" alt="folder" />
                <span>Javascript</span>
              </div>
              <div className={styles.folderWrapper}>
                <img src="/img/mac/folder.png" alt="folder" />
                <span>Nebula Academy</span>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.folderWrapper}>
                <img src="/img/mac/folder.png" alt="folder" />
                <span>Music Files</span>
              </div>
              <div className={styles.folderWrapper}>
                <img src="/img/mac/folder.png" alt="folder" />
                <span>Bermuda 2023</span>
              </div>
              <div className={styles.folderWrapper}>
                <img
                  className={styles.file}
                  src="/img/mac/graph.png"
                  alt="folder"
                />
                <span>Registry</span>
              </div>
              <div className={styles.folderWrapper}>
                <img
                  className={styles.file}
                  src="/img/mac/mov.png"
                  alt="folder"
                />
                <span>Footloose</span>
              </div>
              <div className={styles.folderWrapper}>
                <img
                  className={styles.file}
                  src="/img/mac/image_file.png"
                  alt="folder"
                />
                <span>Bird</span>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.folderWrapper} data-lion-png>
                <img
                  className={styles.file}
                  src="/img/mac/image_file.png"
                  alt="folder"
                />
                <span>Lion</span>
              </div>
              <div className={styles.folderWrapper}>
                <img
                  className={styles.file}
                  src="/img/mac/image_file.png"
                  alt="folder"
                />
                <span>Tiger</span>
              </div>
              <div className={styles.folderWrapper}>
                <img
                  className={styles.file}
                  src="/img/mac/mov.png"
                  alt="folder"
                />
                <span>Trees</span>
              </div>
              <div className={styles.folderWrapper}>
                <img src="/img/mac/folder.png" alt="folder" />
                <span>Wallpapers</span>
              </div>
              <div className={styles.folderWrapper}>
                <img src="/img/mac/folder.png" alt="folder" />
                <span>Github</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FolderContent;