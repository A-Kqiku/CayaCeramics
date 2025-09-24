"use client";

import React from "react";
import styles from "./FAQ.module.css";
import Dropdown from "../Dropdown/Dropdown";
import { Ovo } from "next/font/google";

const ovo = Ovo({ subsets: ["latin"], weight: "400" });

const FAQ = () => {
  return (
    <div className={`${styles.container} ${ovo.className}`}>
      <div className={styles.left}>
        <div className={styles.header}>
          <h1>FAQ's</h1>
        </div>
        <div className={styles.text}>
          <p>
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere
            Keramiken – von der Bestellung über die Lieferung bis hin zur
            richtigen Pflege. Wir möchten Ihnen den gesamten Prozess so
            transparent und einfach wie möglich machen.
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <Dropdown
          question="Wie bestelle ich?"
          answer="Um bei uns zu bestellen, wählen Sie zunächst Ihr Lieblingsprodukt aus unserem Sortiment aus. Legen Sie das gewünschte Stück mit einem Klick auf „In den Warenkorb“. Wenn Sie alle gewünschten Produkte ausgewählt haben, öffnen Sie den Warenkorb und gehen Sie zur Kasse. Dort geben Sie Ihre Lieferadresse sowie die bevorzugte Zahlungsmethode ein. Überprüfen Sie alle Angaben noch einmal und schließen Sie die Bestellung ab, indem Sie auf „Bestellung abschicken“ klicken. Anschließend erhalten Sie eine Bestätigung per E-Mail mit allen Details zu Ihrer Bestellung. So einfach kommt Ihre handgefertigte Keramik zu Ihnen nach Hause!"
        />
        <Dropdown
          question="Wie erfolgt die Lieferung?"
          answer="Nach Abschluss Ihrer Bestellung kümmern wir uns um den sicheren Versand Ihrer Produkte. Ihre handgefertigten Keramikstücke werden sorgfältig verpackt, um Transportschäden zu vermeiden. Die Lieferung erfolgt in der Regel innerhalb von 3–5 Werktagen. Sobald Ihre Bestellung versendet wurde, erhalten Sie eine E-Mail mit einer Sendungsverfolgungsnummer, damit Sie den Status Ihrer Lieferung jederzeit einsehen können. So können Sie entspannt verfolgen, wann Ihre Bestellung bei Ihnen zu Hause ankommt.Nach Abschluss Ihrer Bestellung kümmern wir uns um den sicheren Versand Ihrer Produkte. Ihre handgefertigten Keramikstücke werden sorgfältig verpackt, um Transportschäden zu vermeiden. Die Lieferung erfolgt in der Regel innerhalb von 3–5 Werktagen. Sobald Ihre Bestellung versendet wurde, erhalten Sie eine E-Mail mit einer Sendungsverfolgungsnummer, damit Sie den Status Ihrer Lieferung jederzeit einsehen können. So können Sie entspannt verfolgen, wann Ihre Bestellung bei Ihnen zu Hause ankommt."
        />
        <Dropdown
          question="Wie pflege ich das Produkt?"
          answer="Unsere handgefertigten Keramikstücke sind robust, dennoch lohnt es sich, sie mit etwas Sorgfalt zu behandeln. Reinigen Sie die Produkte vorzugsweise von Hand mit warmem Wasser und einem milden Spülmittel. Vermeiden Sie aggressive Reinigungsmittel oder scheuernde Schwämme, um die Oberfläche zu schützen. Töpferwaren mit Glasur können in der Regel problemlos in der Spülmaschine gereinigt werden, jedoch empfehlen wir, besonders filigrane Stücke vorsichtig von Hand zu spülen. Lagern Sie die Produkte an einem trockenen Ort, um ihre Qualität langfristig zu erhalten und ihre Schönheit zu bewahren."
        />
        <Dropdown
          question="Kann ich die Ware zurückgeben?"
          answer="Da unsere Keramik handgefertigt ist und jedes Stück ein Unikat darstellt, können wir leider keine regulären Rückgaben oder Umtausch anbieten. Sollte jedoch ein Produkt während des Transports beschädigt werden, können Sie es innerhalb von 3 Werktagen nach Erhalt bei uns melden. Wir kümmern uns dann um eine Lösung, damit Sie Ihr Kunstwerk unbeschadet erhalten. Bitte überprüfen Sie die Ware direkt nach Erhalt und setzen Sie sich im Fall eines Transportschadens umgehend mit uns in Verbindung."
        />
        <Dropdown
          question="Gibt es eine Geschenkoption?"
          answer="Ja, wir bieten für unsere handgefertigten Keramikstücke eine Geschenkoption an. Auf Wunsch verpacken wir Ihr ausgewähltes Produkt liebevoll und ansprechend, sodass es direkt als Geschenk übergeben werden kann. Geben Sie einfach beim Bestellvorgang an, dass es sich um ein Geschenk handelt, und wir kümmern uns um eine schöne Präsentation. So machen Sie Ihren Liebsten oder sich selbst ein ganz besonderes, einzigartiges Geschenk."
        />
      </div>
    </div>
  );
};

export default FAQ;
