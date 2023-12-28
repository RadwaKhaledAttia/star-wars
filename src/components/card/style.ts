import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
    cardContainer: {
        maxWidth: 300,
        margin: "auto",
        backgroundColor: "#1D1E1F !important",
        color: "#F8F8F8 !important",
        transition: "all .3s ease-in-out",
        "& .MuiTypography-root": {
            fontFamily: "Rubik",
            fontSize: "1.125rem",
            lineHeight: "1.5rem",
        },
        "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "0 0 6px 1px #FADE4B"
        }
    }
}))
export default useStyles
