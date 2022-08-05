interface StartingButtonProps {
  focus(): void;
}

function StartingButton({ focus }: StartingButtonProps) {
  return (
    <button className="Main--get-started" onClick={focus}>Get Started</button>
  )
}

export default StartingButton