import Vue from "vue";
import { OhVueIcon, addIcons } from "../lib";

import * as AiIcons from "../../package/icons/ai";
import * as CiIcons from "../../package/icons/ci";
import * as CoIcons from "../../package/icons/co";
import * as BiIcons from "../../package/icons/bi";
import * as FiIcons from "../../package/icons/fi";
import * as FaIcons from "../../package/icons/fa";
import * as FcIcons from "../../package/icons/fc";
import * as GiIcons from "../../package/icons/gi";
import * as HiIcons from "../../package/icons/hi";
import * as IoIcons from "../../package/icons/io";
import * as LaIcons from "../../package/icons/la";
import * as MdIcons from "../../package/icons/md";
import * as OiIcons from "../../package/icons/oi";
import * as PiIcons from "../../package/icons/pi";
import * as PrIcons from "../../package/icons/pr";
import * as PxIcons from "../../package/icons/px";
import * as RiIcons from "../../package/icons/ri";
import * as SiIcons from "../../package/icons/si";
import * as ViIcons from "../../package/icons/vi";
import * as WiIcons from "../../package/icons/wi";

const Ai = Object.values({ ...AiIcons }),
  Bi = Object.values({ ...BiIcons }),
  Ci = Object.values({ ...CiIcons }),
  Co = Object.values({ ...CoIcons }),
  Fi = Object.values({ ...FiIcons }),
  Fa = Object.values({ ...FaIcons }),
  Fc = Object.values({ ...FcIcons }),
  Gi = Object.values({ ...GiIcons }),
  Hi = Object.values({ ...HiIcons }),
  Io = Object.values({ ...IoIcons }),
  La = Object.values({ ...LaIcons }),
  Md = Object.values({ ...MdIcons }),
  Oi = Object.values({ ...OiIcons }),
  Pi = Object.values({ ...PiIcons }),
  Pr = Object.values({ ...PrIcons }),
  Px = Object.values({ ...PxIcons }),
  Ri = Object.values({ ...RiIcons }),
  Si = Object.values({ ...SiIcons }),
  Vi = Object.values({ ...ViIcons }),
  Wi = Object.values({ ...WiIcons });

addIcons(...Ai);
addIcons(...Bi);
addIcons(...Ci);
addIcons(...Co);
addIcons(...Fi);
addIcons(...Fa);
addIcons(...Fc);
addIcons(...Gi);
addIcons(...Hi);
addIcons(...Io);
addIcons(...La);
addIcons(...Md);
addIcons(...Oi);
addIcons(...Pi);
addIcons(...Pr);
addIcons(...Px);
addIcons(...Ri);
addIcons(...Si);
addIcons(...Vi);
addIcons(...Wi);

addIcons(
  {
    name: "baidu",
    width: 23.868,
    height: 26,
    d:
      "M3.613 13.701c2.827-.608 2.442-3.986 2.357-4.725-.138-1.139-1.477-3.128-3.296-2.971C.386 6.21.052 9.515.052 9.515c-.309 1.528.74 4.793 3.561 4.186zm3.002 5.875c-.083.238-.268.846-.107 1.375.315 1.187 1.346 1.24 1.346 1.24h1.48v-3.619H7.749c-.713.213-1.057.767-1.134 1.004zM8.86 8.035c1.562 0 2.823-1.797 2.823-4.019C11.683 1.796 10.421 0 8.86 0 7.301 0 6.036 1.796 6.036 4.016c0 2.222 1.265 4.019 2.824 4.019zm6.724.265c2.087.271 3.429-1.956 3.695-3.644.272-1.686-1.074-3.644-2.552-3.98-1.48-.339-3.329 2.032-3.497 3.578-.2 1.89.271 3.778 2.354 4.046zm5.114 9.923s-3.229-2.498-5.113-5.198c-2.555-3.981-6.185-2.361-7.399-.337-1.209 2.024-3.093 3.305-3.36 3.644-.271.334-3.9 2.293-3.095 5.871.806 3.576 3.635 3.508 3.635 3.508s2.085.205 4.504-.336c2.42-.537 4.503.134 4.503.134s5.652 1.893 7.199-1.751c1.545-3.645-.874-5.535-.874-5.535zm-9.671 5.423H7.352c-1.587-.316-2.219-1.4-2.299-1.584-.078-.188-.528-1.059-.29-2.539.686-2.219 2.642-2.379 2.642-2.379h1.956V14.74l1.666.025v8.881zm6.844-.025h-4.229c-1.639-.423-1.716-1.587-1.716-1.587v-4.677l1.716-.027v4.203c.104.447.661.529.661.529h1.742v-4.705h1.825v6.264zm5.986-12.486c0-.808-.671-3.239-3.159-3.239-2.492 0-2.825 2.295-2.825 3.917 0 1.548.131 3.71 3.227 3.641 3.096-.068 2.757-3.507 2.757-4.319z"
  },
  {
    name: "webpack",
    width: 1200,
    height: 1200,
    paths: [
      {
        fill: "#8ED6FB",
        d:
          "M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z"
      },
      {
        fill: "#1C78C0",
        d:
          "M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z"
      }
    ]
  },
  {
    name: "vue",
    width: 256,
    height: 221,
    polygons: [
      {
        fill: "#41B883",
        points: "0,0 128,220.8 256,0 204.8,0 128,132.48 50.56,0 0,0"
      },
      {
        fill: "#35495E",
        points: "50.56,0 128,133.12 204.8,0 157.44,0 128,51.2 97.92,0 50.56,0"
      }
    ]
  },
  {
    name: "html5-c",
    width: 512,
    height: 512,
    raw:
      '<path fill="#E34F26" d="M71,460 L30,0 481,0 440,460 255,512"/><path fill="#EF652A" d="M256,472 L405,431 440,37 256,37"/><path fill="#EBEBEB" d="M256,208 L181,208 176,150 256,150 256,94 255,94 114,94 115,109 129,265 256,265zM256,355 L255,355 192,338 188,293 158,293 132,293 139,382 255,414 256,414z"/><path fill="#FFF" d="M255,208 L255,265 325,265 318,338 255,355 255,414 371,382 372,372 385,223 387,208 371,208zM255,94 L255,129 255,150 255,150 392,150 392,150 392,150 393,138 396,109 397,94z"/>'
  }
);

Vue.component("v-icon", OhVueIcon);
