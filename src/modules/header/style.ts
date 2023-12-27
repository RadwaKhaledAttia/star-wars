import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
    HeaderContainer: {
        height: 150,
        borderBottom: "1px #48494a solid",
        margin: "auto",
    },
    Logo: {
        height: 80,
        margin: "14px auto",
        marginBottom: 25,
        "& img": {
            height: "100%",
        }
    },
    Tabs: {
        borderBottom: 1,
        borderColor: "divider",
        margin: "auto 25%",
        "& .MuiTabs-flexContainer": {
            justifyContent: "space-around",
        },
        "& .MuiTab-root": {
            color: "#B5B7B7",
            fontFamily: "Rubik",
        },
        "& .MuiTab-root.Mui-selected": {
            color: "#FFFFFF",
        },
        "& .MuiTabs-indicator": {
            background: "#FFFFFF",
            boxShadow: "0px 0px 4px 1px #FADE4B",
        }
    }
}))
export default useStyles
