import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
    cardContainer: {
        maxWidth: 300,
        margin: "auto",
        backgroundColor: "#1D1E1F !important",
        color: "#F8F8F8 !important",
        transition: "all 0.3s ease",
        "& .MuiTypography-h5": {
            fontFamily: "Rubik",
            fontSize: "1.125rem",
            lineHeight: "1.5rem",
        },
        "& .MuiTypography-h6": {
            fontFamily: "Rubik",
            fontSize: "0.8rem",
            lineHeight: "1rem",
            color: "#FADE4B",
            opacity: 0,
            maxHeight: 0,
            transition: " all 0.3s ease",
        },
        "&:hover": {
            transition: "all 0.3s ease",
            transform: "scale(1.1)",
            boxShadow: "0 0 6px 1px #FADE4B",
            "& .MuiTypography-h6": {
                transition: "all 0.3s ease",
                opacity: 1,
                maxHeight: "40px",
            },
        },
    }
}))
export default useStyles
