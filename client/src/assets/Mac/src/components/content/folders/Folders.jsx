import styles from "./Folders.module.css";

const Folders = ({ openFolderContent }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.folderWrapper}>
          <img
            onClick={openFolderContent}
            src="/img/mac/folder.png"
            alt="folder"
          />
          <span className={styles.folderText}>Downloads</span>
        </div>
        <div className={styles.marginBottom20}></div>
        <div className={styles.folderWrapper}>
          <img src="/img/mac/folder.png" alt="folder" />
          <span className={styles.folderText}>Documents</span>
        </div>
      </div>
    </>
  );
};

export default Folders;
