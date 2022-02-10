import React from "react";
import "./sidebar.scss";
import SidebarRow from "./SidebarRow";
import { ExpandMoreOutlined } from "@material-ui/icons";


import Picture from '../../assets/img/profile.jfif'

function Sidebar() {

  return (
    <div className="sidebar">
      <SidebarRow src={Picture} title="Muhammed Dağdelen" />
      <SidebarRow src="https://www.facebook.com/rsrc.php/v3/y8/r/S0U5ECzYUSu.png" title="Find Friend"/>
      <SidebarRow src="https://www.facebook.com/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" title="Groups" />
      <SidebarRow src="https://www.facebook.com/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" title="Marketplace" />
      <SidebarRow src="https://www.facebook.com/rsrc.php/v3/y5/r/duk32h44Y31.png" title="Watch" />
      <SidebarRow src="https://www.facebook.com/rsrc.php/v3/y8/r/he-BkogidIc.png" title="Members" />
      <SidebarRow src="https://www.facebook.com/rsrc.php/v3/yD/r/lVijPkTeN-r.png" title="Save" />
      <SidebarRow src="https://www.facebook.com/rsrc.php/v3/yj/r/0gH3vbvr8Ee.png" title="Pages"/>
      <SidebarRow src="https://www.facebook.com/rsrc.php/v3/ya/r/_ieo6WvmKuc.png" title="Etkinlikler"/>
      <SidebarRow Icon={ExpandMoreOutlined} title="More..." className="more"/>
      <hr />
      <h3>Your Shortcuts</h3>
      <SidebarRow src="https://scontent.fesb3-1.fna.fbcdn.net/v/t39.2081-6/c1.1.72.72a/p72x72/42630609_2166936443330818_3464735768197464064_n.png?_nc_cat=1&ccb=1-5&_nc_sid=eaa83b&_nc_ohc=SBgE0HZDkn8AX_Hu2du&_nc_ht=scontent.fesb3-1.fna&oh=00_AT8Z6Z_jJBXJs-hmjDvb2eUT2_Ps2iGkhqkyf7-1_DAl1w&oe=6209B0D7" title="8 Ball Pool"/>
    </div>
  );
}

export default Sidebar;