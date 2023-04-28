import { MdOutlineDeliveryDining } from 'react-icons/md';
import { CgInfinity } from 'react-icons/cg'
import { AiOutlineSecurityScan } from 'react-icons/ai'
import {TiThumbsOk} from 'react-icons/ti';

const serviceData = [
    {
      icon: <MdOutlineDeliveryDining size={40} />,
      title: "Free Shipping",
      subtitle: "On purchases over $30.",
      bg: "#f2f1b2",
    },
    {
      icon: <CgInfinity size={40} />,
      title: "Easy Returns",
      subtitle: "If the item is unused.",
      bg: "#f2e0f5",
    },
    {
      icon: <AiOutlineSecurityScan size={40} />,
      title: "Save Payment",
      subtitle: "No hidden payments.",
      bg: "#fdefe6",
    },
    {
      icon: <TiThumbsOk size={40} />,
      title: " Best quality",
      subtitle: "Made with love.",
      bg: "#d6e5fb",
    },
  ];
  
  export default serviceData;