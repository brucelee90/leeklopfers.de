import React from "react"
import styled from "styled-components"

export default function HauptSection() {
  return (
    <HauptSectionWrapper>
      <div className="cv-head">
       <div className="name">
        Lee Klopfers
       </div>
        <div className="title">
          Frontend Developer
        </div>
      </div>
      <div>
        <div className="ueberschrift">Berufliche Laufbahn</div>
        {/* oddity */}

        <div className="columns">
          <div className="zeitraum">
            11/2019 - 04/2020 <br />
          </div>
          <div className="taetigkeit">
            oddity code GmbH,
            <br />
            <span className="job-title">
              Junior Frontend-Developer
            </span>
            <ul>
              <li>
                Erstellung von responsive Microsites, Kampagnenseiten und
                anderen digitalen Medien mit den Technologien HTML5, CSS3 und
                Javascript, sowie die Verwendung von Frontend Frameworks wie
                ReactJS, NextJS, StorybookJS unter Beachtung des Atomic Designs.
              </li>
              <li>
                Verwendung von CSS Precompiler wie Sass und
                Entwicklungswerkzeugen wie NodeJS und NPM.
              </li>
              <li>
                Integration der erstellten Seiten in die Content Management
                Systeme der Kunden.
              </li>
              <li>
                Wartung und Umsetzung von Bugfixing in bestehenden Produkten
                unter Verwendung von Libraries wie jQuery und Frameworks wie
                ReactJS.
              </li>
              <li>Erstellung von technischen Dokumentationen und Konzepten.</li>
              <li>
                Anwendung der Programme/ Webanwendungen VS Code, PHPStorm,
                Sourcetree, GitLab, Sketch, und Photoshop
              </li>
              <li>
                Verwaltung des Sourcecodes über das Versionskontrollsystem Git.
              </li>
              <li>
                Mitarbeit in interdisziplinären und agilen Entwicklungsteams,
                wie z.B. das gemeinsame Erarbeiten von Lösungen während der
                Konzeptions- und Designphase.
              </li>
            </ul>
          </div>
        </div>

        {/* cidora */}
        <div className="columns">
          <div className="zeitraum">09/2017 - 10/2019</div>
          <div className="taetigkeit">
            cidora GmbH,
            <br />
            <span className="job-title">IT-Berater</span>
            <ul>
              <li>Beratung bei Projekten in Patentanwaltskanzleien</li>
              <li>Fachliche Analyse der Problemstellungen</li>
              <li>Planung und Konzeptionierung von Lösungen</li>
            </ul>
          </div>
        </div>

        {/* Raumtechnik */}
        <div className="columns">
          <div className="zeitraum">07/2016 – 08/ 2017</div>
          <div className="taetigkeit">
            Raumtechnik Messebau & Event Services GmbH,
            <br />
            <span className="job-title">Debitorenbuchhalter</span>
            <ul>
              <li>Forderungsmanagement und Mahnwesen</li>
              <li>Verbuchung von Kundenrechnungen</li>
              <li>Monatsabschluss</li>
              <li>Erstellung von Statistiken mit Excel</li>
            </ul>
          </div>
        </div>

        {/* Sonstige Tätigkeiten */}
        <div className="ueberschrift">Sonstige Tätigkeiten</div>
        <div className="columns">
          <div className="zeitraum">06/2011 - 10/2011</div>

          <div className="taetigkeit">
            Malteser Hilfsdienst e.V,
            <br />
            <span className="job-title">Fahrdienst</span>
          </div>
        </div>

        <div className="columns">
          <div className="zeitraum">12/2010 - 05/2011</div>

          <div className="taetigkeit">
            Malteser Hilfsdienst e.V,
            <br />
            <span className="job-title">Zivildienst</span>
          </div>
        </div>

        {/* Studium */}
        <div className="ueberschrift">Studium</div>
        <div className="columns">
          <div className="zeitraum">10/2017 - vorr. 2022</div>
          <div className="taetigkeit">
            Fernuniversität Hagen
            <br />
            <span className="job-title">Wirtschaftsinformatik</span>
          </div>
        </div>
        <div className="columns">
          <div className="zeitraum">04/2012 - 09/2013</div>
          <div className="taetigkeit">
            Universität Frankfurt
            <br />
            <span className="job-title">
              Wirtschaftswissenschaften
            </span>
          </div>
        </div>

        {/* Ausbildung */}
        <div className="ueberschrift">Ausbildung</div>
        <div className="columns">
          <div className="zeitraum">09/2013 - 09/2016</div>
          <div className="taetigkeit">
            Raumtechnik Messebau & Event Services GmbH
            <br />
            <span className="job-title">
              Ausbildung zum Industriekaufmann
            </span>
          </div>
        </div>

        {/* Schule */}
        <div className="ueberschrift">Schulische Laufbahn</div>
        <div className="columns">
          <div className="zeitraum">09/2007 - 09/2010</div>
          <div className="taetigkeit">
            Johann Friedrich von Cotta Wirtschaftsgymnasium
            <br />
            <span className="job-title">
              Allg. Hochschulreife
            </span>
          </div>
        </div>
        <div className="columns">
          <div className="zeitraum">09/2001 - 09/2007</div>
          <div className="taetigkeit">Jahn-Realschule Bad-Cannstatt
            <br />
            <span className="job-title">
              Mittlere Reife
            </span>
          </div>
        </div>

        {/* Kenntnisse */}
        <div className="ueberschrift">Kenntnisse & Fähigkeiten</div>
        <div className="columns">
          <div className="zeitraum">Fremdspachen</div>
          <div className="taetigkeit">
            <ul style={{ marginTop: "0" }}>
              <li>Deutsch (Muttersprache)</li>
              <li>
                Englisch (Verhandlungs- und vertragssicher in Wort und Schrift)
              </li>
              <li>Französisch (Grundkenntnisse)</li>
            </ul>
          </div>
          <div className="zeitraum">Skriptsprachen</div>
          <div className="taetigkeit">
            <ul style={{ marginTop: "0" }}>
              <li>JavaScript</li>
              <li>VB Script</li>
              <li>PHP</li>
            </ul>
          </div>
          <div className="zeitraum">Abfragesprachen</div>
          <div className="taetigkeit">
            <ul style={{ marginTop: "0" }}>
              <li>SQL</li>
              <li>GraphQL</li>
              <li>XPath</li>
            </ul>
          </div>
          <div className="zeitraum">Programmiersprachen</div>
          <div className="taetigkeit">
            <ul style={{ marginTop: "0" }}>
              <li>Java (Grundkenntnisse)</li>
            </ul>
          </div>
          <div className="zeitraum">Web-Entwicklung</div>
          <div className="taetigkeit">
            <ul style={{ marginTop: "0" }}>
              <li>HTML5</li>
              <li>CSS3/ Sass</li>
              <li>ReactJS</li>
              <li>Laravel</li>
            </ul>
          </div>
          <div className="zeitraum">Office-Programme</div>
          <div className="taetigkeit">
            <ul style={{ marginTop: "0" }}>
              <li>Word</li>
              <li>Excel</li>
              <li>Outlook</li>
            </ul>
          </div>
        </div>
      </div>
    </HauptSectionWrapper>
  )
}

const HauptSectionWrapper = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-rows: 10rem 4fr;
  padding-bottom: 2rem;

  .cv-head {
  
    padding-top: 2rem;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    
    .name {
    
    }
    
    .title {
      font-size: 1rem;
      text-transform: uppercase;
    }
  }

  .zeitraum {
    padding-right: 1rem;
  }

  .columns {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 1rem 0;
    font-size: 0.9rem;
    ul {
      margin: 0.5rem 0;
      list-style: none;

      li {
        margin: 0.25rem 0 0 0;
        padding-left: 0.7em;
        text-indent: -0.5rem;
      }
      li:before {
        content: "-";
        padding-right: 0.2rem;
      }
    }
  }
  
  .job-title{
    font-weight: 800;
    font-style: italic;  
  }
`
