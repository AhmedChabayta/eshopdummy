import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3> {heroBanner.midText}</h3>
        <h1> {heroBanner.largeText1}</h1>
        <div className="hero-banner-image">
          <Image
            width={500}
            height={500}
            src={urlFor(heroBanner.image)}
            alt=""
          />
        </div>
        <div>
          <Link href={`/product/${heroBanner.product}`} passHref>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>DESCRIPTION</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
