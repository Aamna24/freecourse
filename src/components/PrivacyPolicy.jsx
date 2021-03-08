import React from "react";

class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

const PrivacyPolicy = () => {
  return (
    <div style={{ margin: "80px 80px 230px 80px" }}>
      <ScrollToTopOnMount />
      <h2>PRIVACY POLICY</h2>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
      perspiciatis debitis voluptates, illo, alias facere eligendi laudantium
      excepturi eaque ad asperiores veniam? Officiis, asperiores. Necessitatibus
      culpa ipsum maiores illo cum? Maiores quos neque nostrum, reiciendis quod
      dolores dicta ullam fugiat eaque itaque dolorem sapiente veritatis
      corporis distinctio alias architecto! Delectus non aliquid id nostrum ea
      ducimus accusamus dolores libero sequi? Minus non fugiat vitae libero
      nesciunt inventore, atque harum provident quisquam ipsam reprehenderit
      adipisci perspiciatis saepe, omnis illo magni voluptate quod similique ad
      sed? Culpa, pariatur dignissimos! Repellat, minima saepe? Incidunt
      molestias porro, eius, obcaecati excepturi repellendus tempora voluptatum
      hic harum qui, itaque perferendis eveniet nemo debitis possimus quod
      similique illo impedit nam totam vitae cumque ducimus officiis nulla?
      Ratione!
    </div>
  );
};

export default PrivacyPolicy;
