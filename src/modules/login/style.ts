import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
    loginContainer: {
        "& .boxContainer": {
            minWidth: 400,
            minHeight: 350,
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
        "& .MuiFormControl-root": {
            backgroundColor: "#1D1E1F !important",
            borderRadius: 8,
            width: "100%"
        },
        "& .MuiOutlinedInput-input": {
            color: "#B5B7B7",
        },
        "& .Mui-focused": {
            outline: 0,
        },
        "& fieldset:focus-visible": {
            outline: 0,
        },
        "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #B5B7B7 !important",
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #fade4b !important",
        },
        "& .MuiFormControl-root:focus-visible": {
            outline: 0,
            border: 0,
        },
        "& .MuiInputBase-input:focus-visible": {
            outline: 0,
        },
        "& .MuiTypography-h6": {
            fontFamily: "Rubik",
            fontSize: "1.125rem",
            lineHeight: "1.5rem",
            color: "#863535",
            marginBottom: 20,
        },
    },
    buttonContainer: {
        marginTop: 60,
    }
}))
export default useStyles
