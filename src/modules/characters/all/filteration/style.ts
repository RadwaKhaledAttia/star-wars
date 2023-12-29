import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
    filterContainer: {
        "& .boxContainer": {
            width: "30%",
            minHeight: 350,
            backgroundColor: "#1D1E1F",
            borderRadius: 8,
            borderColor: "#1D1E1F",
            position: "relative",
            "& img": {
                position: "absolute",
                top: 30,
                right: 30,
                cursor: "pointer"
            }
        },
        "& .MuiTypography-h2": {
            textAlign: "center",
            fontFamily: "Rubik",
            fontSize: "2.125rem",
            lineHeight: "2.5rem",
            marginBottom: "50px",
            color: "#FADE4B",
        },
        "& .MuiTypography-h5": {
            fontFamily: "Rubik",
            fontSize: "1.125rem",
            lineHeight: "1.5rem",
            textAlign: "left",
            color: "#FADE4B",
        },
        "& .MuiFormControlLabel-root .MuiFormControlLabel-label": {
            fontFamily: "Rubik",
            fontSize: "0.925rem",
            lineHeight: "1.5rem",
        },
    },
    applyBtn: {
        marginTop: 60,
    }
}))
export default useStyles
