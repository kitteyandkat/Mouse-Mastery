export default ({open, text, onModalContinue}) => <dialog open = {open}>
<p>{text}</p>
<form method="dialog">
  <button onClick={onModalContinue}>Continue</button>
</form>
</dialog>