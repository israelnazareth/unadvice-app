import "./Footer.css";
import {
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

interface FooterProps {
  unadvice: string;
}

export function Footer({ unadvice }: FooterProps) {
  return (
    <footer className="share-container">
      <TwitterShareButton
        className="share-button"
        title={`"${unadvice}"\n\nvia: `}
        url={"desconselhos.vercel.app"}
      >
        <TwitterIcon size={36} round />
      </TwitterShareButton>
      <WhatsappShareButton
        className="share-button"
        title={`"${unadvice}"\n\nvia: `}
        url={"desconselhos.vercel.app"}
      >
        <WhatsappIcon size={36} round />
      </WhatsappShareButton>
    </footer>
  );
}
