import React from "react";

import { urls } from "./urls.js";

import GalleryFigure from "./HomePageGallery.js";
import HomeSection from "./HomeSection.js";

const HomePage = () => (
  <div className="HomePage">
    <article>
      <GalleryFigure />

      <HomeSection
        className={"Concept"}
        caption={
          <div className="ConceptContext">
            <div className="Compass">
              <img src={urls.images.compass} alt="" />
            </div>
            <div className="ConceptText">
              <h1>From concept to completion</h1>
              <p>
                Right from planning your home, laying the foundation to
                completing the entire project, our team works dilligently with
                you to make your dream a reality.
              </p>
            </div>
            <div className="Contract">
              <img src={urls.images.stech} alt="" />
            </div>
          </div>
        }
      >
        <div className="ConceptBackground">
          <img src={urls.images["3dRendering"]} alt="loading..." />
        </div>
      </HomeSection>

      <HomeSection
        className={"Creating"}
        caption={
          <div className="ConceptContext">
            <div className="ConceptText">
              <h1>Creating wonderful living spaces</h1>
              <p>
                At Lenssen Inc., our mantra is “Enhance the Building
                Experience”.  We aim to provide our clients with not only an
                excellent final product, but also an excellent building
                experience.
              </p>
            </div>
          </div>
        }
      >
        <div className="ConceptBackground">
          <img src={urls.images.photo1} alt="loading..." />
        </div>
      </HomeSection>

      <HomeSection
        className={"Detail"}
        caption={
          <div className="ConceptContext">
            <div className="ConceptText">
              <h1>Little details that make a big difference</h1>
              <p>
                We pay attention to even the tiniest details that go a long way
                into making your home beautiful. We guarantee to build you a
                home that you will love coming back to.
              </p>
            </div>
          </div>
        }
      >
        <div className="PhotoPanel">
          <img
            src={urls.images.detail1}
            alt="detail-1"
            className="Photo Photo-1"
          />
          <img
            src={urls.images.detail2}
            alt="detail-2"
            className="Photo Photo-2"
          />
          <img
            src={urls.images.detail3}
            alt="detail-3"
            className="Photo Photo-3"
          />
        </div>
      </HomeSection>

      <div className="HomePageKitchenDetailsSection">
        <img src={urls.images.kitchen} alt="" className="KitchenBackground" />
        <img
          src={urls.images.kitchenOverlay}
          alt=""
          className="KitchenOverlay"
        />
      </div>
    </article>
  </div>
);

export default HomePage;
