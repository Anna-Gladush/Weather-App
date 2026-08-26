import type { JSX } from "react/jsx-runtime"
import { format } from "date-fns";
import { useState } from "react";

type weather_alert = {
  headline: string,
  msgtype: string,
  severity: string,
  urgency: string,
  areas: string,
  category: string,
  certainty: string,
  event: string,
  note: string,
  effective: string,
  expires: string,
  desc: string,
  instruction: string
}

const Alert = ({alerts}: { alerts: weather_alert[]}): JSX.Element => {
  const [expanded, setExpanded] = useState(false);
  const [readInstruction, setReadInstruction] = useState(false)
  return (
    <div className="alerts">
      <div>
        <p>Alerts ({alerts.length}):</p>
        <button onClick={()=> setExpanded((prev) => !prev)}>{!expanded ? "Expand" : "Hide"}</button>
      </div>
      {expanded &&
        <ul>
        {alerts.map((alert: weather_alert) => {
        return (
          <li key={alert.headline}>
            <p>{alert.headline}</p>
            <p>{alert.areas}</p>
            <p>Effective: {format(new Date(alert.effective), "dd MMM HH:mm")}</p>
            <p>Expires: {format(new Date(alert.expires), "dd MMM HH:mm")}</p>
            <p>{alert.desc}</p>
            <div>
              {readInstruction && (
              <p>Instruction: {alert.instruction}</p>)}
              <button onClick={()=> setReadInstruction(prev => !prev)}>{readInstruction ? "Hide instruction" : "Read instruction"}</button>
            </div>
              
              
          </li>
        )
      })}
      </ul>
      }
    </div>
  )
}

export default Alert;