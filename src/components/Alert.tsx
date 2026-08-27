import type { JSX } from "react/jsx-runtime"
import { format } from "date-fns";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("translation");

  const [expanded, setExpanded] = useState(false);
  const [readInstruction, setReadInstruction] = useState(false)
  return (
    <div className={`alerts ${expanded ? "active" : ""}`}>
      <div>
        <p>{t("alerts.alert")} ({alerts.length}):</p>
        <button onClick={()=> setExpanded((prev) => !prev)}>{!expanded ? t("alerts.expand") : t("alerts.hide")}</button>
      </div>
      {expanded &&
        <ul>
        {alerts.map((alert: weather_alert) => {
        return (
          <li key={alert.headline}>
            <p>{alert.headline}</p>
            <p>{alert.areas}</p>
            <p>{t("alerts.effective")} {format(new Date(alert.effective), "dd MMM HH:mm")}</p>
            <p>{alert.desc}</p>
            <div>
              {readInstruction && (
              <p>{t("alerts.instruction")} {alert.instruction}</p>)}
              <button onClick={()=> setReadInstruction(prev => !prev)}>{readInstruction ? t("alerts.hideInstruction") : t("show.hideInstruction")}</button>
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