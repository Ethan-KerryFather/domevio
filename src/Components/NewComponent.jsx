import React, { useState } from "react";
import FooterComponent from "./Footer";
import axios from "axios";
import NewsList from "./NewsList";
export default function NewComponent() {
  return (
    <div>
      <hr />
      <NewsList />
      <br />
      <br />
      <FooterComponent />
    </div>
  );
}
