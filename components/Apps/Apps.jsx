import Link from "@docusaurus/Link";
import React from "react";
import Github from "../../static/img/apps/github.svg";
import Youtube from "../../static/img/apps/youtube.svg";
import Forum from "../../static/img/apps/forum.svg";
import Discord from "../../static/img/apps/discord.svg";
import Instagram from "../../static/img/apps/instagram.svg";
import Website from "../../static/img/apps/website.svg";

import s from "./apps.module.css";

const Shell = ({ color, title, children, href = "" }) => {
  return (
    <Link
      className={`${s.app} arrow-pointer`}
      href={href}
      style={{ "--hover-color": color }}
    >
      <div className={s.shell}>{children}</div>
      <span>{title}</span>
    </Link>
  );
};
const Apps = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Shell
          color={"#5865F2"}
          title={"Discord"}
          href={"https://discord.com/invite/VGrZNFPycX"}
        >
          <Discord />
        </Shell>
        <Shell
          color={"#000000"}
          title={"Github"}
          href={"https://github.com/mecha-org"}
        >
          <Github />
        </Shell>
        <Shell color={"#0E1821"} title={"Website"} href={"https://mecha.so"}>
          <Website />
        </Shell>
        <Shell
          color={"#FF6B6E"}
          title={"Forums"}
          href={"https://forum.mecha.so"}
        >
          <Forum />
        </Shell>
        <Shell
          color={"#FF0000"}
          title={"Youtube"}
          href={"https://www.youtube.com/@mechasystems"}
        >
          <Youtube />
        </Shell>
        <Shell
          color={"#E1306C"}
          title={"Instagram"}
          href={"https://www.instagram.com/mecha_systems/"}
        >
          <Instagram />
        </Shell>
        {/*missing docs*/}
        {/*<Shell color={"rgb(59, 213, 121)"} title={"Data importer"}>*/}
        {/*  <Data />*/}
        {/*</Shell>*/}

        {/*missing docs*/}
        {/*<Shell color={"rgb(58, 86, 199)"} title={"Klaviyo"}>*/}
        {/*  <Placeholder />*/}
        {/*</Shell>{" "}*/}

        {/*missing docs*/}
        {/*<Shell color={"rgb(99, 91, 255)"} title={"Stipe"}>*/}
        {/*  <Stripe />*/}
        {/*</Shell>*/}

        {/*missing docs*/}
        {/*<Shell color={"rgb(86, 189, 104)"} title={"Taxjar"}>*/}
        {/*  <TaxJar />*/}
        {/*</Shell>*/}
      </div>
    </div>
  );
};

export default Apps;
