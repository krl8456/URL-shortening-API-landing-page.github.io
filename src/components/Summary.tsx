import StartingButton from "./StartingButton"
interface SummaryProps {
  focus(): void;
}


function Summary({ focus }: SummaryProps) {
  return (
    <div className="Summary">
        <h2 className="Summary--title">Boost your links today</h2>
        <StartingButton focus={focus}/>
    </div>
  )
}

export default Summary