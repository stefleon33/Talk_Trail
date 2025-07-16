import React from "react";
import NavigationButton from "../components/shared/NavigationButton";

export default function Home() {
  return (
    <main className="background-image">
      <div className="box">
        <NavigationButton
          label="R Page"
          to="/SoundPracticePage"
          className="button"
        />
        <NavigationButton
          label="L Page"
          to="/SoundPracticePage"
          className="button"
        />
      </div>
    </main>
  );
}
