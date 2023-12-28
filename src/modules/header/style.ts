import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
    HeaderContainer: {
        position: "relative",
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
        },
        '@media(max-width: 770px)': {
            "& .MuiTab-root": {
                display: "none",
            },
        },
    },
    signInButton: {
        position: "absolute",
        right: 30,
        top: 20,
        backgroundColor: "transparent",
        border: 0,
        display: "flex",
        alignItems: "center",
        fontFamily: "Rubik",
        textTransform: "uppercase",
        fontSize: "1rem",
        lineHeight: "1.5rem",
        fontWeight: 500,
        color: "#fff",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "& p": {
            margin: 0,
            marginLeft: 10,
        },
        "&:hover": {
            transition: "all 0.3s ease",
            transform: "scale(1.1)",
        }
    }
}))
export default useStyles
