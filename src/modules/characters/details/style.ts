import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
    characterContainer: {
        "& .boxContainer": {
            width: "50%",
            minHeight: 400,
            backgroundColor: "#1D1E1F",
            borderRadius: 8,
            borderColor: "#1D1E1F",
            textAlign: "center",
        },
        "& .MuiTypography-h2": {
            textAlign: "center",
            fontFamily: "Rubik",
            fontSize: "2.125rem",
            lineHeight: "2.5rem",
            marginBottom: "50px",
            color: "#FADE4B",
        },
        "& .MuiTypography-h4": {
            textAlign: "center",
            fontFamily: "Rubik",
            fontSize: "1.425rem",
            lineHeight: "1.5rem",
            marginBottom: "30px",
            textTransform: "uppercase"
        }
    },
    infoContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "20px 10%"
    },
    characterInfo: {
        display: "flex",
        alignItems: "center",
        "& .MuiTypography-h6": {
            fontFamily: "Rubik",
            fontSize: "1.125rem",
            lineHeight: "1.5rem",
            color: "#FADE4B",
            marginRight: 10,
        },
        "& .MuiTypography-h5": {
            fontFamily: "Rubik",
            fontSize: "1.125rem",
            lineHeight: "1.5rem",
        },
    },
    buttonContainer: {
        marginTop: 60,
    }
}))
export default useStyles
