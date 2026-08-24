import type { JSX } from "react/jsx-runtime"

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
  return (
    <div className="alerts">
      <ul>
        {alerts.map((alert: weather_alert) => {
        return (
          <li key={alert.headline}>
            <p>{alert.headline}</p>
            <p>Severity: {alert.severity}</p>
            <p>Certainty: {alert.certainty}</p>
            <p>Instruction: {alert.instruction}</p>
          </li>
        )
      })}
      </ul>
      
    </div>
  )
}

export default Alert;