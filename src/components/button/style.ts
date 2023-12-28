import { makeStyles } from '@mui/styles'
const useStyles = makeStyles(() => ({
    buttonStyle: {
        "& .MuiButton-root": {
            minWidth: 150,
            fontFamily: "Rubik",
            color: "#FFFFFF",
            border: "1px solid #fade4b",
            borderRadius: 8,
            "&:hover": {
                border: "1px solid #FFFFFF",
            }
        }
    }
}))
export default useStyles
