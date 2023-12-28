import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
    allCharactersContainer: {
        margin: "40px 0",
        "& .MuiFormControl-root": {
            backgroundColor: "#1D1E1F !important",
            borderRadius: 8,
            width: "50%"
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
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #fade4b !important",
        },
        "& .MuiFormControl-root:focus-visible": {
            outline: 0,
        },
        "& .MuiInputBase-input:focus-visible": {
            outline: 0,
        },
        '@media(max-width: 425px)': {
            "& .MuiFormControl-root": {
                width: "90%"
            },
        },
    }
}))
export default useStyles
