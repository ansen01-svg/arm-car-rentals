import { useRouter } from "next/navigation";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { drawerNavItems } from "@/app/utils/arrays";

export default function AsideNav() {
  const router = useRouter();

  return (
    <div className="w-full">
      <List>
        {drawerNavItems.map((navItem) => (
          <ListItem key={navItem.id} disablePadding>
            <ListItemButton onClick={() => router.push(navItem.link)}>
              <ListItemIcon>{navItem.icon}</ListItemIcon>
              <ListItemText
                primary={navItem.tittle}
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "rgba(36,39,44,.7)",
                    // fontFamily: "__Inter_e66fe9,__Inter_Fallback_e66fe9",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
