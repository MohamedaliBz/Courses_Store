import "./index.css"

type Props = {
    children: React.ReactNode,
    onclose : ()=>void
}

export default function Modal({onclose , children}: Props) {
    
    
  return (
    <>
        {/* ki nhebou nenzlou l bara mel modal-content yetsaker  , nzidou onClick={onclose} lel modal-background */}
        <div className="modal-background" onClick={onclose}></div> 
            <div className="modal-content">
                {children}
                <button onClick={onclose} className="button-79">Close</button>
            </div>
    </>
  )
}