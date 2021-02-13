import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import 'typeface-roboto';


const Legacy = () => (
    <div class="wrapper">
      <content>
        <div class="section">
          <div class="title">🎬 Youtube Channel</div>
          <div class="description">
            Hi, my name is Luke, I am a full stack developer.
            I would like to invite you to my
            <br />
            <div class="youtube">
              <a
                class="youtube button"
                href="https://www.youtube.com/channel/UCs_0IjH05wHXhmk12RyWxeQ"
                target="_blank"
              >
                10X Developer channel on Youtube
              </a>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="title">
            ☑️ TAXX - Task Assistant PWA
          </div>
          <div class="description">
            Application to manage my daily tasks.
            It is a fullstack application;
            Code is stored in a
            <a
              href="https://www.youtube.com/watch?v=9JrQP90c45E"
              target="_blank"
            >monorepo</a>.

            <ul class="tags">
              <li>Typescript</li>
              <li>Docker</li>
              <li>React</li>
              <li>TypeORM</li>
              <li>Nest.js</li>
              <li>Postgres</li>
              <li>Styled components</li>
              <li>AntD</li>
              <li>Responsive Layout</li>
              <li>Monorepo</li>
              <li>OpenId Connect</li>
              <li>Auth0</li>
            </ul>

            <div class="links">
              <a
                class="taxx"
                href="http://taxx-spa.herokuapp.com/"
                target="_blank"
                >
                  TAXX demo
              </a>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="title">
            🎲 Battle - Dice Rolling Game
          </div>
          <div class="description">
            You are a human and your opponent is a monster, both have 10 lives at the start.
            Each of you roll two dice,
            the one who score higher hits their opponent
            and the opponent loses as many lives as is the score difference.

            <ul class="tags">
              <li>Typescript</li>
              <li>Docker</li>
              <li>React</li>
              <li>Styled Components</li>
              <li>Responsive Layout</li>
              <li>TDD</li>
              <li>Jest</li>
              <li>Testing Library</li>
            </ul>

            <div class="links">
              <a
                class="button"
                href="https://hidden-taiga-69915.herokuapp.com/"
                target="_blank"
                >play</a>
              <a
                class="button"
                href="https://github.com/luke10x/battle"
                target="_blank"
                >source code
              </a>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="title">
            ✂️ URL Shortener
          </div>
          <div class="description">
            Software to spin your own URL shortening service,
            all you need to have is a short domain name
            (shortest is could get is <i>u.luke10x.com</i>).
            This is a fullstack project consting of both frontend
            and two backend microservices. 
            <ul class="tags">
              <li>Typescript</li>
              <li>Monorepo</li>
              <li>Docker</li>
              <li>Vue</li>
              <li>Responsive Layout</li>
              <li>Express.js</li>
              <li>MongoDb</li>
            </ul>
            <div class="links">
              <a
                class="button"
                href="https://shortnor.herokuapp.com/"
                target="_blank"
              >see it in action</a>
              <a
                class="button"
                href="https://github.com/luke10x/urlshortnr"
                target="_blank"
                >source code</a>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="title">
            🏘️ Property Manager
          </div>
          <div class="description">
            Simple dashboard to create/view/update list of properties,
            a fullstack application with GraphQL backend and React frontend.
            <ul class="tags">
              <li>Typescript</li>
              <li>Monorepo</li>
              <li>Docker</li>
              <li>React</li>
              <li>Styled Components</li>
              <li>Responsive Layout</li>
              <li>Apollo</li>
              <li>GraphQL</li>
            </ul>
            <div class="links">
              <a
                class="button"
                href="https://prop-front.herokuapp.com"
                target="_blank"
              >see it in action</a>
              <a
                class="button"
                href="https://github.com/luke10x/property-manager"
                target="_blank"
                >source code</a>
            </div>
          </div>
        </div>


        <div class="section">
            <div class="title">
              🎁 Product Grid
            </div>
            <div class="description">
              Product grid lists all the products. Uses GraphQL API.
              Built on Next.js framework.
              <ul class="tags">
                <li>Typescript</li>
                <li>Docker</li>
                <li>Next.js</li>
                <li>GraphQL</li>
                <li>codegen</li>
                <li>Responsive Layout</li>
                <li>Jest</li>
              </ul>
  
              <div class="links">
                <a
                  class="button"
                  href="https://prod-grid.herokuapp.com/"
                  target="_blank"
                  >See it in action</a>
                <a
                  class="button"
                  href="https://github.com/luke10x/product-grid"
                  target="_blank"
                  >source code
                </a>
              </div>
            </div>
        </div>

        <div class="section">
          <div class="title">
            🔍 Log Viewer
          </div>
          <div class="description">
            A full stack solution to display big log files.
            The backend gives paged results that are loaded on demand.
            To save cleint resources the frontend collapses last loaded pages,
            when some new pages are loaded.
            <ul class="tags">
              <li>Typescript</li>
              <li>Monorepo</li>
              <li>Docker</li>
              <li>React</li>
              <li>Styled Components</li>
              <li>Responsive Layout</li>
              <li>Express.js</li>
            </ul>
            <div class="links">
              <a
                class="button"
                href="https://lvfront.herokuapp.com"
                target="_blank"
              >see it in action</a>
              <a
                class="button"
                href="https://github.com/luke10x/logviewer"
                target="_blank"
                >source code</a>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="title">
            🎩 Top Trumps (WIP)
          </div>
          <div class="description">
            Another clicking game. 
            Inspired by the original
            <a 
              href="https://en.wikipedia.org/wiki/Top_Trumps"
              target="_blank"

            >Top Trumps</a>
            game.
            AI opponents are not really smart at the moment,
            and the documentation needs to be updated. 🚧
            <ul class="tags">
              <li>Typescript</li>
              <li>Docker</li>
              <li>React</li>
              <li>React Router</li>
              <li>Styled Components</li>
              <li>Responsive Layout</li>
            </ul>
            <div class="links">
              <a
                class="button"
                href="https://www.luke10x.dev/toptrumps/"
                target="_blank"
              >play</a>
              <a
                class="button"
                href="https://github.com/luke10x/toptrumps"
                target="_blank"
                >source code</a>
            </div>
          </div>

        </div>

        <div class="section">
          <div class="title">
            🍑 Offer API
          </div>
          <div class="description">
            REST api built with Spring Boot.
            It was written entirelly in TDD.
            <ul class="tags">
              <li>Java</li>
              <li>Spring Boot</li>
              <li>REST</li>
              <li>TDD</li>
            </ul>
            <div class="links">
              <a
                class="button"
                href="https://github.com/luke10x/offer-api"
                target="_blank"
                >source code</a>
            </div>
          </div>

        </div>

        <div class="section">
          <div class="title">
            🔌 p10xy (HTTP proxy)
          </div>
          <div class="description">
            HTTP proxy that can modify http headers.
            Work in progress still, only good for some personal needs.
            But it has complete CD pipelines setup using Travis.  
            <ul class="tags">
              <li>Monorepo</li>
              <li>Docker</li>
              <li>CI/CD</li>
              <li>Travis</li>
              <li>Circle CI</li>
            </ul>
            <div class="links">
              <a
                class="button"
                href="https://github.com/luke10x/p10xy"
                target="_blank"
                >source code</a>
            </div>
          </div>
        </div>

      </content>
    </div>
);

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <Legacy />
      <p>
        Home index
      </p>

    </Layout>
  );
}

export default IndexPage
