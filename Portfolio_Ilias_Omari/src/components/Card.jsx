import NftUniverse from "./../assets/nft-universe.png";
import "./pages/projects-modules.css";

const Card = () => {
  return (
    <div className="project">
      <div className="projectImg">
        <img src={NftUniverse} alt="project of Nft Universe" />
      </div>
      <div className="projectInformation">
        <div className="text">
        <h2>NFT Universe</h2>
        <p>Design & Development</p>
        </div>
        <div className="button">
            <button>Discover</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
